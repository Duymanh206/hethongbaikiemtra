import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { cleanQuiz } from '../utils/textEncoding.js';
import { englishQuizzes, englishQuestions, englishFlashcards } from './englishSeedData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IS_VERCEL = !!process.env.VERCEL;
const BUNDLED_DATA_DIR = path.join(__dirname, '..', '..', 'data');
const BUNDLED_STORE_PATH = path.join(BUNDLED_DATA_DIR, 'store.json');
const DATA_DIR = IS_VERCEL ? '/tmp' : BUNDLED_DATA_DIR;
const STORE_PATH = IS_VERCEL ? path.join('/tmp', 'store.json') : BUNDLED_STORE_PATH;
const CLOUD_SYNC_URL = 'https://api.restful-api.dev/objects/ff808181a09d98f701a1aaa77dde3ea0';

// Initial seed data with the exact requirements
const initialData = {
  users: [
    {
      id: 'user_1',
      username: 'dtc245200060',
      fullName: 'Hoàng Duy Mạnh',
      studentId: 'dtc245200060',
      email: 'manhvipsv@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'student',
      createdAt: '2026-03-01T08:00:00.000Z'
    },
    {
      id: 'user_2',
      username: 'giangvien_minh',
      fullName: 'TS. Trần Quang Minh',
      studentId: 'GV1042',
      email: 'tqminh@edu.vn',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      role: 'teacher',
      createdAt: '2026-02-15T09:30:00.000Z'
    }
  ],
  quizzes: [
    {
      id: 'quiz_cnxhkh_05',
      title: 'BÀI KIỂM TRA 15 PHÚT - TUẦN 1',
      description: 'Môn: Chủ nghĩa xã hội khoa học. Kiểm tra định kỳ 15 phút với đầy đủ các dạng trắc nghiệm chọn phương án, Đúng/Sai đa mệnh đề, và kéo thả phân loại / ghép nối.',
      category: 'Chủ nghĩa xã hội khoa học',
      originalDocxName: 'DeThi_CNXHKH_Tuan1_ChinhThuc.docx',
      durationMinutes: 15,
      passingScore: 5.0,
      shuffleQuestions: false,
      shuffleOptions: false,
      antiCheatEnabled: true,
      maxViolations: 3,
      totalQuestions: 6,
      attemptsCount: 168,
      avgRating: 4.9,
      createdBy: 'Bộ môn Triết học & CNXHKH',
      createdAt: '2026-03-10T10:00:00.000Z',
      updatedAt: '2026-03-12T14:20:00.000Z'
    },
    {
      id: 'quiz_phapluat_01',
      title: 'PHÁP LUẬT ĐẠI CƯƠNG - HỆ THỐNG PHÁP LUẬT VIỆT NAM',
      description: 'Quy phạm pháp luật, quan hệ pháp luật, vi phạm pháp luật và trách nhiệm pháp lý. Kiểm tra kiến thức nền tảng luật học.',
      category: 'Khoa học Pháp lý',
      originalDocxName: 'PhapLuatDaiCuong_KiemTraGiuaKy.docx',
      durationMinutes: 20,
      passingScore: 5.0,
      shuffleQuestions: true,
      shuffleOptions: true,
      antiCheatEnabled: true,
      maxViolations: 3,
      totalQuestions: 5,
      attemptsCount: 89,
      avgRating: 4.6,
      createdBy: 'ThS. Lê Hoàng Yến',
      createdAt: '2026-03-05T08:15:00.000Z',
      updatedAt: '2026-03-08T11:00:00.000Z'
    },
    {
      id: 'quiz_lichsudang_02',
      title: 'LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM - BÀI 3',
      description: 'Sự lãnh đạo của Đảng đối với cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ xâm lược (1945 - 1975).',
      category: 'Lịch sử & Chính trị',
      originalDocxName: 'LichSuDang_TracNghiemTongHop.docx',
      durationMinutes: 25,
      passingScore: 5.0,
      shuffleQuestions: false,
      shuffleOptions: true,
      antiCheatEnabled: false,
      maxViolations: 5,
      totalQuestions: 4,
      attemptsCount: 215,
      avgRating: 4.9,
      createdBy: 'PGS. TS Nguyễn Quốc Tuấn',
      createdAt: '2026-02-28T09:00:00.000Z',
      updatedAt: '2026-03-01T15:45:00.000Z'
    }
  ],
  questions: [
    {
      id: 'q_cnxh_11',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 1,
      type: 'single_choice',
      content: 'Câu nói sau đây được viết trong tác phẩm nào: "Giai cấp tư sản, trong quá trình thống trị giai cấp chưa đầy một thế kỷ, đã tạo ra những lực lượng sản xuất nhiều hơn và đồ sộ hơn lực lượng sản xuất của tất cả các thế hệ trước gộp lại"',
      instructionBadge: null,
      explanation: 'Luận điểm kinh điển này được trích trực tiếp trong tác phẩm "Tuyên ngôn của Đảng Cộng sản" (1848) của C.Mác và Ph.Ăngghen khi phân tích vai trò lịch sử tiến bộ ban đầu của giai cấp tư sản đối với lực lượng sản xuất.',
      points: 1.5,
      requiredCount: 1
    },
    {
      id: 'q_cnxh_13',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 2,
      type: 'drag_drop_categorize',
      content: 'Kéo thả các yếu tố sau đây vào cột tương ứng:',
      instructionBadge: '(!) Kéo và thả các thẻ đáp án vào đúng cột tương ứng',
      explanation: 'Điều kiện khách quan gồm: Địa vị kinh tế của giai cấp công nhân và Địa vị chính trị - xã hội của giai cấp công nhân. Điều kiện chủ quan gồm: Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng, và sự lãnh đạo của Đảng Cộng sản.',
      points: 2.0,
      requiredCount: 4,
      categories: [
        '1) Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân:',
        '2) Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử:'
      ]
    },
    {
      id: 'q_cnxh_14',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 3,
      type: 'drag_drop_matching',
      content: 'Kéo thả các đáp án đúng khớp với các phát biểu dưới đây:',
      instructionBadge: '(!) Kéo thẻ đáp án khớp với từng phát biểu',
      explanation: 'Mê tín dị đoan dẫn đến mê muội; Tôn giáo là sự phản ánh hoang đường hư ảo hiện thực khách quan; Mê tín dị đoan là niềm tin mù quáng vào lực lượng siêu nhiên; Tín ngưỡng là niềm tin và sự ngưỡng mộ vào lực lượng thần bí.',
      points: 2.0,
      requiredCount: 4
    },
    {
      id: 'q_cnxh_15',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 4,
      type: 'true_false_matrix',
      content: 'Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:',
      instructionBadge: '(!) Chọn Đúng hoặc Sai cho mỗi phát biểu',
      explanation: 'Phát biểu 1 và 2 là đúng phản ánh thực trạng phát triển giai cấp công nhân Việt Nam trong thời kỳ Đổi mới. Phát biểu 3 sai vì công nhân không phải tầng lớp giàu có. Phát biểu 4 sai vì công nhân luôn giữ vững liên minh công - nông - trí thức.',
      points: 2.0,
      requiredCount: 4,
      statements: [
        { id: 'tf_15_1', text: '1) Giai cấp công nhân Việt Nam hiện nay đa dạng về cơ cấu nghề nghiệp, có mặt trong mọi thành phần kinh tế', isCorrect: 'dung' },
        { id: 'tf_15_2', text: '2) Giai cấp công nhân Việt Nam hiện nay đã tăng nhanh về số lượng và chất lượng', isCorrect: 'dung' },
        { id: 'tf_15_3', text: '3) Giai cấp công nhân Việt Nam là tầng lớp giàu có, ít chịu áp bức bóc lột.', isCorrect: 'sai' },
        { id: 'tf_15_4', text: '4) Giai cấp công nhân Việt Nam không có sự liên kết với các lực lượng cách mạng khác', isCorrect: 'sai' }
      ]
    },
    {
      id: 'q_log_9',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 5,
      type: 'true_false_matrix',
      content: 'Trong kiến trúc Log Server tập trung, quá trình xử lý log diễn ra theo các bước tuần tự. Những bước nào dưới đây thuộc quy trình xử lý log ĐÚNG?',
      instructionBadge: '(!) Chọn Đúng hoặc Sai cho từng bước quy trình',
      explanation: 'Bước 1 (Thu thập), Bước 3 (Indexing/Storage) và Bước 4 (Parsing/Normalize) là các giai đoạn cốt lõi trong pipeline Log tập trung (ELK/EFK stack). Bước 2 (Triển khai bản vá phần mềm tự động dựa trên log) không thuộc quy trình xử lý log thông thường.',
      points: 1.5,
      requiredCount: 4,
      statements: [
        { id: 'tf_log_1', text: '1. Thu thập log từ các nguồn thông qua agent như Fluentd hoặc Filebeat', isCorrect: 'dung' },
        { id: 'tf_log_2', text: '2. Tự động triển khai bản vá phần mềm dựa trên nội dung log', isCorrect: 'sai' },
        { id: 'tf_log_3', text: '3. Indexing và lưu trữ trong storage backend như Elasticsearch', isCorrect: 'dung' },
        { id: 'tf_log_4', text: '4. Parsing để chuẩn hóa dữ liệu và tách các trường timestamp, severity level', isCorrect: 'dung' }
      ]
    },
    {
      id: 'q_cnxh_16',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 6,
      type: 'multiple_choice',
      content: 'Nội dung sứ mệnh lịch sử của giai cấp công nhân thể hiện trên những lĩnh vực chủ yếu nào sau đây? (Sinh viên chọn 3 phương án đúng nhất)',
      instructionBadge: '(!) Sinh viên chọn 3 phương án đúng nhất',
      explanation: 'Sứ mệnh lịch sử giai cấp công nhân được triển khai trên 3 nội dung trụ cột: Kinh tế, Chính trị - Xã hội, và Văn hóa tư tưởng.',
      points: 1.0,
      requiredCount: 3
    }
  ],
  question_options: [
    // For q_cnxh_11 (Single Choice - Image 4)
    { id: 'opt_11_a', questionId: 'q_cnxh_11', label: 'A', content: 'Bộ Tư bản', isCorrect: false, orderIndex: 1 },
    { id: 'opt_11_b', questionId: 'q_cnxh_11', label: 'B', content: 'Chống Đuyrinh', isCorrect: false, orderIndex: 2 },
    { id: 'opt_11_c', questionId: 'q_cnxh_11', label: 'C', content: 'Tuyên ngôn của Đảng Cộng sản', isCorrect: true, orderIndex: 3 },
    { id: 'opt_11_d', questionId: 'q_cnxh_11', label: 'D', content: 'Ba nguồn gốc và ba bộ phận cấu thành của chủ nghĩa Mác', isCorrect: false, orderIndex: 4 },

    // For q_cnxh_16 (Multiple Choice - 3 required)
    { id: 'opt_16_a', questionId: 'q_cnxh_16', label: 'A', content: 'Lĩnh vực kinh tế: phát triển LLSX, giải phóng áp bức bóc lột, xác lập QHSX tiến bộ.', isCorrect: true, orderIndex: 1 },
    { id: 'opt_16_b', questionId: 'q_cnxh_16', label: 'B', content: 'Lĩnh vực chính trị - xã hội: lật đổ ách thống trị tư sản, xây dựng nhà nước pháp quyền XHCN.', isCorrect: true, orderIndex: 2 },
    { id: 'opt_16_c', questionId: 'q_cnxh_16', label: 'C', content: 'Lĩnh vực văn hóa, tư tưởng: xây dựng hệ tư tưởng Mác - Lênin và nền văn hóa tiên tiến.', isCorrect: true, orderIndex: 3 },
    { id: 'opt_16_d', questionId: 'q_cnxh_16', label: 'D', content: 'Lĩnh vực tôn giáo tư nhân và duy trì độc tôn tư liệu sản xuất cá thể.', isCorrect: false, orderIndex: 4 }
  ],
  drag_drop_items: [
    // For q_cnxh_13 (Categorization - Image 3)
    { id: 'dd_13_1', questionId: 'q_cnxh_13', itemText: 'Địa vị chính trị - xã hội của giai cấp công nhân', targetCategoryOrMatch: '1) Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân:', orderIndex: 1 },
    { id: 'dd_13_2', questionId: 'q_cnxh_13', itemText: 'Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng', targetCategoryOrMatch: '2) Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử:', orderIndex: 2 },
    { id: 'dd_13_3', questionId: 'q_cnxh_13', itemText: 'Đảng Cộng sản', targetCategoryOrMatch: '2) Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử:', orderIndex: 3 },
    { id: 'dd_13_4', questionId: 'q_cnxh_13', itemText: 'Địa vị kinh tế của giai cấp công nhân', targetCategoryOrMatch: '1) Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân:', orderIndex: 4 },

    // For q_cnxh_14 (Matching - Image 5)
    { id: 'dd_14_1', questionId: 'q_cnxh_14', itemText: 'Mê tín dị đoan dẫn con người đến điều gì?', targetCategoryOrMatch: 'Mê muội', orderIndex: 1 },
    { id: 'dd_14_2', questionId: 'q_cnxh_14', itemText: 'Là sự phản ánh một cách hoang đường, hư ảo hiện thực khách quan', targetCategoryOrMatch: 'Tôn giáo', orderIndex: 2 },
    { id: 'dd_14_3', questionId: 'q_cnxh_14', itemText: 'Là sự phản ánh niềm tin mù quáng của một số người vào các lực lượng siêu nhiên', targetCategoryOrMatch: 'Mê tín dị đoan', orderIndex: 3 },
    { id: 'dd_14_4', questionId: 'q_cnxh_14', itemText: 'Là niềm tin và sự ngưỡng mộ của con người vào một lực lượng siêu nhiên, thần bí', targetCategoryOrMatch: 'Tín ngưỡng', orderIndex: 4 }
  ],
  exam_attempts: [
    {
      id: 'att_demo_prev',
      quizId: 'quiz_cnxhkh_05',
      userId: 'user_1',
      studentId: 'dtc245200060',
      candidateName: 'Nguyễn Văn An',
      score: 8.5,
      maxScore: 10.0,
      correctCount: 5,
      totalCount: 6,
      percentage: 83,
      startedAt: '2026-03-12T14:00:00.000Z',
      submittedAt: '2026-03-12T14:12:45.000Z',
      durationSeconds: 765,
      isSubmitted: true,
      status: 'completed',
      violationsCount: 0,
      violationLogs: []
    }
  ],
  attempt_answers: [],
  battle_rooms: [],
  reviews: [
    {
      id: 'rev_1',
      quizId: 'quiz_cnxhkh_05',
      userId: 'user_1',
      userName: 'Nguyễn Văn An',
      rating: 5,
      comment: 'Đề bám sát chương trình Bài 5, câu hỏi kéo thả rất trực quan giúp dễ nhớ các điều kiện khách quan và chủ quan!',
      createdAt: '2026-03-12T14:20:00.000Z'
    },
    {
      id: 'rev_2',
      quizId: 'quiz_cnxhkh_05',
      userId: 'user_student_2',
      userName: 'Trần Thị Thu Hà',
      rating: 5,
      comment: 'Giao diện đồng hồ đếm ngược LED rất chuẩn thi cử, hệ thống chấm điểm nhanh và giải thích siêu chi tiết.',
      createdAt: '2026-03-13T09:10:00.000Z'
    }
  ]
};

