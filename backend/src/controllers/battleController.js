import { db } from '../database/db.js';

function generateRoomPin() {
  return Math.floor(100000 + Math.random() * 900000).toString();
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
      status: 'waiting', // 'waiting' | 'playing' | 'podium'
      totalQuestions: questions.length,
      currentQuestionIndex: 0,
      players: [],
      submissions: {}, // playerId -> array of answers
      createdAt: new Date().toISOString()
    };

    db.insert('battle_rooms', room);

    // Host & Origin URL resolution
    const protocol = req.headers['x-forwarded-proto'] || req.protocol || 'http';
    const host = req.headers['x-forwarded-host'] || req.get('host') || 'localhost:5000';
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

    const room = db.findOne('battle_rooms', r => r.pin === pin.trim());
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi với mã PIN này' });
    }

    if (room.status === 'podium') {
      return res.status(400).json({ success: false, message: 'Phòng thi này đã kết thúc' });
    }

    let player = (room.players || []).find(p => p.name === playerName.trim() || (studentId && p.studentId === studentId.trim()));
    if (!player) {
      player = {
        id: `player_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name: playerName.trim(),
        studentId: studentId.trim(),
        score: 0,
        correctCount: 0,
        totalAnswered: 0,
        joinedAt: new Date().toISOString()
      };
      const updatedPlayers = [...(room.players || []), player];
      db.update('battle_rooms', r => r.pin === pin.trim(), { players: updatedPlayers });
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
    const { hostToken, playerId } = req.query;

    const room = db.findOne('battle_rooms', r => r.pin === pin.trim());
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi' });
    }

    const isHost = hostToken && room.hostToken === hostToken;
    const questions = db.find('questions', q => q.quizId === room.quizId);

    // Sanitized questions for current stage (hide isCorrect from options)
    const sanitizedQuestions = questions.map(q => {
      const options = db.find('question_options', opt => opt.questionId === q.id).map(opt => ({
        id: opt.id,
        label: opt.label,
        content: opt.content
      }));
      return {
        id: q.id,
        type: q.type,
        content: q.content,
        options,
        orderIndex: q.orderIndex
      };
    });

    // If Host: include full leaderboard & podium
    if (isHost) {
      const sortedPlayers = [...(room.players || [])].sort((a, b) => (b.score || 0) - (a.score || 0));
      return res.json({
        success: true,
        isHost: true,
        pin: room.pin,
        quizTitle: room.quizTitle,
        scoringMode: room.scoringMode,
        status: room.status,
        players: sortedPlayers,
        leaderboard: sortedPlayers.map((p, idx) => ({
          rank: idx + 1,
          name: p.name,
          studentId: p.studentId,
          score: p.score || 0,
          correctCount: p.correctCount || 0
        })),
        totalQuestions: questions.length,
        questions: sanitizedQuestions
      });
    }

    // If Participant: mask other players' scores to comply with privacy requirement!
    const currentPlayer = (room.players || []).find(p => p.id === playerId);
    const maskedPlayers = (room.players || []).map(p => ({
      name: p.name,
      joinedAt: p.joinedAt
    }));

    res.json({
      success: true,
      isHost: false,
      pin: room.pin,
      quizTitle: room.quizTitle,
      status: room.status,
      players: maskedPlayers,
      totalQuestions: questions.length,
      questions: sanitizedQuestions,
      myStats: currentPlayer ? {
        score: currentPlayer.score || 0,
        correctCount: currentPlayer.correctCount || 0,
        totalAnswered: currentPlayer.totalAnswered || 0,
        history: room.submissions?.[playerId] || []
      } : null
    });
  } catch (error) {
    console.error('getRoom error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/battle/start
export const startBattle = (req, res) => {
  try {
    const { pin, hostToken } = req.body;
    const room = db.findOne('battle_rooms', r => r.pin === pin.trim());
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi' });
    }
    if (room.hostToken !== hostToken) {
      return res.status(403).json({ success: false, message: 'Chỉ chủ phòng mới có quyền bắt đầu thi đấu' });
    }

    db.update('battle_rooms', r => r.pin === pin.trim(), {
      status: 'playing',
      startedAt: new Date().toISOString()
    });

    res.json({ success: true, message: 'Cuộc thi đã bắt đầu!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/battle/submit-answer
export const submitAnswer = (req, res) => {
  try {
    const { pin, playerId, questionId, selectedOptionId, timeSpentSeconds = 5 } = req.body;
    const room = db.findOne('battle_rooms', r => r.pin === pin.trim());
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi' });
    }

    const option = db.findOne('question_options', opt => opt.id === selectedOptionId);
    const isCorrect = option ? !!option.isCorrect : false;

    // Calculate points based on scoring mode
    let points = 0;
    if (isCorrect) {
      if (room.scoringMode === 'fastest_per_question') {
        // 500 base + up to 500 bonus for speed (20s limit)
        const speedBonus = Math.max(0, Math.floor((20 - Math.min(20, timeSpentSeconds)) * 25));
        points = 500 + speedBonus;
      } else {
        points = 100;
      }
    }

    // Update player record
    const updatedPlayers = (room.players || []).map(p => {
      if (p.id === playerId) {
        return {
          ...p,
          score: (p.score || 0) + points,
          correctCount: (p.correctCount || 0) + (isCorrect ? 1 : 0),
          totalAnswered: (p.totalAnswered || 0) + 1
        };
      }
      return p;
    });

    const playerSubmissions = room.submissions?.[playerId] || [];
    playerSubmissions.push({
      questionId,
      selectedOptionId,
      isCorrect,
      points,
      timeSpentSeconds
    });

    const newSubmissions = {
      ...(room.submissions || {}),
      [playerId]: playerSubmissions
    };

    db.update('battle_rooms', r => r.pin === pin.trim(), {
      players: updatedPlayers,
      submissions: newSubmissions
    });

    res.json({
      success: true,
      isCorrect,
      points,
      correctOptionId: isCorrect ? selectedOptionId : null
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/battle/finish
export const finishBattle = (req, res) => {
  try {
    const { pin, hostToken } = req.body;
    const room = db.findOne('battle_rooms', r => r.pin === pin.trim());
    if (!room) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy phòng thi' });
    }
    if (room.hostToken !== hostToken) {
      return res.status(403).json({ success: false, message: 'Chỉ chủ phòng mới có quyền kết thúc phòng đấu' });
    }

    const sortedPlayers = [...(room.players || [])].sort((a, b) => (b.score || 0) - (a.score || 0));

    db.update('battle_rooms', r => r.pin === pin.trim(), {
      status: 'podium',
      finishedAt: new Date().toISOString()
    });

    res.json({
      success: true,
      leaderboard: sortedPlayers
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

