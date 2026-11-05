/**
 * High-quality Seed Data for English K12 Curriculum (Từ Lớp 1 đến Lớp 12)
 * Includes:
 * 1. Primary School (Tiểu học - Lớp 3 & Lớp 5)
 * 2. Secondary School (THCS - Lớp 6 & Lớp 9 - SGK Global Success)
 * 3. High School (THPT - Lớp 11 & Đề Thi Thử Tốt Nghiệp THPT Quốc Gia 2026 Chuẩn Cấu Trúc Mới)
 */

export const englishQuizzes = [
  // 1. TIỂU HỌC - LỚP 3
  {
    id: 'quiz_eng_p1',
    title: 'TIẾNG ANH LỚP 3 - UNIT 1 & 2: MY FAMILY & SCHOOL THINGS',
    description: 'Chương trình Tiếng Anh Tiểu học. Luyện từ vựng chủ đề Gia đình & Đồ dùng học tập, bài nghe nhận diện đồ vật và sắp xếp câu cơ bản.',
    category: 'Tiếng Anh Phổ Thông',
    level: 'primary',
    grade: 'Lớp 3',
    originalDocxName: 'TiengAnh3_Unit1_2.docx',
    durationMinutes: 15,
    passingScore: 5.0,
    shuffleQuestions: false,
    shuffleOptions: true,
    antiCheatEnabled: false,
    maxViolations: 5,
    totalQuestions: 6,
    attemptsCount: 142,
    avgRating: 5.0,
    createdBy: 'Ban Chuyên môn Tiểu học',
    createdAt: '2026-03-01T08:00:00.000Z',
    updatedAt: '2026-03-01T08:00:00.000Z'
  },

  // 2. TIỂU HỌC - LỚP 5
  {
    id: 'quiz_eng_p2',
    title: 'TIẾNG ANH LỚP 5 - UNIT 4: DAILY ROUTINES & HEALTHY HABITS',
    description: 'Chương trình Tiếng Anh Lớp 5. Các hoạt động hằng ngày, trạng từ chỉ tần suất, nghe hiểu mẫu câu hỏi đáp thời gian và bài tập điền từ.',
    category: 'Tiếng Anh Phổ Thông',
    level: 'primary',
    grade: 'Lớp 5',
    originalDocxName: 'TiengAnh5_Unit4_Routines.docx',
    durationMinutes: 20,
    passingScore: 5.0,
    shuffleQuestions: false,
    shuffleOptions: true,
    antiCheatEnabled: true,
    maxViolations: 3,
    totalQuestions: 5,
    attemptsCount: 98,
    avgRating: 4.9,
    createdBy: 'Tổ Ngoại ngữ Tiểu học',
    createdAt: '2026-03-05T08:00:00.000Z',
    updatedAt: '2026-03-05T08:00:00.000Z'
  },

  // 3. THCS - LỚP 6 (GLOBAL SUCCESS)
  {
    id: 'quiz_eng_s1',
    title: 'TIẾNG ANH LỚP 6 - GLOBAL SUCCESS: UNIT 1 MY NEW SCHOOL (15 PHÚT)',
    description: 'Bám sát SGK Global Success. Kiểm tra 15 phút: Ngữ âm phát âm /s/ và /z/, thì Hiện tại đơn, từ vựng phòng ốc và hoạt động trường học mới.',
    category: 'Tiếng Anh Phổ Thông',
    level: 'secondary',
    grade: 'Lớp 6',
    originalDocxName: 'GlobalSuccess_Grade6_Unit1.docx',
    durationMinutes: 15,
    passingScore: 5.0,
    shuffleQuestions: true,
    shuffleOptions: true,
    antiCheatEnabled: true,
    maxViolations: 3,
    totalQuestions: 6,
    attemptsCount: 230,
    avgRating: 4.8,
    createdBy: 'Nhóm Tác giả Global Success',
    createdAt: '2026-03-10T09:00:00.000Z',
    updatedAt: '2026-03-10T09:00:00.000Z'
  },

  // 4. THCS - LỚP 9 (LUYỆN VÀO LỚP 10)
  {
    id: 'quiz_eng_s2',
    title: 'TIẾNG ANH LỚP 9 - ĐỀ KIỂM TRA 1 TIẾT & LUYỆN THI VÀO LỚP 10',
    description: 'Đề kiểm tra 45 phút tổng hợp: Trọng âm 2-3 âm tiết, phát âm đuôi -ed, thì quá khứ, câu điều kiện, bài đọc điền từ Cloze test.',
    category: 'Tiếng Anh Phổ Thông',
    level: 'secondary',
    grade: 'Lớp 9',
    originalDocxName: 'DeThiVao10_TiengAnh9_45P.docx',
    durationMinutes: 45,
    passingScore: 5.0,
    shuffleQuestions: false,
    shuffleOptions: true,
    antiCheatEnabled: true,
    maxViolations: 3,
    totalQuestions: 6,
    attemptsCount: 312,
    avgRating: 4.9,
    createdBy: 'Hội đồng Khảo thí THCS',
    createdAt: '2026-03-12T10:00:00.000Z',
    updatedAt: '2026-03-12T10:00:00.000Z'
  },

  // 5. THPT - LỚP 11
  {
    id: 'quiz_eng_h1',
    title: 'TIẾNG ANH LỚP 11 - UNIT 1: A LONG AND HEALTHY LIFE',
    description: 'Chương trình THPT mới. Luyện tập từ vựng y tế, tuổi thọ, động từ khuyết thiếu (modal verbs), bài đọc hiểu về chế độ ăn uống khoa học.',
    category: 'Tiếng Anh Phổ Thông',
    level: 'highschool',
    grade: 'Lớp 11',
    originalDocxName: 'Grade11_HealthyLife_Unit1.docx',
    durationMinutes: 30,
    passingScore: 5.0,
    shuffleQuestions: false,
    shuffleOptions: true,
    antiCheatEnabled: true,
    maxViolations: 3,
    totalQuestions: 5,
    attemptsCount: 185,
    avgRating: 4.9,
    createdBy: 'Bộ môn Ngoại ngữ THPT',
    createdAt: '2026-03-15T14:00:00.000Z',
    updatedAt: '2026-03-15T14:00:00.000Z'
  },

  // 6. THPT - ĐỀ THI THỬ TỐT NGHIỆP THPT QUỐC GIA 2026 (CẤU TRÚC MỚI BỘ GD&ĐT)
  {
    id: 'quiz_eng_thpt_qg',
    title: 'ĐỀ THI THỬ TỐT NGHIỆP THPT QUỐC GIA 2026 - MÔN TIẾNG ANH (CẤU TRÚC MỚI)',
    description: 'Chuẩn ma trận đề thi tốt nghiệp THPT mới của Bộ GD&ĐT (40 câu / 50 phút). Bao gồm Phát âm & Trọng âm, Sắp xếp đoạn văn, Đọc điền khuyết và Đọc hiểu đoạn văn Split View.',
    category: 'Tiếng Anh Phổ Thông',
    level: 'highschool',
    grade: 'Lớp 12',
    originalDocxName: 'DeThiThuTHPTQG_2026_ChuanMoi.docx',
    durationMinutes: 50,
    passingScore: 5.0,
    shuffleQuestions: false,
    shuffleOptions: true,
    antiCheatEnabled: true,
    maxViolations: 3,
    totalQuestions: 7, // Seed questions covering all parts
    attemptsCount: 520,
    avgRating: 5.0,
    createdBy: 'Hội đồng Soạn thảo Đề thi THPT Quốc gia',
    createdAt: '2026-03-18T08:00:00.000Z',
    updatedAt: '2026-03-18T08:00:00.000Z'
  }
];