class Database {
  constructor() {
    this.ensureDataDir();
    this.data = this.loadData();
    this.ensureEnglishSeedData();
    this.syncFromCloud().catch(() => {});
  }

  ensureEnglishSeedData() {
    try {
      const quizzes = this.getTable('quizzes');
      const questions = this.getTable('questions');
      const options = this.getTable('question_options');

      let changed = false;
      for (const eq of englishQuizzes) {
        if (!quizzes.some(q => q.id === eq.id)) {
          quizzes.push(cleanQuiz(eq));
          changed = true;
        }
      }

      for (const q of englishQuestions) {
        if (!questions.some(item => item.id === q.id)) {
          const { options: qOpts, ...qData } = q;
          questions.push(qData);
          if (Array.isArray(qOpts) && qOpts.length > 0) {
            for (const opt of qOpts) {
              if (!options.some(o => o.id === opt.id)) {
                options.push({
                  id: opt.id,
                  questionId: q.id,
                  label: opt.label,
                  content: opt.content,
                  isCorrect: !!opt.isCorrect,
                  orderIndex: opt.orderIndex || 1
                });
              }
            }
          }
          changed = true;
        }
      }

      const flashcardsTable = this.getTable('flashcards');
      if (flashcardsTable.length === 0) {
        const allCards = [
          ...(englishFlashcards.primary || []),
          ...(englishFlashcards.secondary || []),
          ...(englishFlashcards.highschool || [])
        ];
        for (const card of allCards) {
          flashcardsTable.push(card);
        }
        changed = true;
      }

      if (changed) {
        this.saveData();
      }
    } catch (e) {
      console.warn('Failed to ensure English seed data:', e);
    }
  }

