import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseDocxBuffer } from './src/services/docxParser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STORE_PATH = path.join(__dirname, 'data', 'store.json');
const DOCX_PATH = 'C:/Users/FPT/.gemini/antigravity/brain/bdc0c3d7-9639-4a77-9c41-0406e55a8125/.user_uploaded/media_1793840554924_9d32d607.docx';

async function seed() {
  console.log('Seeding quiz from docx:', DOCX_PATH);
  const buffer = fs.readFileSync(DOCX_PATH);
  const parsed = await parseDocxBuffer(buffer, {
    selectedColors: ['red', 'yellow'],
    detectByBold: true,
    detectByUnderline: true,
    detectByColor: true,
    detectByHighlight: true
  });

  console.log(`Parsed ${parsed.questions.length} questions from docx.`);

  const store = JSON.parse(fs.readFileSync(STORE_PATH, 'utf8'));

  const quizId = 'quiz_cnxhkh_05';
  const existingQuizIdx = store.quizzes.findIndex(q => q.id === quizId);

  const quizData = {
    id: quizId,
    title: 'BÀI KIỂM TRA 15 PHÚT - TUẦN 1',
    description: 'Chủ nghĩa xã hội khoa học - Bài 5: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH',
    category: 'Chủ nghĩa xã hội khoa học',
    originalDocxName: 'Chủ_Nghĩa_Xã_Hội_Khoa_Học_Bài_5.docx',
    durationMinutes: 15,
    passingScore: 5.0,
    shuffleQuestions: false, // keep sequential order 1..40 as user requested
    shuffleOptions: false,
    antiCheatEnabled: true,
    maxViolations: 3,
    totalQuestions: parsed.questions.length,
    attemptsCount: 0,
    avgRating: 5.0,
    createdBy: 'Hoàng Duy Mạnh',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (existingQuizIdx >= 0) {
    store.quizzes[existingQuizIdx] = quizData;
  } else {
    store.quizzes.push(quizData);
  }

  // Remove existing questions, options, drag_drop_items for this quiz
  const oldQIds = store.questions.filter(q => q.quizId === quizId).map(q => q.id);
  store.questions = store.questions.filter(q => q.quizId !== quizId);
  store.question_options = store.question_options.filter(o => !oldQIds.includes(o.questionId));
  store.drag_drop_items = store.drag_drop_items.filter(d => !oldQIds.includes(d.questionId));

  parsed.questions.forEach((q, idx) => {
    const qId = `q_u40_${idx + 1}`;
    store.questions.push({
      id: qId,
      quizId,
      orderIndex: idx + 1,
      type: q.type,
      content: q.content,
      instructionBadge: q.instructionBadge || null,
      explanation: q.explanation || 'Đáp án theo đề thi Chủ nghĩa xã hội khoa học chuẩn.',
      points: 1.0,
      requiredCount: q.requiredCount || 1,
      categories: q.categories || [],
      statements: q.statements || []
    });

    if (q.options && q.options.length > 0) {
      q.options.forEach((opt, optIdx) => {
        store.question_options.push({
          id: `opt_${qId}_${opt.label.toLowerCase()}`,
          questionId: qId,
          label: opt.label,
          content: opt.content,
          isCorrect: !!opt.isCorrect,
          orderIndex: optIdx + 1
        });
      });
    }

    if (q.dragDropItems && q.dragDropItems.length > 0) {
      q.dragDropItems.forEach((dd, ddIdx) => {
        store.drag_drop_items.push({
          id: `dd_${qId}_${ddIdx + 1}`,
          questionId: qId,
          itemText: dd.itemText,
          targetCategoryOrMatch: dd.targetCategoryOrMatch,
          orderIndex: ddIdx + 1
        });
      });
    }
  });

  fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), 'utf8');
  console.log(`Successfully seeded ${parsed.questions.length} questions into ${STORE_PATH}!`);
}

seed().catch(console.error);