export const englishQuestions = [
  // --- QUESTIONS FOR QUIZ 1 (Tiểu học Lớp 3) ---
  {
    id: 'q_eng_p1_1',
    quizId: 'quiz_eng_p1',
    orderIndex: 1,
    type: 'listening',
    content: 'Listen to the audio track and choose the correct picture / member mentioned:',
    instructionBadge: '🎧 Câu hỏi Nghe hiểu - Bấm phát âm thanh bên dưới',
    listeningScript: 'Hello, my name is Nam. This is my grandfather. He is seventy years old, and he loves reading books in the garden.',
    points: 1.0,
    options: [
      { id: 'opt_ep1_1a', label: 'A', content: 'Grandfather (Ông nội/ngoại)', isCorrect: true },
      { id: 'opt_ep1_1b', label: 'B', content: 'Grandmother (Bà)', isCorrect: false },
      { id: 'opt_ep1_1c', label: 'C', content: 'Brother (Anh/Em trai)', isCorrect: false },
      { id: 'opt_ep1_1d', label: 'D', content: 'Father (Bố)', isCorrect: false }
    ]
  },
  {
    id: 'q_eng_p1_2',
    quizId: 'quiz_eng_p1',
    orderIndex: 2,
    type: 'sentence_rearrange',
    content: 'Sắp xếp các từ bị xáo trộn dưới đây thành một câu hoàn chỉnh:',
    instructionBadge: '🧩 Sắp xếp từ thành câu - Bấm các từ theo thứ tự đúng',
    scrambledWords: ['This', 'my', 'is', 'school', 'new'],
    correctSentence: 'this is my new school',
    explanation: 'Cấu trúc giới thiệu đồ vật/nơi chốn: This is + tính từ sở hữu + danh từ (This is my new school).',
    points: 1.0,
    options: []
  },
  {
    id: 'q_eng_p1_3',
    quizId: 'quiz_eng_p1',
    orderIndex: 3,
    type: 'single_choice',
    content: 'What is this? Look at the definition: "A piece of plastic or wood used for measuring things or drawing straight lines."',
    instructionBadge: 'Đồ dùng học tập cơ bản',
    points: 1.0,
    options: [
      { id: 'opt_ep1_3a', label: 'A', content: 'A ruler (Cái thước kẻ)', isCorrect: true },
      { id: 'opt_ep1_3b', label: 'B', content: 'An eraser (Cục tẩy)', isCorrect: false },
      { id: 'opt_ep1_3c', label: 'C', content: 'A pencil sharpener (Cái gọt bút chì)', isCorrect: false },
      { id: 'opt_ep1_3d', label: 'D', content: 'A school bag (Cặp sách)', isCorrect: false }
    ]
  },

  // --- QUESTIONS FOR QUIZ 3 (THCS Lớp 6 Global Success) ---
  {
    id: 'q_eng_s1_1',
    quizId: 'quiz_eng_s1',
    orderIndex: 1,
    type: 'phonetics',
    content: 'Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation:',
    instructionBadge: '🔊 Ngữ âm - Tìm từ có phần gạch chân phát âm khác',
    points: 1.0,
    options: [
      { id: 'opt_es1_1a', label: 'A', content: '<u>ch</u>ildren', isCorrect: false },
      { id: 'opt_es1_1b', label: 'B', content: '<u>ch</u>emistry', isCorrect: true },
      { id: 'opt_es1_1c', label: 'C', content: '<u>ch</u>air', isCorrect: false },
      { id: 'opt_es1_1d', label: 'D', content: '<u>ch</u>eck', isCorrect: false }
    ],
    explanation: 'Trong từ "chemistry", phần gạch chân "ch" phát âm là /k/, trong khi các từ còn lại phát âm là /tʃ/.'
  },
  {
    id: 'q_eng_s1_2',
    quizId: 'quiz_eng_s1',
    orderIndex: 2,
    type: 'phonetics',
    content: 'Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation (ending -s):',
    instructionBadge: '🔊 Phát âm đuôi -s/-es',
    points: 1.0,
    options: [
      { id: 'opt_es1_2a', label: 'A', content: 'book<u>s</u>', isCorrect: false },
      { id: 'opt_es1_2b', label: 'B', content: 'cat<u>s</u>', isCorrect: false },
      { id: 'opt_es1_2c', label: 'C', content: 'pen<u>s</u>', isCorrect: true },
      { id: 'opt_es1_2d', label: 'D', content: 'lamp<u>s</u>', isCorrect: false }
    ],
    explanation: '"pens" có đuôi -s phát âm là /z/ vì đi sau âm hữu thanh /n/. Các từ còn lại phát âm là /s/ vì đi sau âm vô thanh /k, t, p/.'
  },
  {
    id: 'q_eng_s1_3',
    quizId: 'quiz_eng_s1',
    orderIndex: 3,
    type: 'single_choice',
    content: 'At our school, students ________ uniforms on Mondays and Wednesdays.',
    instructionBadge: 'Thì Hiện tại đơn (Present Simple)',
    points: 1.0,
    options: [
      { id: 'opt_es1_3a', label: 'A', content: 'wear', isCorrect: true },
      { id: 'opt_es1_3b', label: 'B', content: 'wears', isCorrect: false },
      { id: 'opt_es1_3c', label: 'C', content: 'is wearing', isCorrect: false },
      { id: 'opt_es1_3d', label: 'D', content: 'wore', isCorrect: false }
    ]
  },

  // --- QUESTIONS FOR QUIZ 6 (ĐỀ THI THỬ TỐT NGHIỆP THPT QUỐC GIA 2026 - CẤU TRÚC MỚI) ---
  {
    id: 'q_eng_thpt_1',
    quizId: 'quiz_eng_thpt_qg',
    orderIndex: 1,
    type: 'phonetics',
    content: 'Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation:',
    instructionBadge: 'Phát âm nguyên âm & phụ âm chuẩn đề THPT Quốc gia',
    points: 1.0,
    options: [
      { id: 'opt_eth_1a', label: 'A', content: '<u>th</u>ink', isCorrect: false },
      { id: 'opt_eth_1b', label: 'B', content: '<u>th</u>ank', isCorrect: false },
      { id: 'opt_eth_1c', label: 'C', content: '<u>th</u>at', isCorrect: true },
      { id: 'opt_eth_1d', label: 'D', content: '<u>th</u>in', isCorrect: false }
    ],
    explanation: 'Từ "that" có phần gạch chân phát âm là /ð/, các từ còn lại phát âm là /θ/.'
  },
  {
    id: 'q_eng_thpt_2',
    quizId: 'quiz_eng_thpt_qg',
    orderIndex: 2,
    type: 'phonetics',
    content: 'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress:',
    instructionBadge: 'Trọng âm từ có 2 và 3 âm tiết',
    points: 1.0,
    options: [
      { id: 'opt_eth_2a', label: 'A', content: 'promote', isCorrect: false },
      { id: 'opt_eth_2b', label: 'B', content: 'attract', isCorrect: false },
      { id: 'opt_eth_2c', label: 'C', content: 'follow', isCorrect: true },
      { id: 'opt_eth_2d', label: 'D', content: 'decide', isCorrect: false }
    ],
    explanation: '"follow" có trọng âm rơi vào âm tiết thứ 1. Các từ còn lại có trọng âm rơi vào âm tiết thứ 2.'
  },
  {
    id: 'q_eng_thpt_3',
    quizId: 'quiz_eng_thpt_qg',
    orderIndex: 3,
    type: 'reading_comprehension',
    passageTitle: 'ĐOẠN VĂN ĐỌC HIỂU 1 (READING PASSAGE 1 - AI & FUTURE JOBS)',
    passageText: `Artificial Intelligence (AI) is transforming the landscape of modern employment at an unprecedented pace. From automating mundane clerical tasks to diagnosing intricate medical conditions, algorithms are increasingly capable of performing duties once thought uniquely human.

While some fear that widespread automation will inevitably lead to rampant unemployment, economic historians point out that technological revolutions have historically created more jobs than they destroyed. The industrial revolution, for instance, eliminated artisanal crafts but birthed expansive manufacturing and logistics sectors.

Today, the emerging demand is not for workers who compete with machines, but for those who can collaborate with them. Skills such as critical thinking, creative problem-solving, and emotional intelligence have become invaluable currencies in the labor market. Educational institutions worldwide are consequently redesigning their curricula to equip future generations with interdisciplinary competencies.`,
    content: 'According to paragraph 2, what do economic historians argue regarding technological revolutions?',
    instructionBadge: '📖 Đọc hiểu đoạn văn Split View - Đối chiếu trực tiếp với bài đọc bên trái',
    points: 1.0,
    options: [
      { id: 'opt_eth_3a', label: 'A', content: 'They have historically created more jobs than they eradicated.', isCorrect: true },
      { id: 'opt_eth_3b', label: 'B', content: 'They exclusively harmed low-skilled manufacturing workers.', isCorrect: false },
      { id: 'opt_eth_3c', label: 'C', content: 'They immediately eliminated the need for formal education.', isCorrect: false },
      { id: 'opt_eth_3d', label: 'D', content: 'They caused permanent economic stagnation in modern society.', isCorrect: false }
    ],
    explanation: 'Dẫn chứng trong đoạn 2: "...economic historians point out that technological revolutions have historically created more jobs than they destroyed."'
  },
  {
    id: 'q_eng_thpt_4',
    quizId: 'quiz_eng_thpt_qg',
    orderIndex: 4,
    type: 'reading_comprehension',
    passageTitle: 'ĐOẠN VĂN ĐỌC HIỂU 1 (READING PASSAGE 1 - AI & FUTURE JOBS)',
    passageText: `Artificial Intelligence (AI) is transforming the landscape of modern employment at an unprecedented pace. From automating mundane clerical tasks to diagnosing intricate medical conditions, algorithms are increasingly capable of performing duties once thought uniquely human.

While some fear that widespread automation will inevitably lead to rampant unemployment, economic historians point out that technological revolutions have historically created more jobs than they destroyed. The industrial revolution, for instance, eliminated artisanal crafts but birthed expansive manufacturing and logistics sectors.

Today, the emerging demand is not for workers who compete with machines, but for those who can collaborate with them. Skills such as critical thinking, creative problem-solving, and emotional intelligence have become invaluable currencies in the labor market. Educational institutions worldwide are consequently redesigning their curricula to equip future generations with interdisciplinary competencies.`,
    content: 'The word "unprecedented" in paragraph 1 is closest in meaning to:',
    instructionBadge: '📖 Tìm từ đồng nghĩa trong ngữ cảnh bài đọc',
    points: 1.0,
    options: [
      { id: 'opt_eth_4a', label: 'A', content: 'unmatched / never experienced before', isCorrect: true },
      { id: 'opt_eth_4b', label: 'B', content: 'predictable and steady', isCorrect: false },
      { id: 'opt_eth_4c', label: 'C', content: 'slow and insignificant', isCorrect: false },
      { id: 'opt_eth_4d', label: 'D', content: 'questionable and hazardous', isCorrect: false }
    ],
    explanation: '"unprecedented" có nghĩa là chưa từng có tiền lệ, chưa từng xảy ra trước đây (never experienced before).'
  },
  {
    id: 'q_eng_thpt_5',
    quizId: 'quiz_eng_thpt_qg',
    orderIndex: 5,
    type: 'sentence_rearrange',
    content: 'Arrange the following fragments to create a coherent English sentence from a formal announcement:',
    instructionBadge: 'Sắp xếp câu trật tự logic (Cấu trúc mới Đề thi tốt nghiệp)',
    scrambledWords: ['All', 'students', 'must', 'submit', 'their', 'assignments', 'before', 'Friday'],
    correctSentence: 'all students must submit their assignments before friday',
    explanation: 'Cấu trúc: All students (Chủ ngữ) + must submit (Động từ khuyết thiếu) + their assignments (Tân ngữ) + before Friday (Trạng từ chỉ thời gian).',
    points: 1.0,
    options: []
  }
];