  async syncFromCloud() {
    try {
      const res = await fetch(CLOUD_SYNC_URL, {
        signal: AbortSignal.timeout(4000)
      });
      if (!res.ok) return;
      const json = await res.json();
      if (!json || !json.data) return;

      let changed = false;

      // 1. Merge users
      if (Array.isArray(json.data.users)) {
        const localUsers = this.getTable('users');
        for (const cu of json.data.users) {
          const idx = localUsers.findIndex(u => 
            (u.id && cu.id && u.id === cu.id) ||
            (u.username && cu.username && u.username.toLowerCase() === cu.username.toLowerCase()) ||
            (u.studentId && cu.studentId && u.studentId.toLowerCase() === cu.studentId.toLowerCase())
          );
          if (idx !== -1) {
            if (cu.status && localUsers[idx].status !== cu.status) {
              localUsers[idx] = { ...localUsers[idx], ...cu };
              changed = true;
            }
          } else {
            localUsers.push(cu);
            changed = true;
          }
        }
      }

      // 2. Merge custom user-created quizzes
      if (Array.isArray(json.data.customQuizzes)) {
        const localQuizzes = this.getTable('quizzes');
        for (const cq of json.data.customQuizzes) {
          const idx = localQuizzes.findIndex(q => q.id === cq.id);
          if (idx !== -1) {
            localQuizzes[idx] = { ...localQuizzes[idx], ...cleanQuiz(cq) };
          } else {
            localQuizzes.unshift(cleanQuiz(cq));
            changed = true;
          }
        }
      }

      // 3. Merge custom questions
      if (Array.isArray(json.data.customQuestions)) {
        const localQuestions = this.getTable('questions');
        for (const cq of json.data.customQuestions) {
          const idx = localQuestions.findIndex(q => q.id === cq.id);
          if (idx !== -1) {
            localQuestions[idx] = { ...localQuestions[idx], ...cq };
          } else {
            localQuestions.push(cq);
            changed = true;
          }
        }
      }

      // 4. Merge custom options
      if (Array.isArray(json.data.customOptions)) {
        const localOptions = this.getTable('question_options');
        for (const co of json.data.customOptions) {
          const idx = localOptions.findIndex(o => o.id === co.id);
          if (idx !== -1) {
            localOptions[idx] = { ...localOptions[idx], ...co };
          } else {
            localOptions.push(co);
            changed = true;
          }
        }
      }

      // 5. Merge custom drag & drop items
      if (Array.isArray(json.data.customDragDrop)) {
        const localDragDrop = this.getTable('drag_drop_items');
        for (const cd of json.data.customDragDrop) {
          const idx = localDragDrop.findIndex(d => d.id === cd.id);
          if (idx !== -1) {
            localDragDrop[idx] = { ...localDragDrop[idx], ...cd };
          } else {
            localDragDrop.push(cd);
            changed = true;
          }
        }
      }

      if (changed) {
        this.saveData();
      }
    } catch {
      // Non-blocking
    }
  }

