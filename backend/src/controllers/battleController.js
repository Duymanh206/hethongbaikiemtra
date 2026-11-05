import { db } from '../database/db.js';

function generateRoomPin() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function getOrHealRoom(pin, defaultQuizId = null) {
  if (!pin) return null;
  const pinStr = String(pin).trim();
  let room = db.findOne('battle_rooms', r => String(r.pin).trim() === pinStr);
  if (!room) {
    const qId = defaultQuizId || 'quiz_cnxhkh_05';
    const quiz = db.findOne('quizzes', q => q.id === qId) || db.findOne('quizzes', () => true);
    if (quiz) {
      const questions = db.find('questions', q => q.quizId === quiz.id);
      room = {
        id: `battle_${pinStr}`,
        pin: pinStr,
        quizId: quiz.id,
        quizTitle: quiz.title,
        scoringMode: 'total_points',
        hostName: 'Chủ phòng',
        hostToken: `host_${pinStr}`,
        status: 'playing',
        totalQuestions: questions.length,
        currentQuestionIndex: 0,
        players: [],
        submissions: {},
        createdAt: new Date().toISOString()
      };
      db.insert('battle_rooms', room);
    }
  }
  return room;
}

// POST /api/battle/create-room
export const createRoom = (req, res) => {
  try {
    const { quizId, scoringMode = 'total_points', hostName = 'Chủ phòng' } = req.body;

    const quiz = db.findOne('quizzes', q => q.id === quizId);
    if (!quiz) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy đề thi để tạo phòng' });
    }

    const questions = db.find('questions', q => q.quizId === quizId);
    if (questions.length === 0) {
      return res.status(400).json({ success: false, message: 'Đề thi này chưa có câu hỏi để thi đấu' });
    }

    const pin = generateRoomPin();
    const hostToken = `host_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const room = {
      id: `battle_${pin}`,
      pin,
      quizId,
      quizTitle: quiz.title,
      scoringMode,
      hostName,
      hostToken,
      status: 'waiting', // 'waiting' | 'playing' | 'reveal' | 'podium'
      totalQuestions: questions.length,
      currentQuestionIndex: 0,
      players: [],
      submissions: {},
      createdAt: new Date().toISOString()
    };

    db.insert('battle_rooms', room);

    const protocol = (req.headers && req.headers['x-forwarded-proto']) || req.protocol || 'http';
    const host = (req.headers && req.headers['x-forwarded-host']) || (typeof req.get === 'function' ? req.get('host') : req.headers?.host) || 'localhost:5000';
    const shareLink = `${protocol}://${host}/?pin=${pin}`;

    res.json({
      success: true,
      pin,
      hostToken,
      quizTitle: quiz.title,
      scoringMode,
      totalQuestions: questions.length,
      shareLink
    });
  } catch (error) {
    console.error('createRoom error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/battle/join-room
export const joinRoom = (req, res) => {
  try {
    const { pin, playerName = 'Thí sinh', studentId = '' } = req.body;
    if (!pin) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập mã PIN phòng' });
    }

    const room = getOrHealRoom(pin);
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi với mã PIN này' });
    }

    if (room.status === 'podium') {
      return res.status(400).json({ success: false, message: 'Phòng thi này đã kết thúc' });
    }

    const pinStr = String(pin).trim();
    let player = (room.players || []).find(p => p.name === playerName.trim() || (studentId && p.studentId === studentId.trim()));
    if (!player) {
      player = {
        id: `player_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name: playerName.trim(),
        nickname: playerName.trim(),
        studentId: studentId.trim(),
        score: 0,
        correctCount: 0,
        correctAnswersCount: 0,
        totalAnswered: 0,
        joinedAt: new Date().toISOString()
      };
      const updatedPlayers = [...(room.players || []), player];
      db.update('battle_rooms', r => String(r.pin).trim() === pinStr, { players: updatedPlayers });
      room.players = updatedPlayers;
    }

    res.json({
      success: true,
      playerId: player.id,
      pin: room.pin,
      quizTitle: room.quizTitle,
      status: room.status,
      player
    });
  } catch (error) {
    console.error('joinRoom error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/battle/room/:pin
export const getRoom = (req, res) => {
  try {
    const { pin } = req.params;
    const { hostToken, playerId, playerName } = req.query;

    const room = getOrHealRoom(pin);
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi' });
    }

    const pinStr = String(pin).trim();
    const isHost = hostToken && room.hostToken === hostToken;
    const questions = db.find('questions', q => q.quizId === room.quizId);

    // Auto-register player in room if visiting
    if (playerId && !room.players.some(p => p.id === playerId)) {
      const autoP = {
        id: playerId,
        name: playerName || 'Thí sinh',
        nickname: playerName || 'Thí sinh',
        score: 0,
        correctCount: 0,
        correctAnswersCount: 0,
        totalAnswered: 0,
        joinedAt: new Date().toISOString()
      };
      room.players = [...(room.players || []), autoP];
      db.update('battle_rooms', r => String(r.pin).trim() === pinStr, { players: room.players });
    }

    // Sanitized questions with full metadata
    const sanitizedQuestions = questions.map((q, idx) => {
      const allOpts = db.find('question_options', opt => opt.questionId === q.id);
      const options = allOpts.map(opt => ({
        id: opt.id,
        label: opt.label,
        content: opt.content
      }));
      const correctOpt = allOpts.find(opt => opt.isCorrect);

      return {
        id: q.id,
        type: q.type,
        content: q.content,
        options,
        orderIndex: q.orderIndex || idx + 1,
        questionIndex: idx + 1,
        totalQuestions: questions.length,
        timeLimitSeconds: 20,
        correctOptionLabel: correctOpt?.label || 'A',
        correctOptionContent: correctOpt?.content || ''
      };
    });

    const sortedPlayers = [...(room.players || [])].sort((a, b) => (b.score || 0) - (a.score || 0));
    const leaderboard = sortedPlayers.map((p, idx) => ({
      rank: idx + 1,
      id: p.id,
      name: p.name,
      nickname: p.name,
      studentId: p.studentId,
      score: p.score || 0,
      correctCount: p.correctCount || 0,
      correctAnswersCount: p.correctCount || 0,
      totalAnswered: p.totalAnswered || 0
    }));

    const podium = {
      first: leaderboard[0] || null,
      second: leaderboard[1] || null,
      third: leaderboard[2] || null
    };

    // Current player details
    const currentPlayer = (room.players || []).find(p => p.id === playerId || p.name === playerId || p.name === playerName);
    const playerHistory = (room.submissions && room.submissions[playerId]) || [];
    const myScore = currentPlayer ? (currentPlayer.score || 0) : 0;
    const correctCount = currentPlayer ? (currentPlayer.correctCount || 0) : 0;
    const totalAnswered = currentPlayer ? (currentPlayer.totalAnswered || 0) : 0;
    const wrongCount = Math.max(0, totalAnswered - correctCount);
    const percentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    const myResult = {
      myScore,
      score: myScore,
      correctCount,
      wrongCount,
      totalAnswered,
      percentage,
      answersBreakdown: playerHistory
    };

    const curQIndex = Math.min(room.currentQuestionIndex || 0, Math.max(0, sanitizedQuestions.length - 1));
    const currentQuestion = sanitizedQuestions[curQIndex] || sanitizedQuestions[0] || null;

    // Count how many players have answered current question
    let currentQAnsweredCount = 0;
    if (room.submissions && currentQuestion) {
      Object.values(room.submissions).forEach(subList => {
        if (Array.isArray(subList) && subList.some(s => s.questionId === currentQuestion.id || s.questionIndex === curQIndex + 1)) {
          currentQAnsweredCount++;
        }
      });
    }

    res.json({
      success: true,
      pin: room.pin,
      quizTitle: room.quizTitle,
      status: room.status, // 'waiting' | 'playing' | 'reveal' | 'podium'
      scoringMode: room.scoringMode,
      totalQuestions: questions.length,
      currentQuestionIndex: curQIndex,
      currentQuestion,
      questions: sanitizedQuestions,
      players: leaderboard,
      leaderboard,
      answeredCount: currentQAnsweredCount,
      podium,
      isHost: !!isHost,
      myResult,
      myStats: myResult
    });
  } catch (error) {
    console.error('getRoom error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/battle/start
export const startBattle = (req, res) => {
  try {
    const { pin } = req.body;
    const room = getOrHealRoom(pin);
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi' });
    }

    const pinStr = String(pin).trim();
    db.update('battle_rooms', r => String(r.pin).trim() === pinStr, {
      status: 'playing',
      currentQuestionIndex: 0,
      startedAt: new Date().toISOString()
    });

    res.json({ success: true, message: 'Cuộc thi đã bắt đầu!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/battle/next-question
export const nextQuestion = (req, res) => {
  try {
    const { pin, questionIndex } = req.body;
    const room = getOrHealRoom(pin);
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi' });
    }

    const pinStr = String(pin).trim();
    const questions = db.find('questions', q => q.quizId === room.quizId);
    let nextIdx = typeof questionIndex === 'number' ? questionIndex : (room.currentQuestionIndex || 0) + 1;

    if (nextIdx >= questions.length) {
      db.update('battle_rooms', r => String(r.pin).trim() === pinStr, {
        status: 'podium',
        currentQuestionIndex: questions.length - 1,
        finishedAt: new Date().toISOString()
      });
      return res.json({ success: true, finished: true, status: 'podium' });
    }

    db.update('battle_rooms', r => String(r.pin).trim() === pinStr, {
      status: 'playing',
      currentQuestionIndex: nextIdx
    });

    res.json({
      success: true,
      currentQuestionIndex: nextIdx,
      status: 'playing'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/battle/submit-answer
export const submitAnswer = (req, res) => {
  try {
    const { pin, playerId, playerName = 'Thí sinh', questionId, selectedOptionId, timeSpentSeconds = 5 } = req.body;
    const room = getOrHealRoom(pin);
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi' });
    }

    const pinStr = String(pin).trim();
    const question = db.findOne('questions', q => q.id === questionId);
    const chosenOption = db.findOne('question_options', opt => opt.id === selectedOptionId);
    const allOptions = question ? db.find('question_options', opt => opt.questionId === question.id) : [];
    const correctOpt = allOptions.find(opt => opt.isCorrect);

    const isCorrect = chosenOption ? !!chosenOption.isCorrect : false;

    // Calculate points based on scoring mode
    let points = 0;
    if (isCorrect) {
      if (room.scoringMode === 'fastest_per_question') {
        const speedBonus = Math.max(0, Math.floor((20 - Math.min(20, timeSpentSeconds)) * 25));
        points = 500 + speedBonus;
      } else {
        points = 100;
      }
    }

    let currentPlayerScore = 0;
    let currentPlayerCorrectCount = 0;

    // Find or create player
    const pid = playerId || `p_${String(playerName).replace(/\s+/g, '_')}`;
    let found = false;
    const updatedPlayers = (room.players || []).map(p => {
      if (p.id === pid || p.name === playerName) {
        found = true;
        const newScore = (p.score || 0) + points;
        const newCorrect = (p.correctCount || 0) + (isCorrect ? 1 : 0);
        currentPlayerScore = newScore;
        currentPlayerCorrectCount = newCorrect;
        return {
          ...p,
          score: newScore,
          correctCount: newCorrect,
          correctAnswersCount: newCorrect,
          totalAnswered: (p.totalAnswered || 0) + 1
        };
      }
      return p;
    });

    if (!found) {
      currentPlayerScore = points;
      currentPlayerCorrectCount = isCorrect ? 1 : 0;
      updatedPlayers.push({
        id: pid,
        name: playerName,
        nickname: playerName,
        score: points,
        correctCount: currentPlayerCorrectCount,
        correctAnswersCount: currentPlayerCorrectCount,
        totalAnswered: 1
      });
    }

    const answerItem = {
      questionIndex: (room.currentQuestionIndex || 0) + 1,
      questionId,
      questionContent: question?.content || 'Câu hỏi',
      chosenLabel: chosenOption?.label || '',
      chosenContent: chosenOption?.content || '',
      isCorrect,
      correctOptionLabel: correctOpt?.label || 'A',
      correctOptionContent: correctOpt?.content || '',
      pointsAwarded: points,
      timeSpentSeconds
    };

    const playerSubmissions = (room.submissions && room.submissions[pid]) || [];
    playerSubmissions.push(answerItem);

    const newSubmissions = {
      ...(room.submissions || {}),
      [pid]: playerSubmissions
    };

    db.update('battle_rooms', r => String(r.pin).trim() === pinStr, {
      players: updatedPlayers,
      submissions: newSubmissions
    });

    res.json({
      success: true,
      isCorrect,
      points,
      myScore: currentPlayerScore,
      correctCount: currentPlayerCorrectCount,
      correctOptionLabel: correctOpt?.label || 'A',
      correctOptionContent: correctOpt?.content || '',
      correctOptionId: correctOpt ? correctOpt.id : null
    });
  } catch (error) {
    console.error('submitAnswer error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/battle/finish
export const finishBattle = (req, res) => {
  try {
    const { pin } = req.body;
    const room = getOrHealRoom(pin);
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi' });
    }

    const pinStr = String(pin).trim();
    const sortedPlayers = [...(room.players || [])].sort((a, b) => (b.score || 0) - (a.score || 0));
    const leaderboard = sortedPlayers.map((p, idx) => ({
      rank: idx + 1,
      id: p.id,
      name: p.name,
      nickname: p.name,
      studentId: p.studentId,
      score: p.score || 0,
      correctCount: p.correctCount || 0,
      correctAnswersCount: p.correctCount || 0
    }));

    const podium = {
      first: leaderboard[0] || null,
      second: leaderboard[1] || null,
      third: leaderboard[2] || null
    };

    db.update('battle_rooms', r => String(r.pin).trim() === pinStr, {
      status: 'podium',
      finishedAt: new Date().toISOString()
    });

    res.json({
      success: true,
      status: 'podium',
      leaderboard,
      podium
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
