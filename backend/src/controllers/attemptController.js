import { db } from '../database/db.js';

export const startAttempt = (req, res) => {
  try {
    const { quizId, studentId = 'dtc245200060', candidateName = 'Nguyễn Văn An' } = req.body;
    const quiz = db.findOne('quizzes', q => q.id === quizId);
    if (!quiz) {
      return res.status(404).json({ success: false, message: 'Bài thi không tồn tại' });
    }

    const questions = db.find('questions', q => q.quizId === quizId);
    const attemptId = `att_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const totalDurationSeconds = (quiz.durationMinutes || 15) * 60;

    const newAttempt = {
      id: attemptId,
      quizId,
      userId: 'user_1',
      studentId: studentId.trim(),
      candidateName: candidateName.trim(),
      score: 0,
      maxScore: 10.0,
      correctCount: 0,
      totalCount: questions.length,
      percentage: 0,
      startedAt: new Date().toISOString(),
      submittedAt: null,
      durationSeconds: totalDurationSeconds,
      remainingSeconds: totalDurationSeconds,
      isSubmitted: false,
      status: 'in_progress',
      violationsCount: 0,
      violationLogs: []
    };

    db.insert('exam_attempts', newAttempt);

    res.json({
      success: true,
      attemptId,
      durationSeconds: totalDurationSeconds,
      remainingSeconds: totalDurationSeconds,
      antiCheatEnabled: quiz.antiCheatEnabled,
      maxViolations: quiz.maxViolations || 3
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const syncAttemptState = (req, res) => {
  try {
    const { id } = req.params;
    const { answers = {}, markedForReview = [], remainingSeconds = null } = req.body;

    const attempt = db.findOne('exam_attempts', a => a.id === id);
    if (!attempt) {
      return res.status(404).json({ success: false, message: 'Phiên thi không tồn tại' });
    }

    if (attempt.isSubmitted) {
      return res.status(400).json({ success: false, message: 'Bài thi đã nộp, không thể đồng bộ thêm' });
    }

    const updates = {
      savedAnswers: answers,
      markedForReview,
      lastSyncAt: new Date().toISOString()
    };
    if (remainingSeconds !== null) {
      updates.remainingSeconds = remainingSeconds;
    }

    db.update('exam_attempts', a => a.id === id, updates);

    res.json({ success: true, message: 'Đồng bộ tự động thành công' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const recordViolation = (req, res) => {
  try {
    const { id } = req.params;
    const { reason = 'Rời khỏi màn hình làm bài thi (Tab switch / Blur / Exit Fullscreen)' } = req.body;

    const attempt = db.findOne('exam_attempts', a => a.id === id);
    if (!attempt) {
      return res.status(404).json({ success: false, message: 'Phiên thi không tồn tại' });
    }

    if (attempt.isSubmitted) {
      return res.json({ success: true, message: 'Bài đã nộp' });
    }

    const quiz = db.findOne('quizzes', q => q.id === attempt.quizId);
    const maxViolations = quiz?.maxViolations || 3;

    const newViolation = {
      time: new Date().toISOString(),
      reason
    };

    const currentLogs = attempt.violationLogs || [];
    currentLogs.push(newViolation);
    const violationsCount = currentLogs.length;

    let shouldAutoSubmit = false;
    if (quiz?.antiCheatEnabled && violationsCount >= maxViolations) {
      shouldAutoSubmit = true;
    }

    db.update('exam_attempts', a => a.id === id, {
      violationsCount,
      violationLogs: currentLogs
    });

    res.json({
      success: true,
      violationsCount,
      maxViolations,
      shouldAutoSubmit,
      warning: `Cảnh báo gian lận (${violationsCount}/${maxViolations}): ${reason}`
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const submitAttempt = (req, res) => {
  try {
    const { id } = req.params;
    const { answers = {}, durationSpent = 0, isDisqualified = false } = req.body;

    const attempt = db.findOne('exam_attempts', a => a.id === id);
    if (!attempt) {
      return res.status(404).json({ success: false, message: 'Phiên làm bài không tồn tại' });
    }

    if (attempt.isSubmitted) {
      return res.json({ success: true, message: 'Bài thi đã được nộp trước đó', attemptId: id });
    }

    const quiz = db.findOne('quizzes', q => q.id === attempt.quizId);
    const questions = db.find('questions', q => q.quizId === attempt.quizId);
    const allOptions = db.getTable('question_options');
    const allDragDrop = db.getTable('drag_drop_items');

    let correctQuestionsCount = 0;
    const questionReviewList = [];

    // Evaluate each question
    questions.forEach(q => {
      const qAnswer = answers[q.id];
      let isCorrect = false;

      if (q.type === 'single_choice') {
        const correctOpt = allOptions.find(o => o.questionId === q.id && o.isCorrect);
        if (qAnswer && correctOpt && qAnswer === correctOpt.id) {
          isCorrect = true;
        }
      } else if (q.type === 'multiple_choice') {
        const correctOpts = allOptions.filter(o => o.questionId === q.id && o.isCorrect).map(o => o.id);
        const userOpts = Array.isArray(qAnswer) ? qAnswer : [];
        // Strict match: user count must equal required count AND every selected option must be correct
        if (
          userOpts.length === (q.requiredCount || correctOpts.length) &&
          userOpts.length === correctOpts.length &&
          userOpts.every(optId => correctOpts.includes(optId))
        ) {
          isCorrect = true;
        }
      } else if (q.type === 'drag_drop_categorize') {
        // qAnswer is { 'itemId': 'categoryName', ... }
        const items = allDragDrop.filter(d => d.questionId === q.id);
        if (qAnswer && typeof qAnswer === 'object' && Object.keys(qAnswer).length > 0) {
          const allMatch = items.length > 0 && items.every(item => qAnswer[item.id] === item.targetCategoryOrMatch);
          if (allMatch) isCorrect = true;
        }
      } else if (q.type === 'drag_drop_matching') {
        // qAnswer is { 'statementItemId': 'matchedTarget', ... }
        const items = allDragDrop.filter(d => d.questionId === q.id);
        if (qAnswer && typeof qAnswer === 'object' && Object.keys(qAnswer).length > 0) {
          const allMatch = items.length > 0 && items.every(item => qAnswer[item.id] === item.targetCategoryOrMatch);
          if (allMatch) isCorrect = true;
        }
      } else if (q.type === 'true_false_matrix') {
        // qAnswer is { [stmtId]: 'dung' | 'sai' }
        const stmts = q.statements || [];
        if (qAnswer && typeof qAnswer === 'object' && Object.keys(qAnswer).length > 0) {
          const allMatch = stmts.length > 0 && stmts.every(s => {
            const userChoice = qAnswer[s.id];
            if (!userChoice) return false;
            const target = (s.correctAnswer || s.isCorrect || 'Đúng').toString().toLowerCase();
            const isTargetTrue = target.includes('đúng') || target === 'dung' || target === 'true';
            const isUserTrue = userChoice === 'dung' || userChoice === 'Đúng' || userChoice === true;
            return isTargetTrue === isUserTrue;
          });
          if (allMatch) isCorrect = true;
        }
      }

      if (isCorrect) correctQuestionsCount++;

      // Save answer details
      const answerRecord = {
        id: `ans_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        attemptId: id,
        questionId: q.id,
        userAnswer: qAnswer || null,
        isCorrect
      };
      db.insert('attempt_answers', answerRecord);
    });

    const totalCount = questions.length || 1;
    // Score on 10-point scale: rounded to 1 decimal place (e.g. 3.9 / 10)
    const rawScore = (correctQuestionsCount / totalCount) * 10.0;
    const finalScore = isDisqualified ? 0.0 : Math.round(rawScore * 10) / 10;
    const percentage = Math.round((correctQuestionsCount / totalCount) * 100);

    const submittedAttempt = db.update('exam_attempts', a => a.id === id, {
      score: finalScore,
      correctCount: correctQuestionsCount,
      totalCount,
      percentage,
      submittedAt: new Date().toISOString(),
      durationSeconds: durationSpent || ((quiz.durationMinutes || 15) * 60 - (attempt.remainingSeconds || 0)),
      isSubmitted: true,
      status: isDisqualified ? 'disqualified' : 'completed'
    });

    // Increment quiz attemptsCount
    db.update('quizzes', q => q.id === attempt.quizId, {
      attemptsCount: (quiz.attemptsCount || 0) + 1
    });

    res.json({
      success: true,
      message: isDisqualified ? 'Bài thi bị đình chỉ và tự động thu do vi phạm quy chế' : 'Nộp bài thi thành công',
      data: submittedAttempt
    });
  } catch (error) {
    console.error('Submit attempt error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAttemptResult = (req, res) => {
  try {
    const { id } = req.params;
    const attempt = db.findOne('exam_attempts', a => a.id === id);
    if (!attempt) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy kết quả bài thi' });
    }

    const quiz = db.findOne('quizzes', q => q.id === attempt.quizId);
    const questions = db.find('questions', q => q.quizId === attempt.quizId);
    const allOptions = db.getTable('question_options');
    const allDragDrop = db.getTable('drag_drop_items');
    const answers = db.find('attempt_answers', ans => ans.attemptId === id);

    // Build comprehensive review structure with correct vs user selected styling
    const detailedReview = questions.map((q, idx) => {
      const userAnsObj = answers.find(a => a.questionId === q.id);
      const userAnswer = userAnsObj ? userAnsObj.userAnswer : null;
      const isCorrect = userAnsObj ? userAnsObj.isCorrect : false;

      const qOptions = allOptions.filter(o => o.questionId === q.id).map(o => ({
        id: o.id,
        label: o.label,
        content: o.content,
        isCorrect: o.isCorrect,
        isUserSelected: q.type === 'single_choice'
          ? userAnswer === o.id
          : Array.isArray(userAnswer) && userAnswer.includes(o.id)
      }));

      const qDragDrop = allDragDrop.filter(d => d.questionId === q.id).map(d => ({
        id: d.id,
        itemText: d.itemText,
        correctTarget: d.targetCategoryOrMatch,
        userPlacedTarget: userAnswer && typeof userAnswer === 'object' ? userAnswer[d.id] : null
      }));

      const qStatements = (q.statements || []).map(s => {
        const rawCorrect = s.correctAnswer || s.isCorrect || 'Đúng';
        const isTargetTrue = rawCorrect.toString().toLowerCase().includes('đúng') || rawCorrect === 'dung' || rawCorrect === true;
        const userVal = userAnswer && typeof userAnswer === 'object' ? userAnswer[s.id] : null;
        const isUserTrue = userVal === 'dung' || userVal === 'Đúng' || userVal === true;
        const isStatementCorrect = userVal ? isTargetTrue === isUserTrue : false;

        return {
          id: s.id,
          text: s.text,
          correctValue: isTargetTrue ? 'Đúng' : 'Sai',
          userSelectedValue: userVal ? (isUserTrue ? 'Đúng' : 'Sai') : null,
          isStatementCorrect
        };
      });

      return {
        id: q.id,
        orderIndex: idx + 1,
        type: q.type,
        content: q.content,
        instructionBadge: q.instructionBadge,
        explanation: q.explanation || 'Không có giải thích chi tiết cho câu hỏi này.',
        points: q.points,
        requiredCount: q.requiredCount,
        categories: q.categories || [],
        statements: qStatements,
        options: qOptions,
        dragDropItems: qDragDrop,
        isCorrect,
        userAnswer
      };
    });

    res.json({
      success: true,
      quiz: {
        id: quiz.id,
        title: quiz.title,
        category: quiz.category,
        durationMinutes: quiz.durationMinutes
      },
      attempt: {
        id: attempt.id,
        studentId: attempt.studentId,
        candidateName: attempt.candidateName,
        score: attempt.score,
        maxScore: attempt.maxScore,
        correctCount: attempt.correctCount,
        totalCount: attempt.totalCount,
        percentage: attempt.percentage,
        startedAt: attempt.startedAt,
        submittedAt: attempt.submittedAt,
        durationSeconds: attempt.durationSeconds,
        violationsCount: attempt.violationsCount || 0,
        status: attempt.status
      },
      detailedReview
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUserAttemptsHistory = (req, res) => {
  try {
    const attempts = db.find('exam_attempts', a => a.isSubmitted);
    attempts.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

    const enriched = attempts.map(att => {
      const quiz = db.findOne('quizzes', q => q.id === att.quizId);
      return {
        ...att,
        quizTitle: quiz ? quiz.title : 'Bài kiểm tra',
        quizCategory: quiz ? quiz.category : 'Tổng hợp'
      };
    });

    res.json({ success: true, count: enriched.length, data: enriched });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

