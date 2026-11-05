import { db } from '../database/db.js';

// In-memory active battle state
const activeBattles = new Map();

function generateRoomPin() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function setupBattleSocket(io) {
  io.on('connection', socket => {
    // Create Room
    socket.on('create_room', ({ quizId, scoringMode = 'total_points', hostName = 'Chủ phòng' }, callback) => {
      try {
        const quiz = db.findOne('quizzes', q => q.id === quizId);
        if (!quiz) {
          return callback({ success: false, message: 'Không tìm thấy bài quiz để tổ chức thi đấu' });
        }

        const questions = db.find('questions', q => q.quizId === quizId);
        if (questions.length === 0) {
          return callback({ success: false, message: 'Quiz này chưa có câu hỏi để thi đấu' });
        }

        const pin = generateRoomPin();
        const room = {
          pin,
          quizId,
          quizTitle: quiz.title,
          scoringMode, // 'total_points' or 'fastest_per_question'
          hostSocketId: socket.id,
          hostName,
          status: 'waiting', // 'waiting', 'in_progress', 'revealing', 'ended'
          currentQuestionIndex: -1,
          questionCount: questions.length,
          timePerQuestion: 20, // 20s
          questionStartedAt: null,
          players: new Map(),
          playerHistory: new Map(), // socketId -> array of { questionIndex, isCorrect, selectedOptionLabel, correctOptionLabel }
          roundAnswers: new Map(), // socketId -> { answer, timeMs, isCorrect, points }
          createdAt: Date.now()
        };

        activeBattles.set(pin, room);
        socket.join(pin);
        socket.roomPin = pin;
        socket.isHost = true;

        callback({
          success: true,
          pin,
          quizTitle: quiz.title,
          scoringMode,
          totalQuestions: questions.length
        });

        console.log(`Battle room created: PIN ${pin} by ${hostName}`);
      } catch (err) {
        callback({ success: false, message: err.message });
      }
    });

    // Join Room
    socket.on('join_room', ({ pin, nickname, avatar }, callback) => {
      const room = activeBattles.get(pin);
      if (!room) {
        return callback({ success: false, message: 'Mã PIN phòng không hợp lệ hoặc đã kết thúc' });
      }
      if (room.status !== 'waiting') {
        return callback({ success: false, message: 'Trận đấu đã bắt đầu, không thể tham gia nữa' });
      }

      const player = {
        socketId: socket.id,
        nickname: (nickname || `Người chơi ${room.players.size + 1}`).trim(),
        avatar: avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${socket.id}`,
        score: 0,
        correctAnswersCount: 0,
        wrongAnswersCount: 0,
        streak: 0
      };

      room.players.set(socket.id, player);
      room.playerHistory.set(socket.id, []);
      socket.join(pin);
      socket.roomPin = pin;
      socket.isHost = false;

      callback({
        success: true,
        player,
        room: {
          pin: room.pin,
          quizTitle: room.quizTitle,
          scoringMode: room.scoringMode,
          questionCount: room.questionCount
        }
      });

      // Broadcast updated players list
      io.to(pin).emit('room_players_updated', {
        players: Array.from(room.players.values()),
        totalPlayers: room.players.size
      });
    });

    // Host starts battle
    socket.on('start_battle', ({ pin }) => {
      const room = activeBattles.get(pin);
      if (!room || room.hostSocketId !== socket.id) return;

      room.status = 'in_progress';
      io.to(pin).emit('battle_started', {
        message: 'Trận đấu bắt đầu!',
        scoringMode: room.scoringMode
      });

      // Trigger question 1 after 3 seconds countdown
      setTimeout(() => {
        sendNextQuestion(io, room);
      }, 3000);
    });

    // Player submits answer
    socket.on('submit_answer', ({ pin, optionId, answerTimeMs }) => {
      const room = activeBattles.get(pin);
      if (!room || room.status !== 'in_progress') return;

      const player = room.players.get(socket.id);
      if (!player) return;

      // Check if already answered this round
      if (room.roundAnswers.has(socket.id)) return;

      const questions = db.find('questions', q => q.quizId === room.quizId);
      const currentQ = questions[room.currentQuestionIndex];
      const correctOpt = db.findOne('question_options', o => o.questionId === currentQ.id && o.isCorrect);
      const chosenOpt = db.findOne('question_options', o => o.id === optionId);

      const isCorrect = correctOpt ? correctOpt.id === optionId : false;
      const timeSpentSec = Math.min(room.timePerQuestion, Math.max(0.1, (Date.now() - room.questionStartedAt) / 1000));

      let pointsAwarded = 0;
      if (isCorrect) {
        if (room.scoringMode === 'total_points') {
          const remainingSec = Math.max(0, room.timePerQuestion - timeSpentSec);
          pointsAwarded = 500 + Math.round(500 * (remainingSec / room.timePerQuestion));
        } else {
          pointsAwarded = 1;
        }
      }

      room.roundAnswers.set(socket.id, {
        socketId: socket.id,
        nickname: player.nickname,
        optionId,
        chosenLabel: chosenOpt?.label || '',
        isCorrect,
        timeSpentSec,
        pointsAwarded
      });

      // Notify answer count
      io.to(pin).emit('answer_received_count', {
        answeredCount: room.roundAnswers.size,
        totalPlayers: room.players.size
      });

      // If all players have answered, immediately reveal results
      if (room.roundAnswers.size >= room.players.size && room.players.size > 0) {
        revealQuestionResults(io, room);
      }
    });

    // Host triggers next question
    socket.on('host_next_question', ({ pin }) => {
      const room = activeBattles.get(pin);
      if (!room || room.hostSocketId !== socket.id) return;
      sendNextQuestion(io, room);
    });

    // Disconnect handling
    socket.on('disconnect', () => {
      if (socket.roomPin) {
        const room = activeBattles.get(socket.roomPin);
        if (room) {
          if (socket.isHost) {
            io.to(room.pin).emit('battle_ended', { message: 'Chủ phòng đã rời trận đấu.' });
            activeBattles.delete(room.pin);
          } else {
            room.players.delete(socket.id);
            io.to(room.pin).emit('room_players_updated', {
              players: Array.from(room.players.values()),
              totalPlayers: room.players.size
            });
          }
        }
      }
    });
  });
}

function sendNextQuestion(io, room) {
  room.currentQuestionIndex++;
  const questions = db.find('questions', q => q.quizId === room.quizId);

  if (room.currentQuestionIndex >= questions.length) {
    finishBattle(io, room);
    return;
  }

  const currentQ = questions[room.currentQuestionIndex];
  const options = db.find('question_options', o => o.questionId === currentQ.id).map(o => ({
    id: o.id,
    label: o.label,
    content: o.content
  }));

  room.status = 'in_progress';
  room.roundAnswers.clear();
  room.questionStartedAt = Date.now();

  io.to(room.pin).emit('new_question', {
    questionIndex: room.currentQuestionIndex + 1,
    totalQuestions: questions.length,
    content: currentQ.content,
    instructionBadge: currentQ.instructionBadge,
    options,
    timeLimitSeconds: room.timePerQuestion
  });

  // Auto reveal after timeLimit + 1s grace period if not all submitted
  if (room.timerTimeout) clearTimeout(room.timerTimeout);
  room.timerTimeout = setTimeout(() => {
    if (room.status === 'in_progress') {
      revealQuestionResults(io, room);
    }
  }, (room.timePerQuestion + 1) * 1000);
}

function revealQuestionResults(io, room) {
  if (room.timerTimeout) clearTimeout(room.timerTimeout);
  room.status = 'revealing';

  const questions = db.find('questions', q => q.quizId === room.quizId);
  const currentQ = questions[room.currentQuestionIndex];
  const correctOpt = db.findOne('question_options', o => o.questionId === currentQ.id && o.isCorrect);

  // Compute round answers
  const answersList = Array.from(room.roundAnswers.values());
  const correctAnswers = answersList.filter(a => a.isCorrect);
  correctAnswers.sort((a, b) => a.timeSpentSec - b.timeSpentSec);

  let fastestPlayer = null;
  if (correctAnswers.length > 0) {
    fastestPlayer = correctAnswers[0];
    if (room.scoringMode === 'fastest_per_question') {
      fastestPlayer.pointsAwarded += 1;
    }
  }

  // Update each player's history & score
  for (const [sId, player] of room.players.entries()) {
    const ans = room.roundAnswers.get(sId);
    const history = room.playerHistory.get(sId) || [];

    if (ans) {
      if (ans.isCorrect) {
        player.score += ans.pointsAwarded;
        player.correctAnswersCount += 1;
        player.streak += 1;
      } else {
        player.wrongAnswersCount = (player.wrongAnswersCount || 0) + 1;
        player.streak = 0;
      }
      history.push({
        questionIndex: room.currentQuestionIndex + 1,
        questionContent: currentQ.content,
        isCorrect: ans.isCorrect,
        chosenLabel: ans.chosenLabel,
        correctOptionLabel: correctOpt ? correctOpt.label : '',
        correctOptionContent: correctOpt ? correctOpt.content : '',
        pointsAwarded: ans.pointsAwarded
      });
    } else {
      // Unanswered in time
      player.wrongAnswersCount = (player.wrongAnswersCount || 0) + 1;
      player.streak = 0;
      history.push({
        questionIndex: room.currentQuestionIndex + 1,
        questionContent: currentQ.content,
        isCorrect: false,
        chosenLabel: 'Hết giờ (chưa chọn)',
        correctOptionLabel: correctOpt ? correctOpt.label : '',
        correctOptionContent: correctOpt ? correctOpt.content : '',
        pointsAwarded: 0
      });
    }
    room.playerHistory.set(sId, history);
  }

  // Leaderboard (used for Host only)
  const fullLeaderboard = Array.from(room.players.values()).sort((a, b) => {
    if (room.scoringMode === 'fastest_per_question') {
      return b.correctAnswersCount - a.correctAnswersCount || b.score - a.score;
    }
    return b.score - a.score;
  });

  // Emit to Host: full result + full leaderboard
  io.to(room.hostSocketId).emit('question_result', {
    questionIndex: room.currentQuestionIndex + 1,
    correctOptionId: correctOpt ? correctOpt.id : null,
    correctOptionLabel: correctOpt ? correctOpt.label : '',
    correctOptionContent: correctOpt ? correctOpt.content : '',
    fastestPlayer: fastestPlayer ? {
      nickname: fastestPlayer.nickname,
      time: fastestPlayer.timeSpentSec.toFixed(2)
    } : null,
    leaderboard: fullLeaderboard,
    isLastQuestion: room.currentQuestionIndex + 1 >= questions.length,
    isHostView: true
  });

  // Emit to each participant: ONLY their own score and whether they answered right/wrong!
  for (const [sId, player] of room.players.entries()) {
    const ans = room.roundAnswers.get(sId);
    io.to(sId).emit('question_result', {
      questionIndex: room.currentQuestionIndex + 1,
      correctOptionId: correctOpt ? correctOpt.id : null,
      correctOptionLabel: correctOpt ? correctOpt.label : '',
      correctOptionContent: correctOpt ? correctOpt.content : '',
      myResult: {
        isCorrect: ans ? ans.isCorrect : false,
        pointsAwarded: ans ? ans.pointsAwarded : 0,
        myScore: player.score,
        correctAnswersCount: player.correctAnswersCount
      },
      isLastQuestion: room.currentQuestionIndex + 1 >= questions.length,
      isHostView: false
    });
  }
}

function finishBattle(io, room) {
  room.status = 'ended';

  const fullLeaderboard = Array.from(room.players.values()).sort((a, b) => {
    if (room.scoringMode === 'fastest_per_question') {
      return b.correctAnswersCount - a.correctAnswersCount || b.score - a.score;
    }
    return b.score - a.score;
  });

  const podium = {
    first: fullLeaderboard[0] || null,
    second: fullLeaderboard[1] || null,
    third: fullLeaderboard[2] || null
  };

  // 1. Send complete results to Host (Người tạo phòng)
  io.to(room.hostSocketId).emit('battle_finished', {
    isHostView: true,
    podium,
    leaderboard: fullLeaderboard,
    scoringMode: room.scoringMode,
    totalQuestions: room.questionCount,
    totalParticipants: room.players.size
  });

  // 2. Send restricted individual results to each Participant (Bên kia chỉ biết điểm & đúng sai của mình)
  for (const [sId, player] of room.players.entries()) {
    const history = room.playerHistory.get(sId) || [];
    io.to(sId).emit('battle_finished', {
      isHostView: false,
      myResult: {
        nickname: player.nickname,
        myScore: player.score,
        correctCount: player.correctAnswersCount,
        wrongCount: room.questionCount - player.correctAnswersCount,
        totalQuestions: room.questionCount,
        percentage: Math.round((player.correctAnswersCount / room.questionCount) * 100),
        answersBreakdown: history
      },
      totalQuestions: room.questionCount
    });
  }

  // Clean up room after 15 minutes
  setTimeout(() => {
    activeBattles.delete(room.pin);
  }, 15 * 60 * 1000);
}