// Vocabulary List for Flashcard Hub
export const englishFlashcards = {
  primary: [
    {
      word: 'Family',
      ipa: '/ˈfæm.əl.i/',
      type: 'noun',
      meaning: 'Gia đình, tổ ấm',
      example: 'My family has five people: my parents, my brother, my sister, and me.',
      exampleVi: 'Gia đình mình có 5 người: bố mẹ, anh trai, em gái và mình.',
      imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&auto=format&fit=crop&q=80'
    },
    {
      word: 'Grandfather',
      ipa: '/ˈɡræn.fɑː.ðər/',
      type: 'noun',
      meaning: 'Ông nội, ông ngoại',
      example: 'My grandfather likes watering flowers in the morning.',
      exampleVi: 'Ông của mình thích tưới hoa vào mỗi buổi sáng.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80'
    },
    {
      word: 'Schoolbag',
      ipa: '/ˈskuːl.bæɡ/',
      type: 'noun',
      meaning: 'Cặp sách, ba lô học sinh',
      example: 'I put my textbooks and pencil case into my schoolbag.',
      exampleVi: 'Mình cất sách giáo khoa và hộp bút vào trong cặp sách.',
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=80'
    },
    {
      word: 'Animal',
      ipa: '/ˈæn.ɪ.məl/',
      type: 'noun',
      meaning: 'Động vật, con vật cưng',
      example: 'Dogs and dolphins are very smart animals.',
      exampleVi: 'Chó và cá heo là những loài động vật rất thông minh.',
      imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&auto=format&fit=crop&q=80'
    }
  ],
  secondary: [
    {
      word: 'Uniform',
      ipa: '/ˈjuː.nɪ.fɔːm/',
      type: 'noun',
      meaning: 'Bộ đồng phục trường học',
      example: 'We wear our school uniform with pride every Monday morning.',
      exampleVi: 'Chúng mình tự hào mặc đồng phục trường vào mỗi sáng thứ Hai.',
      imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&auto=format&fit=crop&q=80'
    },
    {
      word: 'Chemistry',
      ipa: '/ˈkem.ɪ.stri/',
      type: 'noun',
      meaning: 'Môn hóa học (âm ch phát âm là /k/)',
      example: 'We conduct exciting experiments in the chemistry laboratory.',
      exampleVi: 'Chúng mình thực hiện các thí nghiệm thú vị trong phòng thí nghiệm hóa học.',
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&auto=format&fit=crop&q=80'
    },
    {
      word: 'Community',
      ipa: '/kəˈmjuː.nə.ti/',
      type: 'noun',
      meaning: 'Cộng đồng cư dân',
      example: 'Volunteers are helping clean up the local community park.',
      exampleVi: 'Các tình nguyện viên đang giúp dọn dẹp công viên cộng đồng địa phương.',
      imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&auto=format&fit=crop&q=80'
    },
    {
      word: 'Environment',
      ipa: '/ɪnˈvaɪ.rən.mənt/',
      type: 'noun',
      meaning: 'Môi trường sinh thái',
      example: 'Planting more trees is vital for protecting our environment.',
      exampleVi: 'Trồng thêm nhiều cây xanh là điều thiết yếu để bảo vệ môi trường.',
      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop&q=80'
    }
  ],
  highschool: [
    {
      word: 'Unprecedented',
      ipa: '/ʌnˈpres.ɪ.den.tɪd/',
      type: 'adjective',
      meaning: 'Chưa từng có tiền lệ, chưa từng xảy ra',
      example: 'The rapid rise of AI is bringing unprecedented changes to education.',
      exampleVi: 'Sự trỗi dậy nhanh chóng của AI đang mang lại những thay đổi chưa từng có tiền lệ cho giáo dục.',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&auto=format&fit=crop&q=80'
    },
    {
      word: 'Longevity',
      ipa: '/lɒnˈdʒev.ə.ti/',
      type: 'noun',
      meaning: 'Tuổi thọ cao, sự sống lâu',
      example: 'A balanced diet and regular exercise are closely linked to longevity.',
      exampleVi: 'Chế độ ăn cân đối và tập thể dục thường xuyên gắn liền với tuổi thọ cao.',
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&auto=format&fit=crop&q=80'
    },
    {
      word: 'Collaborate',
      ipa: '/kəˈlæb.ə.reɪt/',
      type: 'verb',
      meaning: 'Hợp tác, cộng tác',
      example: 'Students need to collaborate effectively to solve multidisciplinary problems.',
      exampleVi: 'Học sinh cần hợp tác hiệu quả để giải quyết các vấn đề liên ngành.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80'
    },
    {
      word: 'Biodiversity',
      ipa: '/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/',
      type: 'noun',
      meaning: 'Sự đa dạng sinh học',
      example: 'Conserving tropical rainforests is crucial to maintaining global biodiversity.',
      exampleVi: 'Bảo tồn rừng nhiệt đới có ý nghĩa sống còn để duy trì đa dạng sinh học toàn cầu.',
      imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&auto=format&fit=crop&q=80'
    }
  ]
};
