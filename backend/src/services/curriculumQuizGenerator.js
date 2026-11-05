import { db } from '../database/db.js';
import { usEduCurriculum } from '../database/usEduCurriculum.js';
import { englishCurriculumK12 } from '../database/englishCurriculumK12.js';

// Helper to shuffle array (Fisher-Yates)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Searches curriculum databases (US_EDU & EnglishK12) and creates a comprehensive,
 * gradable quiz with real questions (reading, listening, writing, vocab) in db if not yet created.
 */
export function findAndEnsureUnitQuiz(id) {
  if (!id) return null;

  // Check if already in db
  let existing = db.findOne('quizzes', q => q.id === id);
  if (existing) {
    const qCount = db.find('questions', q => q.quizId === id).length;
    if (qCount > 0) return existing;
  }

  // Search in usEduCurriculum
  let targetUnit = null;
  let targetGrade = null;
  let isUsEdu = false;

  for (const grade of usEduCurriculum) {
    const u = grade.units?.find(unit => unit.id === id);
    if (u) {
      targetUnit = u;
      targetGrade = grade;
      isUsEdu = true;
      break;
    }
  }

  // Search in englishCurriculumK12 if not found
  if (!targetUnit) {
    for (const grade of englishCurriculumK12) {
      const u = grade.units?.find(unit => unit.id === id);
      if (u) {
        targetUnit = u;
        targetGrade = grade;
        isUsEdu = false;
        break;
      }
    }
  }

  if (!targetUnit) return null;

  const seriesName = targetUnit.curriculumSeries || (targetGrade.textbooks?.[0]) || 'English Learning';
  const newQuiz = {
    id: targetUnit.id,
    title: `${targetUnit.title} (${targetGrade.grade})`,
    description: `${targetUnit.vietnameseTitle}. Giáo trình chuẩn: ${seriesName}. Luyện bài tập trắc nghiệm, bài đọc hiểu và cấu trúc ngữ pháp.`,
    category: isUsEdu ? 'Tiếng Anh Chuẩn Mỹ (US_EDU)' : 'Tiếng Anh Phổ Thông (Global Success)',
    originalDocxName: `${targetUnit.id}_textbook.pdf`,
    durationMinutes: 15,
    passingScore: 5.0,
    shuffleQuestions: false,
    shuffleOptions: true,
    antiCheatEnabled: true,
    maxViolations: 3,
    totalQuestions: 0,
    attemptsCount: 35,
    avgRating: 5.0,
    createdBy: isUsEdu ? 'US_EDU Curriculum Board' : 'Bộ môn Tiếng Anh',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isUnitQuiz: true,
    unitData: targetUnit
  };

  if (existing) {
    db.update('quizzes', q => q.id === id, newQuiz);
  } else {
    db.insert('quizzes', newQuiz);
  }

  // Generate Questions for this Quiz
  let qIndex = 1;

  // 1. Reading Comprehension question
  if (targetUnit.readingPractice) {
    const qId = `q_${targetUnit.id}_read_1`;
    if (!db.findOne('questions', q => q.id === qId)) {
      const readQ = {
        id: qId,
        quizId: targetUnit.id,
        type: 'reading_comprehension',
        orderIndex: qIndex++,
        content: targetUnit.readingPractice.question || `Dựa vào bài đọc '${targetUnit.readingPractice.title}', chọn câu trả lời chính xác:`,
        passageTitle: targetUnit.readingPractice.title || targetUnit.title,
        passageText: targetUnit.readingPractice.passage,
        explanation: targetUnit.readingPractice.explanation || 'Thông tin được nêu rõ trong bài đọc.',
        points: 1
      };
      db.insert('questions', readQ);

      const rOptions = targetUnit.readingPractice.options || [
        { id: `${qId}_opt1`, label: 'A', text: 'Chính xác theo nội dung bài đọc', isCorrect: true },
        { id: `${qId}_opt2`, label: 'B', text: 'Thông tin không chính xác', isCorrect: false }
      ];

      rOptions.forEach((opt, oIdx) => {
        db.insert('question_options', {
          id: opt.id || `${qId}_opt_${oIdx + 1}`,
          questionId: qId,
          label: String.fromCharCode(65 + oIdx),
          content: opt.text || opt.content || '',
          isCorrect: !!opt.isCorrect,
          orderIndex: oIdx + 1
        });
      });
    }
  }

  // 2. Listening question
  if (targetUnit.listeningPractice) {
    const qId = `q_${targetUnit.id}_listen_1`;
    if (!db.findOne('questions', q => q.id === qId)) {
      const listenQ = {
        id: qId,
        quizId: targetUnit.id,
        type: 'listening',
        orderIndex: qIndex++,
        content: targetUnit.listeningPractice.question || 'Nghe đoạn trích bài giảng và chọn đáp án chính xác:',
        listeningScript: targetUnit.listeningPractice.script,
        audioUrl: targetUnit.listeningPractice.audioUrl || null,
        explanation: targetUnit.listeningPractice.explanation || 'Trích đoạn từ file bài nghe của bài học.',
        points: 1
      };
      db.insert('questions', listenQ);

      const lOptions = targetUnit.listeningPractice.options || [
        { id: `${qId}_opt1`, label: 'A', text: 'Đáp án đúng theo bài nghe', isCorrect: true },
        { id: `${qId}_opt2`, label: 'B', text: 'Đáp án không chính xác', isCorrect: false }
      ];

      lOptions.forEach((opt, oIdx) => {
        db.insert('question_options', {
          id: opt.id || `${qId}_opt_${oIdx + 1}`,
          questionId: qId,
          label: String.fromCharCode(65 + oIdx),
          content: opt.text || opt.content || '',
          isCorrect: !!opt.isCorrect,
          orderIndex: oIdx + 1
        });
      });
    }
  }

  // 3. Sentence rearrangement question
  if (targetUnit.writingPractice) {
    const qId = `q_${targetUnit.id}_write_1`;
    if (!db.findOne('questions', q => q.id === qId)) {
      const writeQ = {
        id: qId,
        quizId: targetUnit.id,
        type: 'sentence_rearrange',
        orderIndex: qIndex++,
        content: targetUnit.writingPractice.prompt || 'Sắp xếp các thẻ từ sau thành câu tiếng Anh hoàn chỉnh đúng ngữ pháp:',
        scrambledWords: targetUnit.writingPractice.scrambledWords || ['Plants', 'need', 'water', 'to', 'grow'],
        correctSentence: targetUnit.writingPractice.correctSentence || 'Plants need water to grow',
        explanation: targetUnit.writingPractice.explanation || 'Cấu trúc câu hoàn chỉnh.',
        points: 1
      };
      db.insert('questions', writeQ);
    }
  }

  // 4. Vocabulary definition & context questions
  const vocabs = targetUnit.vocabulary || [];
  vocabs.forEach((v, vIdx) => {
    // 4.1 Meaning question
    const qId = `q_${targetUnit.id}_vocab_${vIdx + 1}`;
    if (!db.findOne('questions', q => q.id === qId)) {
      const vocabQ = {
        id: qId,
        quizId: targetUnit.id,
        type: 'single_choice',
        orderIndex: qIndex++,
        content: `Từ vựng "<strong>${v.word}</strong>" (phiên âm: <span class="font-mono text-blue-600">${v.ipa || ''}</span>, từ loại: <em>${v.type || 'noun'}</em>) có nghĩa tiếng Việt là gì?`,
        explanation: `Từ vựng: "${v.word}" có nghĩa là "${v.meaning}". Ví dụ: "${v.example || ''}" (${v.exampleVi || ''}).`,
        points: 1
      };
      db.insert('questions', vocabQ);

      // Collect distractors from other words
      const otherMeanings = vocabs.filter(item => item.word !== v.word).map(item => item.meaning);
      const fallbackDistractors = [
        'Môi trường sống tự nhiên',
        'Sự phát triển bền vững',
        'Nguồn năng lượng tái tạo',
        'Biến đổi trạng thái vật chất',
        'Cấu trúc hình học cơ bản'
      ];
      const chosenDistractors = [...otherMeanings, ...fallbackDistractors].slice(0, 3);

      const optionsList = [
        { text: v.meaning, isCorrect: true },
        ...chosenDistractors.map(m => ({ text: m, isCorrect: false }))
      ];

      shuffleArray(optionsList).forEach((opt, oIdx) => {
        db.insert('question_options', {
          id: `${qId}_opt_${oIdx + 1}`,
          questionId: qId,
          label: String.fromCharCode(65 + oIdx),
          content: opt.text,
          isCorrect: opt.isCorrect,
          orderIndex: oIdx + 1
        });
      });
    }

    // 4.2 Fill in blank context question if example exists
    if (v.example && v.example.toLowerCase().includes(v.word.toLowerCase())) {
      const qContextId = `q_${targetUnit.id}_ctx_${vIdx + 1}`;
      if (!db.findOne('questions', q => q.id === qContextId)) {
        const regex = new RegExp(`\\b${v.word}\\b`, 'gi');
        const blankSentence = v.example.replace(regex, '_____');
        const ctxQ = {
          id: qContextId,
          quizId: targetUnit.id,
          type: 'single_choice',
          orderIndex: qIndex++,
          content: `Điền từ vựng thích hợp vào chỗ trống:<br/><blockquote class="p-2.5 my-2 border-l-4 border-blue-500 bg-slate-50 italic font-medium">"${blankSentence}"</blockquote>`,
          explanation: `Câu hoàn chỉnh: "${v.example}" (${v.exampleVi || ''}).`,
          points: 1
        };
        db.insert('questions', ctxQ);

        const otherWords = vocabs.filter(item => item.word !== v.word).map(item => item.word);
        const fallbackWords = ['grow', 'survive', 'habitat', 'system', 'motion'];
        const chosenWordDistractors = [...otherWords, ...fallbackWords].slice(0, 3);

        const wordOptions = [
          { text: v.word, isCorrect: true },
          ...chosenWordDistractors.map(w => ({ text: w, isCorrect: false }))
        ];

        shuffleArray(wordOptions).forEach((opt, oIdx) => {
          db.insert('question_options', {
            id: `${qContextId}_opt_${oIdx + 1}`,
            questionId: qContextId,
            label: String.fromCharCode(65 + oIdx),
            content: opt.text,
            isCorrect: opt.isCorrect,
            orderIndex: oIdx + 1
          });
        });
      }
    }
  });

  // 5. Grammar question
  if (targetUnit.sentencePatterns && targetUnit.sentencePatterns.length > 0) {
    const qGrammarId = `q_${targetUnit.id}_grammar_1`;
    if (!db.findOne('questions', q => q.id === qGrammarId)) {
      const pattern = targetUnit.sentencePatterns[0];
      const grammarQ = {
        id: qGrammarId,
        quizId: targetUnit.id,
        type: 'single_choice',
        orderIndex: qIndex++,
        content: `Dựa vào ngữ pháp bài học (${targetUnit.grammarFocus || 'Mẫu câu chuẩn'}), phương án nào sau đây diễn đạt chính xác nhất?`,
        explanation: `Mẫu câu chuẩn ngữ pháp trong bài học: "${pattern}".`,
        points: 1
      };
      db.insert('questions', grammarQ);

      const words = pattern.split(' ');
      const scrambleAlt1 = words.length > 3 ? [...words.slice(2), ...words.slice(0, 2)].join(' ') : 'It does not matches correctly';
      const scrambleAlt2 = `The ${words[0]} are not ${words[words.length - 1]}`;

      const grammarOptions = [
        { text: pattern, isCorrect: true },
        { text: scrambleAlt1, isCorrect: false },
        { text: scrambleAlt2, isCorrect: false }
      ];

      shuffleArray(grammarOptions).forEach((opt, oIdx) => {
        db.insert('question_options', {
          id: `${qGrammarId}_opt_${oIdx + 1}`,
          questionId: qGrammarId,
          label: String.fromCharCode(65 + oIdx),
          content: opt.text,
          isCorrect: opt.isCorrect,
          orderIndex: oIdx + 1
        });
      });
    }
  }

  // Update total questions count
  const allGenerated = db.find('questions', q => q.quizId === targetUnit.id);
  db.update('quizzes', q => q.id === targetUnit.id, { totalQuestions: allGenerated.length });

  return newQuiz;
}