  async syncToCloud() {
    try {
      const users = this.getTable('users');

      // Identify custom / user-created quizzes (quizzes not in standard pre-seeded list)
      const isStandardSeed = (q) => 
        q.id.startsWith('quiz_k12_') || 
        q.id.startsWith('quiz_eng_') || 
        q.id.startsWith('quiz_usedu_') || 
        ['quiz_cnxhkh_05', 'quiz_phapluat_01', 'quiz_lichsudang_02'].includes(q.id);

      const customQuizzes = this.getTable('quizzes').filter(q => !isStandardSeed(q));
      const customQuizIds = new Set(customQuizzes.map(q => q.id));
      const customQuestions = this.getTable('questions').filter(q => customQuizIds.has(q.quizId));
      const customQuestionIds = new Set(customQuestions.map(q => q.id));
      const customOptions = this.getTable('question_options').filter(o => customQuestionIds.has(o.questionId));
      const customDragDrop = this.getTable('drag_drop_items').filter(d => customQuestionIds.has(d.questionId));

      await fetch(CLOUD_SYNC_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'quiz_store_v1',
          data: {
            users,
            customQuizzes,
            customQuestions,
            customOptions,
            customDragDrop,
            updatedAt: new Date().toISOString()
          }
        }),
        signal: AbortSignal.timeout(5000)
      });
    } catch {
      // Non-blocking
    }
  }

  ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  loadData() {
    try {
      if (IS_VERCEL && !fs.existsSync(STORE_PATH) && fs.existsSync(BUNDLED_STORE_PATH)) {
        const bundled = fs.readFileSync(BUNDLED_STORE_PATH, 'utf-8');
        this.ensureDataDir();
        fs.writeFileSync(STORE_PATH, bundled, 'utf-8');
      }
      if (fs.existsSync(STORE_PATH)) {
        const content = fs.readFileSync(STORE_PATH, 'utf-8');
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed.quizzes)) {
          parsed.quizzes = parsed.quizzes.map(cleanQuiz);
        }
        return parsed;
      }
    } catch (err) {
      console.error('Error reading store.json, re-initializing with seed data:', err);
    }
    this.saveData(initialData);
    return JSON.parse(JSON.stringify(initialData));
  }

  saveData(data = this.data) {
    try {
      this.ensureDataDir();
      fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error saving store.json:', err);
    }
  }

  getTable(tableName) {
    if (!this.data[tableName]) {
      this.data[tableName] = [];
    }
    return this.data[tableName];
  }

  find(tableName, predicate) {
    const table = this.getTable(tableName);
    return table.filter(predicate);
  }

  findOne(tableName, predicate) {
    const table = this.getTable(tableName);
    return table.find(predicate) || null;
  }

  insert(tableName, record) {
    const table = this.getTable(tableName);
    table.push(record);
    this.saveData();
    if (tableName === 'users') {
      this.syncToCloud().catch(() => {});
    }
    return record;
  }

  update(tableName, predicate, updates) {
    const table = this.getTable(tableName);
    const index = table.findIndex(predicate);
    if (index !== -1) {
      table[index] = { ...table[index], ...updates };
      this.saveData();
      if (tableName === 'users') {
        this.syncToCloud().catch(() => {});
      }
      return table[index];
    }
    return null;
  }

  delete(tableName, predicate) {
    const table = this.getTable(tableName);
    const initialLen = table.length;
    this.data[tableName] = table.filter(item => !predicate(item));
    if (this.data[tableName].length !== initialLen) {
      this.saveData();
      if (tableName === 'users') {
        this.syncToCloud().catch(() => {});
      }
      return true;
    }
    return false;
  }
}

export const db = new Database();

