import { db } from '../database/db.js';
import { parseDocxBuffer } from '../services/docxParser.js';
import { parseRawQuizText } from '../services/smartQuizParser.js';
import { fixMojibake, cleanDescription, cleanQuiz } from '../utils/textEncoding.js';

// Helper to shuffle array (Fisher-Yates)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const getAllQuizzes = (req, res) => {
  try {
    const { search = '', category = '', sort = 'most_taken' } = req.query;
    let quizzes = db.getTable('quizzes');

    // Filter by search
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      quizzes = quizzes.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.originalDocxName && item.originalDocxName.toLowerCase().includes(q))
      );
    }

    // Filter by category
    if (category.trim()) {
      quizzes = quizzes.filter(item => item.category === category.trim());
    }

    // Sort
    if (sort === 'most_taken') {
      quizzes.sort((a, b) => (b.attemptsCount || 0) - (a.attemptsCount || 0));
    } else if (sort === 'newest') {
      quizzes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 'highest_rated') {
      quizzes.sort((a, b) => (b.avgRating || 0) - (a.avgRating || 0));
    }

    res.json({ success: true, count: quizzes.length, data: quizzes.map(cleanQuiz) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getQuizById = (req, res) => {
  try {
    const { id } = req.params;
    let quiz = db.findOne('quizzes', q => q.id === id);
    if (!quiz) {
      if (id === 'composite_period60') {
        quiz = {
          id: 'composite_period60',
          title: 'BÀI KIỂM TRA 1 TIẾT (60 PHÚT) - TỔNG HỢP 3 CHỦ ĐỀ',
          category: 'Triết học & Lý luận chính trị',
          description: 'Cấu trúc bài kiểm tra 1 tiết chuẩn: Ngẫu nhiên tổ hợp 3 chủ đề trong ngân hàng đề, phân bố đều 15 câu mỗi chủ đề (tổng cộng 45 câu), đa dạng câu hỏi trắc nghiệm đơn, nhiều lựa chọn, đúng sai và kéo thả.',
          durationMinutes: 60,
          totalQuestions: 45,
          antiCheatEnabled: true,
          shuffleQuestions: true,
          shuffleOptions: true,
          createdBy: 'Hệ thống Khảo thí',
          createdAt: new Date().toISOString()
        };
        return res.json({
          success: true,
          data: cleanQuiz({
            ...quiz,
            reviews: []
          })
        });
      } else if (id === 'composite_final45') {
        quiz = {
          id: 'composite_final45',
          title: 'BÀI KIỂM TRA KẾT THÚC HỌC PHẦN (45 PHÚT - 40 CÂU)',
          category: 'Triết học & Lý luận chính trị',
          description: 'Cấu trúc thi kết thúc học phần: 40 câu hỏi được phân bố đều từ tất cả các bài/chủ đề trong toàn bộ học phần môn học, thời gian làm bài 45 phút.',
          durationMinutes: 45,
          totalQuestions: 40,
          antiCheatEnabled: true,
          shuffleQuestions: true,
          shuffleOptions: true,
          createdBy: 'Hệ thống Khảo thí',
          createdAt: new Date().toISOString()
        };
        return res.json({
          success: true,
          data: cleanQuiz({
            ...quiz,
            reviews: []
          })
        });
      } else {
        return res.status(404).json({ success: false, message: 'Không tìm thấy bài thi' });
      }
    }

    const questions = db.find('questions', q => q.quizId === id);
    const reviews = db.find('reviews', r => r.quizId === id);

    res.json({
      success: true,
      data: cleanQuiz({
        ...quiz,
        totalQuestions: questions.length,
        reviews
      })
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getQuizExamQuestions = (req, res) => {
  try {
    const { id } = req.params;
    const { mode } = req.query; // 'practice' | 'quiz15' | 'period60' | 'final45'

    let quiz = null;
    let questions = [];
    let durationMinutes = 15;
    let modeBadge = '';

    // MODE 3: KIỂM TRA 1 TIẾT (60 PHÚT) - 3 CHỦ ĐỀ, MỖI CHỦ ĐỀ 15 CÂU = 45 CÂU
    if (id === 'composite_period60' || mode === 'period60') {
      const allQuizzes = db.find('quizzes', () => true);
      const threeQuizzes = allQuizzes.slice(0, 3);
      durationMinutes = 60;
      modeBadge = 'KIỂM TRA 1 TIẾT (60 PHÚT - 3 CHỦ ĐỀ)';
      quiz = {
        id: 'composite_period60',
        title: 'BÀI KIỂM TRA 1 TIẾT (60 PHÚT) - TỔNG HỢP 3 CHỦ ĐỀ',
        durationMinutes: 60,
        antiCheatEnabled: true,
        maxViolations: 3,
        mode: 'period60',
        modeBadge
      };

      threeQuizzes.forEach((qItem, tIdx) => {
        const qList = db.find('questions', item => item.quizId === qItem.id);
        const sampled = shuffleArray(qList).slice(0, 15);
        sampled.forEach(q => {
          questions.push({
            ...q,
            topicName: `Chủ đề ${tIdx + 1}: ${qItem.title}`
          });
        });
      });
      // Mix questions
      questions = shuffleArray(questions);
    }
    // MODE 4: KIỂM TRA KẾT THÚC HỌC PHẦN (45 PHÚT - 40 CÂU PHÂN BỐ TỪ TẤT CẢ BÀI HỌC)
    else if (id === 'composite_final45' || mode === 'final45') {
      const allQuizzes = db.find('quizzes', () => true);
      durationMinutes = 45;
      modeBadge = 'THI KẾT THÚC HỌC PHẦN (45 PHÚT - 40 CÂU)';
      quiz = {
        id: 'composite_final45',
        title: 'BÀI KIỂM TRA KẾT THÚC HỌC PHẦN (45 PHÚT - 40 CÂU)',
        durationMinutes: 45,
        antiCheatEnabled: true,
        maxViolations: 3,
        mode: 'final45',
        modeBadge
      };

      const perQuizCount = Math.floor(40 / Math.max(1, allQuizzes.length));
      allQuizzes.forEach((qItem, idx) => {
        const qList = db.find('questions', item => item.quizId === qItem.id);
        const count = (idx === allQuizzes.length - 1) ? (40 - questions.length) : perQuizCount;
        const sampled = shuffleArray(qList).slice(0, Math.min(count, qList.length));
        sampled.forEach(q => {
          questions.push({
            ...q,
            topicName: qItem.title
          });
        });
      });
      questions = shuffleArray(questions);
    }
    // MODE 1 & 2: SPECIFIC QUIZ
    else {
      quiz = db.findOne('quizzes', q => q.id === id);
      if (!quiz) {
        return res.status(404).json({ success: false, message: 'Không tìm thấy bài thi' });
      }

      let allQuestions = db.find('questions', q => q.quizId === id);

      // MODE 2: KIỂM TRA 15 PHÚT - RANDOM 20 CÂU
      if (mode === 'quiz15') {
        durationMinutes = 15;
        modeBadge = 'KIỂM TRA 15 PHÚT (RANDOM 20 CÂU)';
        questions = shuffleArray(allQuestions).slice(0, 20);
        quiz = {
          ...quiz,
          title: `BÀI KIỂM TRA 15 PHÚT - ${quiz.title}`,
          durationMinutes: 15,
          mode: 'quiz15',
          modeBadge
        };
      }
      // MODE 1: ÔN TẬP TỪNG CHỦ ĐỀ (TOÀN BỘ CÂU HỎI)
      else if (mode === 'practice') {
        durationMinutes = quiz.durationMinutes || 45;
        modeBadge = 'ÔN TẬP CHỦ ĐỀ';
        questions = allQuestions;
        quiz = {
          ...quiz,
          title: `ÔN TẬP: ${quiz.title}`,
          mode: 'practice',
          modeBadge
        };
      }
      // DEFAULT
      else {
        questions = quiz.shuffleQuestions ? shuffleArray(allQuestions) : allQuestions;
      }
    }

    // Attach sanitized options, statements, and drag-drop items
    const sanitizedQuestions = questions.map((q, idx) => {
      let options = db.find('question_options', opt => opt.questionId === q.id);
      if (options.length > 0) {
        options = shuffleArray(options);
      }

      const sanitizedOptions = options.map(opt => ({
        id: opt.id,
        label: opt.label,
        content: opt.content,
        orderIndex: opt.orderIndex
      }));

      // For drag & drop items
      const dragDropItems = db.find('drag_drop_items', d => d.questionId === q.id);
      const sanitizedDragDrop = dragDropItems.map(d => ({
        id: d.id,
        itemText: d.itemText,
        orderIndex: d.orderIndex
      }));

      const matchingTargets = q.type === 'drag_drop_matching' 
        ? shuffleArray([...new Set(dragDropItems.map(d => d.targetCategoryOrMatch))])
        : [];

      return {
        id: q.id,
        orderIndex: idx + 1,
        originalOrderIndex: q.orderIndex,
        type: q.type,
        content: q.content,
        topicName: q.topicName || '',
        instructionBadge: q.instructionBadge,
        points: q.points || 1,
        requiredCount: q.requiredCount,
        categories: q.categories || [],
        statements: (q.statements || []).map(s => ({ id: s.id, text: s.text })),
        options: sanitizedOptions,
        dragDropItems: shuffleArray(sanitizedDragDrop),
        matchingTargets
      };
    });

    res.json({
      success: true,
      quiz: {
        id: quiz.id,
        title: quiz.title,
        durationMinutes: durationMinutes || quiz.durationMinutes || 15,
        antiCheatEnabled: quiz.antiCheatEnabled !== false,
        maxViolations: quiz.maxViolations || 3,
        mode: quiz.mode || mode || 'standard',
        modeBadge: quiz.modeBadge || modeBadge || ''
      },
      questions: sanitizedQuestions
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const importDocxQuiz = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Vui lòng tải lên tệp .docx' });
    }

    const {
      detectByColor = 'false',
      selectedColors = '["red", "yellow"]',
      customColorHex = '',
      detectByBold = 'true',
      detectByUnderline = 'false',
      detectByHighlight = 'true',
      saveDirectly = 'false',
      title = '',
      category = 'Chung'
    } = req.body;

    let parsedSelectedColors = ['red', 'yellow', 'green', 'blue'];
    try {
      if (typeof selectedColors === 'string') {
        parsedSelectedColors = JSON.parse(selectedColors);
      } else if (Array.isArray(selectedColors)) {
        parsedSelectedColors = selectedColors;
      }
    } catch {
      parsedSelectedColors = ['red', 'yellow', 'green', 'blue'];
    }

    const config = {
      detectByColor: detectByColor === 'true' || detectByColor === true,
      selectedColors: parsedSelectedColors,
      customColorHex,
      detectByBold: detectByBold === 'true' || detectByBold === true,
      detectByUnderline: detectByUnderline === 'true' || detectByUnderline === true,
      detectByHighlight: detectByHighlight === 'true' || detectByHighlight === true
    };

    // Decode original filename to prevent mojibake
    let originalFilename = req.file.originalname;
    try {
      if (/[Ãá»áºÄâ]/.test(originalFilename)) {
        originalFilename = Buffer.from(req.file.originalname, 'latin1').toString('utf-8');
      }
    } catch (e) {
      originalFilename = fixMojibake(req.file.originalname);
    }
    originalFilename = fixMojibake(originalFilename);

    const cleanTitle = (title && title.trim()) 
      ? fixMojibake(title.trim()) 
      : originalFilename.replace(/\.docx$/i, '');

    const parsedResult = await parseDocxBuffer(req.file.buffer, config);

    if (saveDirectly === 'true' || saveDirectly === true) {
      const quizId = `quiz_${Date.now()}`;
      const newQuiz = {
        id: quizId,
        title: cleanTitle,
        description: `Import tự động từ file Word: ${originalFilename}`,
        category: category || 'Chung',
        originalDocxName: originalFilename,
        durationMinutes: 15,
        passingScore: 5.0,
        shuffleQuestions: true,
        shuffleOptions: true,
        antiCheatEnabled: true,
        maxViolations: 3,
        totalQuestions: parsedResult.questions.length,
        attemptsCount: 0,
        avgRating: 5.0,
        createdBy: req.body.author || 'Giảng viên',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      db.insert('quizzes', newQuiz);

      parsedResult.questions.forEach((q, idx) => {
        const qId = `q_${quizId}_${idx + 1}`;
        db.insert('questions', {
          id: qId,
          quizId,
          orderIndex: idx + 1,
          type: q.type,
          content: q.content,
          instructionBadge: q.instructionBadge,
          explanation: q.explanation || 'Đáp án được nhận diện từ định dạng gốc trong văn bản.',
          points: q.points || 1.0,
          requiredCount: q.requiredCount || 1,
          categories: q.categories || [],
          statements: q.statements || []
        });

        if (q.options && q.options.length > 0) {
          q.options.forEach((opt, optIdx) => {
            db.insert('question_options', {
              id: `opt_${qId}_${optIdx + 1}`,
              questionId: qId,
              label: opt.label || String.fromCharCode(65 + optIdx),
              content: opt.content,
              isCorrect: !!opt.isCorrect,
              orderIndex: optIdx + 1
            });
          });
        }

        if (q.dragDropItems && q.dragDropItems.length > 0) {
          q.dragDropItems.forEach((dd, ddIdx) => {
            db.insert('drag_drop_items', {
              id: `dd_${qId}_${ddIdx + 1}`,
              questionId: qId,
              itemText: dd.itemText,
              targetCategoryOrMatch: dd.targetCategoryOrMatch,
              orderIndex: ddIdx + 1
            });
          });
        }
      });

      return res.json({
        success: true,
        saved: true,
        quizId,
        totalQuestions: parsedResult.questions.length,
        fileName: originalFilename,
        message: `Đã tạo bài thi thành công từ file ${originalFilename}!`
      });
    }

    res.json({
      success: true,
      fileName: originalFilename,
      totalQuestions: parsedResult.questions.length,
      questions: parsedResult.questions
    });
  } catch (error) {
    console.error('Docx parse error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createQuiz = (req, res) => {
  try {
    const {
      title,
      description,
      category,
      durationMinutes = 15,
      passingScore = 5.0,
      shuffleQuestions = true,
      shuffleOptions = true,
      antiCheatEnabled = true,
      maxViolations = 3,
      questions = [],
      createdBy = 'Giảng viên'
    } = req.body;

    if (!title || questions.length === 0) {
      return res.status(400).json({ success: false, message: 'Tiêu đề và danh sách câu hỏi không được để trống' });
    }

    const quizId = `quiz_${Date.now()}`;
    const newQuiz = {
      id: quizId,
      title: fixMojibake(title),
      description: cleanDescription(description || ''),
      category: category || 'Chung',
      originalDocxName: req.body.originalDocxName ? fixMojibake(req.body.originalDocxName) : null,
      durationMinutes: Number(durationMinutes) || 15,
      passingScore: Number(passingScore) || 5.0,
      shuffleQuestions: !!shuffleQuestions,
      shuffleOptions: !!shuffleOptions,
      antiCheatEnabled: !!antiCheatEnabled,
      maxViolations: Number(maxViolations) || 3,
      totalQuestions: questions.length,
      attemptsCount: 0,
      avgRating: 5.0,
      createdBy,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    db.insert('quizzes', newQuiz);

    questions.forEach((q, idx) => {
      const qId = `q_${quizId}_${idx + 1}`;
      db.insert('questions', {
        id: qId,
        quizId,
        orderIndex: idx + 1,
        type: q.type,
        content: q.content,
        instructionBadge: q.instructionBadge || null,
        explanation: q.explanation || '',
        points: Number(q.points) || 1.0,
        requiredCount: Number(q.requiredCount) || 1,
        categories: q.categories || [],
        statements: q.statements || []
      });

      if (q.options && q.options.length > 0) {
        q.options.forEach((opt, optIdx) => {
          db.insert('question_options', {
            id: `opt_${qId}_${optIdx + 1}`,
            questionId: qId,
            label: opt.label || String.fromCharCode(65 + optIdx),
            content: opt.content,
            isCorrect: !!opt.isCorrect,
            orderIndex: optIdx + 1
          });
        });
      }

      if (q.dragDropItems && q.dragDropItems.length > 0) {
        q.dragDropItems.forEach((dd, ddIdx) => {
          db.insert('drag_drop_items', {
            id: `dd_${qId}_${ddIdx + 1}`,
            questionId: qId,
            itemText: dd.itemText,
            targetCategoryOrMatch: dd.targetCategoryOrMatch,
            orderIndex: ddIdx + 1
          });
        });
      }
    });

    res.json({
      success: true,
      message: 'Tạo bài thi thành công',
      quizId
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addReview = (req, res) => {
  try {
    const { id: quizId } = req.params;
    const { rating, comment, userId = 'user_1', userName = 'Nguyễn Văn An' } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: 'Số sao đánh giá phải từ 1 đến 5' });
    }

    const review = {
      id: `rev_${Date.now()}`,
      quizId,
      userId,
      userName,
      rating: Number(rating),
      comment: comment || '',
      createdAt: new Date().toISOString()
    };

    db.insert('reviews', review);

    // Update average rating
    const reviews = db.find('reviews', r => r.quizId === quizId);
    const avg = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
    db.update('quizzes', q => q.id === quizId, { avgRating: Number(avg) });

    res.json({ success: true, message: 'Đã gửi đánh giá thành công', data: review, avgRating: Number(avg) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const parseQuizTextController = (req, res) => {
  try {
    const { rawText, title, category, saveDirectly = false } = req.body;
    if (!rawText || !rawText.trim()) {
      return res.status(400).json({ success: false, message: 'Nội dung văn bản trống' });
    }

    const parsedQuestions = parseRawQuizText(rawText);

    if (saveDirectly === 'true' || saveDirectly === true) {
      const quizId = `quiz_${Date.now()}`;
      const newQuiz = {
        id: quizId,
        title: title || 'BÀI KIỂM TRA 15 PHÚT - TUẦN 1',
        description: `Tạo từ văn bản đề thi (${parsedQuestions.length} câu hỏi)`,
        category: category || 'Chủ nghĩa xã hội khoa học',
        originalDocxName: 'DeThiNhapLieu.txt',
        durationMinutes: 15,
        passingScore: 5.0,
        shuffleQuestions: false,
        shuffleOptions: false,
        antiCheatEnabled: true,
        maxViolations: 3,
        totalQuestions: parsedQuestions.length,
        attemptsCount: 0,
        avgRating: 5.0,
        createdBy: req.body.author || 'Hoàng Duy Mạnh',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      db.insert('quizzes', newQuiz);

      parsedQuestions.forEach((q, idx) => {
        const qId = `q_${quizId}_${idx + 1}`;
        db.insert('questions', {
          id: qId,
          quizId,
          orderIndex: idx + 1,
          type: q.type,
          content: q.content,
          instructionBadge: q.instructionBadge || null,
          explanation: q.explanation || '',
          points: q.points || 1.0,
          requiredCount: q.requiredCount || 1,
          categories: q.categories || [],
          statements: q.statements || []
        });

        if (q.options && q.options.length > 0) {
          q.options.forEach((opt, optIdx) => {
            db.insert('question_options', {
              id: `opt_${qId}_${optIdx + 1}`,
              questionId: qId,
              label: opt.label || String.fromCharCode(65 + optIdx),
              content: opt.content,
              isCorrect: !!opt.isCorrect,
              orderIndex: optIdx + 1
            });
          });
        }

        if (q.dragDropItems && q.dragDropItems.length > 0) {
          q.dragDropItems.forEach((dd, ddIdx) => {
            db.insert('drag_drop_items', {
              id: `dd_${qId}_${ddIdx + 1}`,
              questionId: qId,
              itemText: dd.itemText,
              targetCategoryOrMatch: dd.targetCategoryOrMatch,
              orderIndex: ddIdx + 1
            });
          });
        }
      });

      return res.json({
        success: true,
        saved: true,
        quizId,
        totalQuestions: parsedQuestions.length,
        message: `Đã tạo bài thi thành công (${parsedQuestions.length} câu hỏi)!`
      });
    }

    res.json({
      success: true,
      totalQuestions: parsedQuestions.length,
      questions: parsedQuestions
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/quizzes/:id (Admin-only deletion)
export const deleteQuiz = (req, res) => {
  try {
    const { id } = req.params;
    const { userId, username, adminKey } = req.body || {};

    const callerId = req.headers['x-user-id'] || userId;
    const callerName = req.headers['x-username'] || username;

    const user = db.findOne('users', u => 
      (callerId && (u.id === callerId || u.studentId === callerId || u.username === callerId)) ||
      (callerName && (u.username === callerName || u.studentId === callerName))
    );

    const isAdmin = user 
      ? (user.isAdmin || user.studentId === 'dtc245200060' || user.username === 'dtc245200060' || user.role === 'admin')
      : (callerId === 'dtc245200060' || callerName === 'dtc245200060' || adminKey === 'dtc245200060');

    if (!isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Chỉ Quản trị viên (Hoàng Duy Mạnh - dtc245200060) mới có quyền xóa bài thi!'
      });
    }

    const quiz = db.findOne('quizzes', q => q.id === id);
    if (!quiz) {
      return res.status(404).json({ success: false, message: 'Không tìm thấy bài thi cần xóa' });
    }

    // Delete associated question options, drag-drop items, questions, attempts, reviews
    const questions = db.find('questions', q => q.quizId === id);
    const questionIds = new Set(questions.map(q => q.id));

    db.delete('question_options', opt => questionIds.has(opt.questionId));
    db.delete('drag_drop_items', dd => questionIds.has(dd.questionId));
    db.delete('questions', q => q.quizId === id);
    db.delete('exam_attempts', a => a.quizId === id);
    db.delete('reviews', r => r.quizId === id);
    db.delete('quizzes', q => q.id === id);

    res.json({
      success: true,
      message: `Đã xóa vĩnh viễn bài thi "${quiz.title}" thành công!`
    });
  } catch (error) {
    console.error('deleteQuiz error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};


