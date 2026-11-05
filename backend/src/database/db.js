import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const STORE_PATH = path.join(DATA_DIR, 'store.json');

// Initial seed data with the exact requirements
const initialData = {
  users: [
    {
      id: 'user_1',
      username: 'dtc245200060',
      fullName: 'Nguyễn Văn An',
      studentId: 'dtc245200060',
      email: 'dtc245200060@student.edu.vn',
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
      title: 'CHỦ NGHĨA XÃ HỘI KHOA HỌC - BÀI 5',
      description: 'Sứ mệnh lịch sử của giai cấp công nhân và thời kỳ quá độ lên chủ nghĩa xã hội. Bao gồm trắc nghiệm 1 đáp án, nhiều đáp án, kéo thả phân loại và kéo thả nối mệnh đề.',
      category: 'Triết học & Lý luận chính trị',
      originalDocxName: 'DeThi_CNXHKH_Bai5_ChinhThuc.docx',
      durationMinutes: 15,
      passingScore: 5.0,
      shuffleQuestions: true,
      shuffleOptions: true,
      antiCheatEnabled: true,
      maxViolations: 3,
      totalQuestions: 6,
      attemptsCount: 142,
      avgRating: 4.8,
      createdBy: 'TS. Trần Quang Minh',
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
      id: 'q_cnxh_1',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 1,
      type: 'single_choice',
      content: 'Giai cấp công nhân Việt Nam ra đời trong hoàn cảnh lịch sử nào sau đây?',
      instructionBadge: null,
      explanation: 'Giai cấp công nhân Việt Nam ra đời từ cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp (1897 - 1914), trước cả sự ra đời của giai cấp tư sản dân tộc Việt Nam. Đây là đặc điểm lịch sử vô cùng quan trọng quy định tính kiên quyết cách mạng.',
      points: 1.5,
      requiredCount: 1
    },
    {
      id: 'q_cnxh_2',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 2,
      type: 'multiple_choice',
      content: 'Nội dung sứ mệnh lịch sử của giai cấp công nhân thể hiện trên những lĩnh vực chủ yếu nào sau đây? (Sinh viên chọn 3 phương án đúng nhất)',
      instructionBadge: '(!) Sinh viên chọn 3 phương án đúng nhất',
      explanation: 'Sứ mệnh lịch sử của giai cấp công nhân được triển khai toàn diện trên 3 nội dung trọng yếu: Kinh tế (giải phóng lực lượng sản xuất), Chính trị - Xã hội (lật đổ thống trị tư sản, xây dựng nhà nước vô sản), và Văn hóa - Tư tưởng (xây dựng nền văn hóa mới trên nền tảng tư tưởng vô sản).',
      points: 2.0,
      requiredCount: 3
    },
    {
      id: 'q_cnxh_3',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 3,
      type: 'drag_drop_categorize',
      content: 'Hãy phân loại các yếu tố sau vào đúng điều kiện khách quan hoặc điều kiện chủ quan quy định sứ mệnh lịch sử của giai cấp công nhân:',
      instructionBadge: '(!) Kéo và thả các thẻ đáp án vào đúng cột tương ứng',
      explanation: 'Điều kiện khách quan gồm địa vị kinh tế và đặc điểm chính trị - xã hội gắn liền với nền đại công nghiệp. Điều kiện chủ quan gồm sự trưởng thành của bản thân giai cấp, việc thành lập Đảng tiên phong và liên minh công - nông.',
      points: 2.0,
      requiredCount: 5,
      categories: ['1) Điều kiện khách quan...', '2) Điều kiện chủ quan...']
    },
    {
      id: 'q_cnxh_4',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 4,
      type: 'drag_drop_matching',
      content: 'Hãy ghép nối các tác phẩm/mệnh đề kinh điển với tác giả sáng lập Chủ nghĩa Xã hội Khoa học tương ứng:',
      instructionBadge: '(!) Kéo thẻ tác giả bên trên vào ô trống viền nét đứt bên phải mỗi phát biểu',
      explanation: 'Tác phẩm "Tuyên ngôn của Đảng Cộng sản" (1848) do C.Mác và Ph.Ăngghen soạn thảo; "Nhà nước và Cách mạng" (1917) do V.I.Lênin viết; "Chống Đuy-rinh" do Ph.Ăngghen viết; "Đường Kách Mệnh" do Lãnh tụ Hồ Chí Minh soạn thảo.',
      points: 2.0,
      requiredCount: 4
    },
    {
      id: 'q_cnxh_5',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 5,
      type: 'single_choice',
      content: 'Quy luật hình thành và phát triển của Đảng Cộng sản Việt Nam là sự kết hợp giữa chủ nghĩa Mác - Lênin với phong trào công nhân và yếu tố đặc thù nào?',
      instructionBadge: null,
      explanation: 'Chủ tịch Hồ Chí Minh đã phát triển sáng tạo quy luật thành lập Đảng vô sản: Ở các nước thuộc địa như Việt Nam, Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước.',
      points: 1.0,
      requiredCount: 1
    },
    {
      id: 'q_cnxh_6',
      quizId: 'quiz_cnxhkh_05',
      orderIndex: 6,
      type: 'multiple_choice',
      content: 'Đặc trưng cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực kinh tế bao gồm những đặc điểm nào? (Chọn 2 phương án đúng nhất)',
      instructionBadge: '(!) Chọn 2 phương án đúng nhất',
      explanation: 'Thời kỳ quá độ trên lĩnh vực kinh tế mang tính đa dạng: tất yếu tồn tại nền kinh tế nhiều thành phần với các hình thức sở hữu khác nhau và quá trình công nghiệp hóa, hiện đại hóa để tạo lập cơ sở vật chất kỹ thuật cho CNXH.',
      points: 1.5,
      requiredCount: 2
    }
  ],
  question_options: [
    // For q_cnxh_1 (Single Choice)
    { id: 'opt_1_a', questionId: 'q_cnxh_1', label: 'A', content: 'Trước Chiến tranh thế giới I trong cuộc khai thác thuộc địa lần 1 của thực dân Pháp.', isCorrect: true, orderIndex: 1 },
    { id: 'opt_1_b', questionId: 'q_cnxh_1', label: 'B', content: 'Sau Chiến tranh thế giới thứ nhất khi tư bản Pháp đẩy mạnh đầu tư đồn điền cao su.', isCorrect: false, orderIndex: 2 },
    { id: 'opt_1_c', questionId: 'q_cnxh_1', label: 'C', content: 'Cùng thời điểm và song hành trực tiếp với sự hình thành của giai cấp tư sản dân tộc.', isCorrect: false, orderIndex: 3 },
    { id: 'opt_1_d', questionId: 'q_cnxh_1', label: 'D', content: 'Trong công cuộc đổi mới đất nước và mở cửa hội nhập kinh tế quốc tế năm 1986.', isCorrect: false, orderIndex: 4 },

    // For q_cnxh_2 (Multiple Choice - 3 required)
    { id: 'opt_2_a', questionId: 'q_cnxh_2', label: 'A', content: 'Nội dung kinh tế: phát triển LLSX, xóa bỏ bóc lột, xây dựng QHSX tiến bộ.', isCorrect: true, orderIndex: 1 },
    { id: 'opt_2_b', questionId: 'q_cnxh_2', label: 'B', content: 'Nội dung chính trị - xã hội: lật đổ ách thống trị tư sản, xây dựng nhà nước pháp quyền XHCN.', isCorrect: true, orderIndex: 2 },
    { id: 'opt_2_c', questionId: 'q_cnxh_2', label: 'C', content: 'Nội dung văn hóa, tư tưởng: xây dựng hệ tư tưởng Mác - Lênin và nền văn hóa tiên tiến.', isCorrect: true, orderIndex: 3 },
    { id: 'opt_2_d', questionId: 'q_cnxh_2', label: 'D', content: 'Nội dung cá nhân hóa: duy trì hoàn toàn quyền sở hữu tư nhân về tư liệu sản xuất vô hạn định.', isCorrect: false, orderIndex: 4 },

    // For q_cnxh_5 (Single Choice)
    { id: 'opt_5_a', questionId: 'q_cnxh_5', label: 'A', content: 'Phong trào yêu nước Việt Nam truyền thống.', isCorrect: true, orderIndex: 1 },
    { id: 'opt_5_b', questionId: 'q_cnxh_5', label: 'B', content: 'Phong trào nông dân khởi nghĩa vũ trang tự phát.', isCorrect: false, orderIndex: 2 },
    { id: 'opt_5_c', questionId: 'q_cnxh_5', label: 'C', content: 'Tinh thần liên hiệp quốc tế vô sản thuần túy.', isCorrect: false, orderIndex: 3 },
    { id: 'opt_5_d', questionId: 'q_cnxh_5', label: 'D', content: 'Tầng lớp trí thức tinh hoa tiến bộ thời Pháp thuộc.', isCorrect: false, orderIndex: 4 },

    // For q_cnxh_6 (Multiple Choice - 2 required)
    { id: 'opt_6_a', questionId: 'q_cnxh_6', label: 'A', content: 'Tồn tại nền kinh tế nhiều thành phần với các hình thức sở hữu đan xen.', isCorrect: true, orderIndex: 1 },
    { id: 'opt_6_b', questionId: 'q_cnxh_6', label: 'B', content: 'Xác lập ngay lập tức chế độ độc tôn công hữu tuyệt đối cho toàn bộ nền kinh tế.', isCorrect: false, orderIndex: 2 },
    { id: 'opt_6_c', questionId: 'q_cnxh_6', label: 'C', content: 'Phát triển lực lượng sản xuất gắn liền với sự nghiệp công nghiệp hóa, hiện đại hóa.', isCorrect: true, orderIndex: 3 },
    { id: 'opt_6_d', questionId: 'q_cnxh_6', label: 'D', content: 'Xóa bỏ hoàn toàn quan hệ tiền tệ, chuyển sang cấp phát phân phối hiện vật.', isCorrect: false, orderIndex: 4 }
  ],
  drag_drop_items: [
    // For q_cnxh_3 (Categorization)
    { id: 'dd_cat_1', questionId: 'q_cnxh_3', itemText: 'Địa vị kinh tế - xã hội của giai cấp công nhân trong nền sản xuất hiện đại', targetCategoryOrMatch: '1) Điều kiện khách quan...', orderIndex: 1 },
    { id: 'dd_cat_2', questionId: 'q_cnxh_3', itemText: 'Đặc điểm chính trị - xã hội: tính tổ chức, kỷ luật cao, tinh thần cách mạng triệt để', targetCategoryOrMatch: '1) Điều kiện khách quan...', orderIndex: 2 },
    { id: 'dd_cat_3', questionId: 'q_cnxh_3', itemText: 'Sự phát triển của bản thân giai cấp công nhân về số lượng và chất lượng', targetCategoryOrMatch: '2) Điều kiện chủ quan...', orderIndex: 3 },
    { id: 'dd_cat_4', questionId: 'q_cnxh_3', itemText: 'Đảng Cộng sản - Đội tiên phong dẫn đường lãnh đạo giai cấp công nhân', targetCategoryOrMatch: '2) Điều kiện chủ quan...', orderIndex: 4 },
    { id: 'dd_cat_5', questionId: 'q_cnxh_3', itemText: 'Khối liên minh vững chắc giữa giai cấp công nhân với nông dân và các tầng lớp nhân dân', targetCategoryOrMatch: '2) Điều kiện chủ quan...', orderIndex: 5 },

    // For q_cnxh_4 (Matching)
    { id: 'dd_match_1', questionId: 'q_cnxh_4', itemText: 'Tuyên ngôn của Đảng Cộng sản (1848)', targetCategoryOrMatch: 'C.Mác và Ph.Ăngghen', orderIndex: 1 },
    { id: 'dd_match_2', questionId: 'q_cnxh_4', itemText: 'Nhà nước và Cách mạng (1917)', targetCategoryOrMatch: 'V.I.Lênin', orderIndex: 2 },
    { id: 'dd_match_3', questionId: 'q_cnxh_4', itemText: 'Chống Đuy-rinh (1878)', targetCategoryOrMatch: 'Ph.Ăngghen', orderIndex: 3 },
    { id: 'dd_match_4', questionId: 'q_cnxh_4', itemText: 'Đường Kách Mệnh (1927)', targetCategoryOrMatch: 'Hồ Chí Minh', orderIndex: 4 }
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
  }

  ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  loadData() {
    try {
      if (fs.existsSync(STORE_PATH)) {
        const content = fs.readFileSync(STORE_PATH, 'utf-8');
        return JSON.parse(content);
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
    return record;
  }

  update(tableName, predicate, updates) {
    const table = this.getTable(tableName);
    const index = table.findIndex(predicate);
    if (index !== -1) {
      table[index] = { ...table[index], ...updates };
      this.saveData();
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
      return true;
    }
    return false;
  }
}

export const db = new Database();

