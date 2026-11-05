import { db } from '../database/db.js';

export const startAttempt = (req, res) => {
  try {
    const { quizId, studentId = 'dtc245200060', candidateName = 'Nguyễn Văn An', questionIds = [], durationMinutes, mode } = req.body;
    let quiz = db.findOne('quizzes', q => q.id === quizId);
    if (!quiz) {
      if (quizId === 'composite_period60') {
        quiz = { id: 'composite_period60', title: 'Bài Kiểm Tra 1 Tiết (60 Phút) - Ma Trận 3 Chủ Đề', durationMinutes: 60, antiCheatEnabled: true, maxViolations: 3 };
      } else if (quizId === 'composite_final45') {
        quiz = { id: 'composite_final45', title: 'Bài Kiểm Tra Kết Thúc Học Phần (45 Phút - 40 Câu)', durationMinutes: 45, antiCheatEnabled: true, maxViolations: 3 };
      } else {
        quiz = { id: quizId, title: 'Bài Kiểm Tra', durationMinutes: durationMinutes || (mode === 'practice' ? 90 : 15), antiCheatEnabled: true, maxViolations: 3 };
      }
    }

    const calculatedDurationMinutes = durationMinutes || (mode === 'practice' ? 90 : (quiz.durationMinutes || 15));
    const totalDurationSeconds = calculatedDurationMinutes * 60;
    const attemptId = `att_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

    const newAttempt = {
      id: attemptId,
      quizId,
      mode: mode || (durationMinutes === 90 ? 'practice' : 'standard'),
      questionIds: Array.isArray(questionIds) && questionIds.length > 0 ? questionIds : null,
      userId: 'user_1',
      studentId: studentId.trim(),
      candidateName: candidateName.trim(),
      score: 0,
      maxScore: 10.0,
      correctCount: 0,
      totalCount: (Array.isArray(questionIds) && questionIds.length > 0) ? questionIds.length : (db.find('questions', q => q.quizId === quizId).length || 20),
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
    const { 
      answers = {}, 
      durationSpent = 0, 
      isDisqualified = false,
      quizId,
      questionIds,
      studentId,
      candidateName,
      quizTitle,
      mode
    } = req.body;

    let attempt = db.findOne('exam_attempts', a => a.id === id);
    if (!attempt) {
      // Auto-heal attempt on Vercel multi-instance cold start / serverless migration
      console.log(`[SUBMIT-HEAL] Reconstituting attempt ${id} for ${studentId || 'candidate'}`);
      const fallbackQIds = Array.isArray(questionIds) && questionIds.length > 0 
        ? questionIds 
        : Object.keys(answers || {});
      const fallbackTotal = fallbackQIds.length || (mode === 'period60' ? 45 : (mode === 'final45' ? 40 : 20));

      attempt = {
        id,
        quizId: quizId || 'composite_period60',
        quizTitle: quizTitle || 'Bài kiểm tra',
        questionIds: fallbackQIds.length > 0 ? fallbackQIds : null,
        userId: 'user_1',
        studentId: (studentId || 'dtc245200060').trim(),
        candidateName: (candidateName || 'Thí sinh').trim(),
        score: 0,
        maxScore: 10.0,
        correctCount: 0,
        totalCount: fallbackTotal,
        percentage: 0,
        startedAt: new Date().toISOString(),
        submittedAt: null,
        durationSeconds: durationSpent || 900,
        remainingSeconds: 0,
        isSubmitted: false,
        status: 'in_progress',
        violationsCount: req.body.violationsCount || 0,
        violationLogs: []
      };
      db.insert('exam_attempts', attempt);
    }

    if (attempt.isSubmitted) {
      return res.json({ success: true, message: 'Bài thi đã được nộp trước đó', attemptId: id, data: attempt });
    }

    let quiz = db.findOne('quizzes', q => q.id === attempt.quizId);
    if (!quiz) {
      if (attempt.quizId === 'composite_period60') {
        quiz = { id: 'composite_period60', title: 'BÀI KIỂM TRA 1 TIẾT (60 PHÚT) - TỔNG HỢP 3 CHỦ ĐỀ', durationMinutes: 60 };
      } else if (attempt.quizId === 'composite_final45') {
        quiz = { id: 'composite_final45', title: 'BÀI KIỂM TRA KẾT THÚC HỌC PHẦN (45 PHÚT - 40 CÂU)', durationMinutes: 45 };
      } else {
        quiz = { id: attempt.quizId, title: 'Bài Kiểm Tra', durationMinutes: (attempt.mode === 'practice' || mode === 'practice') ? 90 : 15 };
      }
    }

    let questions = [];
    if (attempt.questionIds && Array.isArray(attempt.questionIds) && attempt.questionIds.length > 0) {
      questions = attempt.questionIds.map(qid => db.findOne('questions', q => q.id === qid)).filter(Boolean);
    } else {
      questions = db.find('questions', q => q.quizId === attempt.quizId);
    }
    if (questions.length === 0 && Object.keys(answers).length > 0) {
      questions = Object.keys(answers).map(qid => db.findOne('questions', q => q.id === qid)).filter(Boolean);
    }
    const allOptions = db.getTable('question_options');
    const allDragDrop = db.getTable('drag_drop_items');

    let correctQuestionsCount = 0;
    const questionReviewList = [];

    // Evaluate each question
    questions.forEach(q => {
      const qAnswer = answers[q.id];
      let isCorrect = false;

      if (q.type === 'single_choice' || q.type === 'phonetics' || q.type === 'listening' || q.type === 'reading_comprehension') {
        const correctOpt = allOptions.find(o => o.questionId === q.id && o.isCorrect);
        if (qAnswer && correctOpt && qAnswer === correctOpt.id) {
          isCorrect = true;
        }
      } else if (q.type === 'sentence_rearrange') {
        // qAnswer can be array of words or joined string
        const userSentence = Array.isArray(qAnswer) 
          ? qAnswer.join(' ').trim().toLowerCase() 
          : String(qAnswer || '').trim().toLowerCase();
        const targetSentence = String(q.correctSentence || q.explanation || '').trim().toLowerCase();
        if (userSentence && targetSentence && userSentence === targetSentence) {
          isCorrect = true;
        }
      } else if (q.type === 'fill_blank') {
        // qAnswer can be { blank_0: 'word' } or string
        if (typeof qAnswer === 'object' && qAnswer !== null) {
          const blanks = q.blanks || [];
          if (blanks.length > 0) {
            const allBlanksCorrect = blanks.every((b, bIdx) => {
              const userVal = String(qAnswer[`blank_${bIdx}`] || qAnswer[b.id] || '').trim().toLowerCase();
              const correctVal = String(b.correctAnswer || b.text || '').trim().toLowerCase();
              return userVal && userVal === correctVal;
            });
            if (allBlanksCorrect) isCorrect = true;
          }
        } else if (qAnswer) {
          const userVal = String(qAnswer).trim().toLowerCase();
          const targetVal = String(q.correctAnswer || q.explanation || '').trim().toLowerCase();
          if (userVal === targetVal) isCorrect = true;
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
    if (db.findOne('quizzes', q => q.id === attempt.quizId)) {
      db.update('quizzes', q => q.id === attempt.quizId, {
        attemptsCount: (quiz.attemptsCount || 0) + 1
      });
    }

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
    let attempt = db.findOne('exam_attempts', a => a.id === id);
    if (!attempt) {
      console.log(`[RESULT-HEAL] Auto-recovering attempt ${id}`);
      attempt = {
        id,
        quizId: 'composite_period60',
        quizTitle: 'Bài kiểm tra',
        questionIds: null,
        studentId: 'dtc245200060',
        candidateName: 'Hoàng Duy Mạnh',
        score: 0,
        maxScore: 10.0,
        correctCount: 0,
        totalCount: 45,
        percentage: 0,
        startedAt: new Date().toISOString(),
        submittedAt: new Date().toISOString(),
        durationSeconds: 900,
        violationsCount: 0,
        status: 'completed'
      };
      db.insert('exam_attempts', attempt);
    }

    let quiz = db.findOne('quizzes', q => q.id === attempt.quizId);
    if (!quiz) {
      if (attempt.quizId === 'composite_period60') {
        quiz = { id: 'composite_period60', title: 'BÀI KIỂM TRA 1 TIẾT (60 PHÚT) - TỔNG HỢP 3 CHỦ ĐỀ', durationMinutes: 60 };
      } else if (attempt.quizId === 'composite_final45') {
        quiz = { id: 'composite_final45', title: 'BÀI KIỂM TRA KẾT THÚC HỌC PHẦN (45 PHÚT - 40 CÂU)', durationMinutes: 45 };
      } else {
        quiz = { id: attempt.quizId, title: 'Bài Kiểm Tra', durationMinutes: (attempt.mode === 'practice' || mode === 'practice') ? 90 : 15 };
      }
    }

    const allOptions = db.getTable('question_options');
    const allDragDrop = db.getTable('drag_drop_items');
    const answers = db.find('attempt_answers', ans => ans.attemptId === id);

    let questions = [];
    if (attempt.questionIds && Array.isArray(attempt.questionIds) && attempt.questionIds.length > 0) {
      questions = attempt.questionIds.map(qid => db.findOne('questions', q => q.id === qid)).filter(Boolean);
    } else {
      questions = db.find('questions', q => q.quizId === attempt.quizId);
    }
    if (questions.length === 0 && answers.length > 0) {
      questions = answers.map(a => db.findOne('questions', q => q.id === a.questionId)).filter(Boolean);
    }

    // Build comprehensive review structure with correct vs user selected styling
    const detailedReview = questions.map((q, idx) => {
      const userAnsObj = answers.find(a => a.questionId === q.id);
      const userAnswer = userAnsObj ? userAnsObj.userAnswer : null;
      const isCorrect = userAnsObj ? userAnsObj.isCorrect : false;

      const isSinglePick = q.type === 'single_choice' || q.type === 'phonetics' || q.type === 'listening' || q.type === 'reading_comprehension';
      const qOptions = allOptions.filter(o => o.questionId === q.id).map(o => ({
        id: o.id,
        label: o.label,
        content: o.content,
        isCorrect: o.isCorrect,
        isUserSelected: isSinglePick
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
        // English-specific attributes
        passageText: q.passageText,
        passageTitle: q.passageTitle,
        audioUrl: q.audioUrl,
        listeningScript: q.listeningScript,
        scrambledWords: q.scrambledWords,
        correctSentence: q.correctSentence,
        blanks: q.blanks,
        imageUrl: q.imageUrl,
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

