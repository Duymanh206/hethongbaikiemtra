/**
 * Complete K12 English Curriculum Database (Từ Lớp 1 đến Lớp 12)
 * Bám sát sách giáo khoa Global Success & Bộ Giáo Dục & Đào Tạo
 * Tham chiếu chuẩn cấu trúc từ điển học liệu BestFlashcard
 */

export const englishCurriculumK12 = [
  // ==========================================
  // CẤP 1: TIỂU HỌC (LỚP 1 - LỚP 5)
  // ==========================================
  {
    grade: 'Lớp 1',
    level: 'primary',
    levelName: 'Tiểu học (Cấp 1)',
    textbook: 'Global Success & Family and Friends (Lớp 1)',
    description: 'Làm quen với bảng chữ cái, phát âm ngữ âm cơ bản (Phonics), từ vựng qua hình ảnh màu sắc, số đếm 1-10, đồ vật trong lớp học và gia đình.',
    color: 'emerald',
    units: [
      {
        id: 'g1_u1',
        unitNumber: 1,
        title: 'Unit 1: In the School Playground',
        vietnameseTitle: 'Chủ đề: Sân trường & Làm quen',
        overview: 'Học sinh làm quen với chữ cái B/b (phát âm /b/), chào hỏi bạn bè và thầy cô trong trường.',
        grammarFocus: 'Mẫu câu chào hỏi: Hello / Hi! I am + [Tên]. (Xin chào, mình là...)',
        sentencePatterns: [
          'Hello, Bill! - Hi, Ba!',
          'Goodbye, teacher! (Tạm biệt cô giáo!)'
        ],
        tips: 'Luyện âm /b/ bằng cách mím nhẹ hai môi rồi bật hơi ra rõ ràng.',
        vocabulary: [
          { word: 'Book', ipa: '/bʊk/', type: 'noun', meaning: 'Quyển sách, vở', example: 'Open your book, please.', exampleVi: 'Xin mời các em mở sách ra.', imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
          { word: 'Ball', ipa: '/bɔːl/', type: 'noun', meaning: 'Quả bóng', example: 'I kick the red ball.', exampleVi: 'Mình đá quả bóng màu đỏ.', imageUrl: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=400&auto=format&fit=crop&q=80' },
          { word: 'Bike', ipa: '/baɪk/', type: 'noun', meaning: 'Xe đạp', example: 'He rides a blue bike.', exampleVi: 'Bạn ấy đi một chiếc xe đạp màu xanh.', imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&auto=format&fit=crop&q=80' },
          { word: 'Boy', ipa: '/bɔɪ/', type: 'noun', meaning: 'Cậu bé, bé trai', example: 'The boy is very happy.', exampleVi: 'Cậu bé đang rất vui vẻ.', imageUrl: 'https://images.unsplash.com/photo-1471286174890-9c112ffca56a?w=400&auto=format&fit=crop&q=80' },
          { word: 'Bag', ipa: '/bæɡ/', type: 'noun', meaning: 'Cặp sách, túi xách', example: 'This is my yellow bag.', exampleVi: 'Đây là chiếc cặp màu vàng của mình.', imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=80' },
          { word: 'Hello', ipa: '/həˈləʊ/', type: 'exclamation', meaning: 'Xin chào', example: 'Hello, my name is Nam.', exampleVi: 'Xin chào, tên mình là Nam.', imageUrl: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&auto=format&fit=crop&q=80' }
        ]
      },
      {
        id: 'g1_u2',
        unitNumber: 2,
        title: 'Unit 2: In the Dining Room',
        vietnameseTitle: 'Chủ đề: Phòng ăn & Bữa cơm',
        overview: 'Học sinh làm quen với chữ cái C/c (phát âm /k/), các món ăn quen thuộc trên bàn ăn.',
        grammarFocus: 'Cấu trúc chỉ đồ vật: This is a / an + [Danh từ] (Đây là một...)',
        sentencePatterns: [
          'Pass me the cake, please! (Làm ơn đưa cho mình chiếc bánh!)',
          'I like cake and milk. (Mình thích ăn bánh và uống sữa.)'
        ],
        tips: 'Âm /k/ trong tiếng Anh phát âm từ sâu trong cuống họng, khác với chữ C trong tiếng Việt.',
        vocabulary: [
          { word: 'Cake', ipa: '/keɪk/', type: 'noun', meaning: 'Bánh ngọt, bánh sinh nhật', example: 'A delicious chocolate cake.', exampleVi: 'Một chiếc bánh sô-cô-la thơm ngon.', imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80' },
          { word: 'Cat', ipa: '/kæt/', type: 'noun', meaning: 'Con mèo cưng', example: 'The cute white cat is sleeping.', exampleVi: 'Chú mèo trắng dễ thương đang ngủ.', imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80' },
          { word: 'Cup', ipa: '/kʌp/', type: 'noun', meaning: 'Cái cốc, tách nước', example: 'A cup of warm milk.', exampleVi: 'Một cốc sữa ấm.', imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80' },
          { word: 'Car', ipa: '/kɑːr/', type: 'noun', meaning: 'Xe ô tô đồ chơi', example: 'My brother has a red car.', exampleVi: 'Em trai mình có một chiếc xe ô tô đỏ.', imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&auto=format&fit=crop&q=80' },
          { word: 'Milk', ipa: '/mɪlk/', type: 'noun', meaning: 'Sữa tươi', example: 'I drink milk every day.', exampleVi: 'Mình uống sữa mỗi ngày.', imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80' },
          { word: 'Apple', ipa: '/ˈæp.əl/', type: 'noun', meaning: 'Quả táo đỏ', example: 'An apple a day keeps the doctor away.', exampleVi: 'Ăn một quả táo mỗi ngày giúp bạn khỏe mạnh.', imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  {
    grade: 'Lớp 2',
    level: 'primary',
    levelName: 'Tiểu học (Cấp 1)',
    textbook: 'Global Success & Family and Friends (Lớp 2)',
    description: 'Mở rộng vốn từ về đồ chơi, trang phục, các con vật nuôi, hình khối học và các hoạt động dã ngoại.',
    color: 'emerald',
    units: [
      {
        id: 'g2_u1',
        unitNumber: 1,
        title: 'Unit 1: At the Camp',
        vietnameseTitle: 'Chủ đề: Buổi cắm trại',
        overview: 'Học sinh làm quen với các từ chỉ hoạt động ngoài trời, đồ đạc mang đi dã ngoại và âm /æ/.',
        grammarFocus: 'Hỏi xem ai đó có vật gì: Do you have a + [Vật]? - Yes, I do / No, I do not.',
        sentencePatterns: [
          'Do you have a tent? (Bạn có lều không?) - Yes, I do.',
          'Let us go camping! (Chúng mình cùng đi cắm trại nào!)'
        ],
        tips: 'Hãy tưởng tượng buổi đi picnic cuối tuần để liên kết các từ vựng này với nhau.',
        vocabulary: [
          { word: 'Camp', ipa: '/kæmp/', type: 'noun', meaning: 'Khu cắm trại', example: 'We stay at the summer camp.', exampleVi: 'Chúng mình ở trại hè.', imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&auto=format&fit=crop&q=80' },
          { word: 'Tent', ipa: '/tent/', type: 'noun', meaning: 'Chiếc lều dã ngoại', example: 'A big blue tent.', exampleVi: 'Một chiếc lều to màu xanh.', imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&auto=format&fit=crop&q=80' },
          { word: 'Blanket', ipa: '/ˈblæŋ.kɪt/', type: 'noun', meaning: 'Cái chăn ấm', example: 'Bring a warm blanket.', exampleVi: 'Mang theo một chiếc chăn ấm nhé.', imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&auto=format&fit=crop&q=80' },
          { word: 'Hat', ipa: '/hæt/', type: 'noun', meaning: 'Cái mũ che nắng', example: 'Wear your sun hat.', exampleVi: 'Hãy đội chiếc mũ che nắng của bạn.', imageUrl: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&auto=format&fit=crop&q=80' },
          { word: 'Water', ipa: '/ˈwɔː.tər/', type: 'noun', meaning: 'Nước uống', example: 'Drink fresh water.', exampleVi: 'Hãy uống nước lọc tinh khiết.', imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=400&auto=format&fit=crop&q=80' },
          { word: 'Friend', ipa: '/frend/', type: 'noun', meaning: 'Người bạn', example: 'She is my best friend.', exampleVi: 'Bạn ấy là bạn thân nhất của mình.', imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  {
    grade: 'Lớp 3',
    level: 'primary',
    levelName: 'Tiểu học (Cấp 1)',
    textbook: 'Global Success (Tiếng Anh 3)',
    description: 'Chương trình chính khóa lớp 3: Các thành viên gia đình, bộ phận cơ thể, sở thích cá nhân, đồ dùng học tập và các màu sắc.',
    color: 'emerald',
    units: [
      {
        id: 'g3_u1',
        unitNumber: 1,
        title: 'Unit 1: My Family & Relatives',
        vietnameseTitle: 'Chủ đề: Gia đình thân yêu',
        overview: 'Học cách giới thiệu các thành viên trong gia đình: Bố mẹ, ông bà, anh chị em.',
        grammarFocus: 'Giới thiệu ai đó: This is my + [Thành viên] (This is my mother / father / brother).',
        sentencePatterns: [
          'Who is this? (Đây là ai?) - This is my grandfather.',
          'How old is your brother? (Anh bạn bao nhiêu tuổi?) - He is eight years old.'
        ],
        tips: 'Chú ý cách phát âm âm /ð/ trong mother, father, brother: đặt đầu lưỡi giữa hai hàm răng nhẹ nhàng.',
        vocabulary: [
          { word: 'Family', ipa: '/ˈfæm.əl.i/', type: 'noun', meaning: 'Gia đình, tổ ấm', example: 'I love my family very much.', exampleVi: 'Mình rất yêu thương gia đình của mình.', imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&auto=format&fit=crop&q=80' },
          { word: 'Father', ipa: '/ˈfɑː.ðər/', type: 'noun', meaning: 'Bố, ba, cha', example: 'My father is a doctor.', exampleVi: 'Bố của mình là một bác sĩ.', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80' },
          { word: 'Mother', ipa: '/ˈmʌð.ər/', type: 'noun', meaning: 'Mẹ, má', example: 'My mother cooks very well.', exampleVi: 'Mẹ của mình nấu ăn rất ngon.', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80' },
          { word: 'Brother', ipa: '/ˈbrʌð.ər/', type: 'noun', meaning: 'Anh trai / em trai', example: 'My brother likes playing football.', exampleVi: 'Anh trai mình thích chơi bóng đá.', imageUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=400&auto=format&fit=crop&q=80' },
          { word: 'Sister', ipa: '/ˈsɪs.tər/', type: 'noun', meaning: 'Chị gái / em gái', example: 'My sister has long hair.', exampleVi: 'Chị gái của mình có mái tóc dài.', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80' },
          { word: 'Grandfather', ipa: '/ˈɡræn.fɑː.ðər/', type: 'noun', meaning: 'Ông nội, ông ngoại', example: 'My grandfather likes reading books.', exampleVi: 'Ông của mình thích đọc sách.', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80' }
        ]
      },
      {
        id: 'g3_u2',
        unitNumber: 2,
        title: 'Unit 2: My School Things',
        vietnameseTitle: 'Chủ đề: Đồ dùng học tập',
        overview: 'Nhận biết và gọi tên các dụng cụ học tập quen thuộc trong cặp sách.',
        grammarFocus: 'Hỏi vật ở gần hoặc xa: What is this / that? - It is a / an + [Đồ vật].',
        sentencePatterns: [
          'What is this? - It is a pencil sharpener.',
          'Is that your pen? - Yes, it is / No, it is not.'
        ],
        tips: 'Sử dụng "a" trước phụ âm (a pen, a book) và "an" trước nguyên âm u, e, o, a, i (an eraser).',
        vocabulary: [
          { word: 'Schoolbag', ipa: '/ˈskuːl.bæɡ/', type: 'noun', meaning: 'Cặp sách, ba lô', example: 'I put my notebooks into my schoolbag.', exampleVi: 'Mình xếp vở vào cặp sách.', imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=80' },
          { word: 'Pencil', ipa: '/ˈpen.səl/', type: 'noun', meaning: 'Bút chì gỗ', example: 'I write with a sharp pencil.', exampleVi: 'Mình viết bằng chiếc bút chì đã gọt nhọn.', imageUrl: 'https://images.unsplash.com/photo-1585336261026-41807183995f?w=400&auto=format&fit=crop&q=80' },
          { word: 'Eraser', ipa: '/ɪˈreɪ.zər/', type: 'noun', meaning: 'Cục tẩy, gôm', example: 'Can I borrow your eraser?', exampleVi: 'Mình có thể mượn cục tẩy của bạn không?', imageUrl: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=400&auto=format&fit=crop&q=80' },
          { word: 'Ruler', ipa: '/ˈruː.lər/', type: 'noun', meaning: 'Cây thước kẻ', example: 'Use a ruler to draw a straight line.', exampleVi: 'Dùng thước kẻ để vẽ một đường thẳng.', imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&auto=format&fit=crop&q=80' },
          { word: 'Notebook', ipa: '/ˈnəʊt.bʊk/', type: 'noun', meaning: 'Vở ghi bài', example: 'I have a new English notebook.', exampleVi: 'Mình có một cuốn vở tiếng Anh mới.', imageUrl: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&auto=format&fit=crop&q=80' },
          { word: 'Pencil case', ipa: '/ˈpen.səl keɪs/', type: 'noun', meaning: 'Hộp bút, bóp viết', example: 'My pencil case is very neat.', exampleVi: 'Hộp bút của mình rất ngăn nắp.', imageUrl: 'https://images.unsplash.com/photo-1585336261026-41807183995f?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  {
    grade: 'Lớp 4',
    level: 'primary',
    levelName: 'Tiểu học (Cấp 1)',
    textbook: 'Global Success (Tiếng Anh 4)',
    description: 'Hỏi giờ giấc, thói quen sinh hoạt hằng ngày, các ngày trong tuần và môn học yêu thích.',
    color: 'emerald',
    units: [
      {
        id: 'g4_u1',
        unitNumber: 1,
        title: 'Unit 1: Time and Daily Routines',
        vietnameseTitle: 'Chủ đề: Thời gian & Thói quen hằng ngày',
        overview: 'Hỏi và trả lời về giờ giấc và các mốc sinh hoạt trong ngày (thức dậy, ăn sáng, đi học).',
        grammarFocus: 'Hỏi giờ: What time is it? - It is + [Giờ] o’clock. Hỏi giờ làm gì: What time do you + [Hành động]?',
        sentencePatterns: [
          'What time do you get up? - I get up at 6:00 a.m.',
          'What time do you go to bed? - I go to bed at 10:00 p.m.'
        ],
        tips: 'Dùng giới từ "at" trước các mốc giờ cụ thể (at 7 o’clock, at noon).',
        vocabulary: [
          { word: 'Morning', ipa: '/ˈmɔː.nɪŋ/', type: 'noun', meaning: 'Buổi sáng', example: 'I exercise in the early morning.', exampleVi: 'Mình tập thể dục vào sáng sớm.', imageUrl: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=400&auto=format&fit=crop&q=80' },
          { word: 'Breakfast', ipa: '/ˈbrek.fəst/', type: 'noun', meaning: 'Bữa ăn sáng', example: 'Having breakfast gives you energy.', exampleVi: 'Ăn sáng cung cấp năng lượng cho bạn.', imageUrl: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&auto=format&fit=crop&q=80' },
          { word: 'Afternoon', ipa: '/ˌɑːf.təˈnuːn/', type: 'noun', meaning: 'Buổi chiều', example: 'We play badminton in the afternoon.', exampleVi: 'Chúng mình chơi cầu lông vào buổi chiều.', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80' },
          { word: 'Dinner', ipa: '/ˈdɪn.ər/', type: 'noun', meaning: 'Bữa ăn tối', example: 'My family has dinner together at 7 p.m.', exampleVi: 'Gia đình mình ăn tối cùng nhau lúc 7 giờ tối.', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=80' },
          { word: 'Shower', ipa: '/ˈʃaʊ.ər/', type: 'noun/verb', meaning: 'Tắm vòi sen', example: 'I take a cool shower after sports.', exampleVi: 'Mình tắm vòi sen mát mẻ sau khi chơi thể thao.', imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=80' },
          { word: 'Homework', ipa: '/ˈhəʊm.wɜːk/', type: 'noun', meaning: 'Bài tập về nhà', example: 'I finish my homework before bedtime.', exampleVi: 'Mình làm xong bài tập trước giờ đi ngủ.', imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  {
    grade: 'Lớp 5',
    level: 'primary',
    levelName: 'Tiểu học (Cấp 1)',
    textbook: 'Global Success (Tiếng Anh 5)',
    description: 'Ôn tập tổng kết cấp 1: Kể về các hoạt động đã làm trong quá khứ, nghề nghiệp tương lai, sở thích và lối sống lành mạnh.',
    color: 'emerald',
    units: [
      {
        id: 'g5_u1',
        unitNumber: 1,
        title: 'Unit 4: Healthy Habits & Activities',
        vietnameseTitle: 'Chủ đề: Thói quen lành mạnh & Hoạt động yêu thích',
        overview: 'Học cách sử dụng trạng từ chỉ tần suất (always, usually, often, sometimes, never) để nói về lối sống khỏe mạnh.',
        grammarFocus: 'Hỏi tần suất: How often do you + [Hành động]? - I always / usually / sometimes + [Hành động].',
        sentencePatterns: [
          'How often do you go jogging? - I go jogging twice a week.',
          'You should eat more green vegetables. (Bạn nên ăn nhiều rau xanh hơn.)'
        ],
        tips: 'Thứ tự tần suất giảm dần: Always (100%) -> Usually (80%) -> Often (60%) -> Sometimes (30%) -> Never (0%).',
        vocabulary: [
          { word: 'Healthy', ipa: '/ˈhel.θi/', type: 'adj', meaning: 'Lành mạnh, khỏe mạnh', example: 'Vegetables keep you healthy and strong.', exampleVi: 'Rau xanh giúp bạn luôn khỏe mạnh.', imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&auto=format&fit=crop&q=80' },
          { word: 'Routine', ipa: '/ruːˈtiːn/', type: 'noun', meaning: 'Thói quen, lịch trình đều đặn', example: 'Exercise is part of my morning routine.', exampleVi: 'Tập thể dục là một phần trong thói quen buổi sáng của mình.', imageUrl: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&auto=format&fit=crop&q=80' },
          { word: 'Often', ipa: '/ˈɒf.ən/', type: 'adverb', meaning: 'Thường xuyên', example: 'We often visit the library on Saturdays.', exampleVi: 'Chúng mình thường tới thư viện vào thứ Bảy.', imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&auto=format&fit=crop&q=80' },
          { word: 'Early', ipa: '/ˈɜː.li/', type: 'adj/adverb', meaning: 'Sớm, đúng giờ', example: 'Waking up early helps you have more time.', exampleVi: 'Thức dậy sớm giúp bạn có nhiều thời gian hơn.', imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80' },
          { word: 'Doctor', ipa: '/ˈdɒk.tər/', type: 'noun', meaning: 'Bác sĩ', example: 'The doctor advised him to rest.', exampleVi: 'Bác sĩ khuyên anh ấy nên nghỉ ngơi.', imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80' },
          { word: 'Vegetables', ipa: '/ˈvedʒ.tə.bəlz/', type: 'noun', meaning: 'Rau củ quả', example: 'Fresh vegetables are full of vitamins.', exampleVi: 'Rau củ tươi chứa đầy vitamin bổ dưỡng.', imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  // ==========================================
  // CẤP 2: THCS (LỚP 6 - LỚP 9) - GLOBAL SUCCESS
  // ==========================================
  {
    grade: 'Lớp 6',
    level: 'secondary',
    levelName: 'THCS (Cấp 2)',
    textbook: 'Global Success (Tiếng Anh 6 Mới)',
    description: 'Chương trình THCS mới: Thì Hiện tại đơn & Hiện tại tiếp diễn, phát âm /s/ và /z/, giới từ chỉ vị trí và các chủ đề trường học mới, nhà ở.',
    color: 'blue',
    units: [
      {
        id: 'g6_u1',
        unitNumber: 1,
        title: 'Unit 1: My New School',
        vietnameseTitle: 'Chủ đề: Ngôi trường mới của em',
        overview: 'Học sinh làm quen với môi trường THCS, các môn học mới và phát âm đuôi -s/es.',
        grammarFocus: 'Thì Hiện tại đơn (Present Simple): Khẳng định, Phủ định, Nghi vấn. Trạng từ chỉ tần suất.',
        sentencePatterns: [
          'I study maths and science on Tuesday.',
          'Does she wear a uniform every day? - Yes, she does.'
        ],
        tips: 'Quy tắc phát âm đuôi -s/es: /s/ sau âm vô thanh (p, k, f, t, th); /ɪz/ sau s, x, z, ch, sh, ge; /z/ với các âm còn lại.',
        vocabulary: [
          { word: 'Uniform', ipa: '/ˈjuː.nɪ.fɔːm/', type: 'noun', meaning: 'Bộ đồng phục học sinh', example: 'Students wear white uniforms on Mondays.', exampleVi: 'Học sinh mặc đồng phục trắng vào thứ Hai.', imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&auto=format&fit=crop&q=80' },
          { word: 'Classmate', ipa: '/ˈklɑːs.meɪt/', type: 'noun', meaning: 'Bạn cùng lớp', example: 'My classmates are very friendly and helpful.', exampleVi: 'Các bạn cùng lớp của mình rất thân thiện và hay giúp đỡ.', imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format&fit=crop&q=80' },
          { word: 'Calculator', ipa: '/ˈkæl.kjə.leɪ.tər/', type: 'noun', meaning: 'Máy tính cầm tay', example: 'We use a calculator in maths lessons.', exampleVi: 'Chúng mình dùng máy tính bỏ túi trong giờ toán.', imageUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&auto=format&fit=crop&q=80' },
          { word: 'Compass', ipa: '/ˈkʌm.pəs/', type: 'noun', meaning: 'Com-pa vẽ hình tròn', example: 'Draw a circle with your compass.', exampleVi: 'Hãy vẽ một hình tròn bằng chiếc com-pa.', imageUrl: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=400&auto=format&fit=crop&q=80' },
          { word: 'Excited', ipa: '/ɪkˈsaɪ.tɪd/', type: 'adj', meaning: 'Hào hứng, phấn khởi', example: 'I am so excited about my first day at school.', exampleVi: 'Mình rất hào hứng về ngày đầu tiên đi học.', imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&auto=format&fit=crop&q=80' },
          { word: 'Library', ipa: '/ˈlaɪ.brər.i/', type: 'noun', meaning: 'Thư viện trường học', example: 'Our school has a quiet and spacious library.', exampleVi: 'Trường chúng mình có một thư viện yên tĩnh và rộng rãi.', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  {
    grade: 'Lớp 7',
    level: 'secondary',
    levelName: 'THCS (Cấp 2)',
    textbook: 'Global Success (Tiếng Anh 7 Mới)',
    description: 'Sở thích, lối sống lành mạnh, hoạt động tình nguyện vì cộng đồng, âm nhạc và nghệ thuật.',
    color: 'blue',
    units: [
      {
        id: 'g7_u1',
        unitNumber: 1,
        title: 'Unit 1: Hobbies & Passions',
        vietnameseTitle: 'Chủ đề: Sở thích & Đam mê',
        overview: 'Học cách nói về các sở thích sáng tạo (chụp ảnh, làm gốm, trồng cây) và các động từ chỉ sự yêu thích.',
        grammarFocus: 'Động từ chỉ sự thích + V-ing: like / love / enjoy / adore / prefer + V-ing.',
        sentencePatterns: [
          'What is your favourite hobby? - I enjoy making paper models.',
          'Does she like collecting stamps? - Yes, she has over 200 stamps.'
        ],
        tips: 'Sau like, love, enjoy, hate, động từ luôn thêm đuôi -ing (swimming, reading, cooking).',
        vocabulary: [
          { word: 'Pottery', ipa: '/ˈpɒt.ər.i/', type: 'noun', meaning: 'Đồ gốm, nghề làm gốm', example: 'Making pottery requires patience.', exampleVi: 'Làm gốm đòi hỏi sự kiên nhẫn.', imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&auto=format&fit=crop&q=80' },
          { word: 'Gardening', ipa: '/ˈɡɑː.dən.ɪŋ/', type: 'noun', meaning: 'Làm vườn, chăm sóc cây', example: 'My mother loves gardening on weekends.', exampleVi: 'Mẹ mình thích làm vườn vào cuối tuần.', imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&auto=format&fit=crop&q=80' },
          { word: 'Origami', ipa: '/ˌɒr.ɪˈɡɑː.mi/', type: 'noun', meaning: 'Nghệ thuật gấp giấy Nhật Bản', example: 'He can fold amazing paper birds.', exampleVi: 'Cậu ấy có thể gấp những chú chim giấy tuyệt đẹp.', imageUrl: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&auto=format&fit=crop&q=80' },
          { word: 'Community', ipa: '/kəˈmjuː.nə.ti/', type: 'noun', meaning: 'Cộng đồng dân cư', example: 'We should join hands to serve our community.', exampleVi: 'Chúng ta nên chung tay phục vụ cộng đồng.', imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&auto=format&fit=crop&q=80' },
          { word: 'Volunteer', ipa: '/ˌvɒl.ənˈtɪər/', type: 'noun/verb', meaning: 'Tình nguyện viên, làm tình nguyện', example: 'Many students volunteer at the local shelter.', exampleVi: 'Nhiều học sinh làm tình nguyện tại mái ấm địa phương.', imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&auto=format&fit=crop&q=80' },
          { word: 'Benefit', ipa: '/ˈben.ɪ.fɪt/', type: 'noun', meaning: 'Lợi ích, tác dụng tốt', example: 'Reading brings numerous mental benefits.', exampleVi: 'Đọc sách đem lại vô vàn lợi ích cho trí tuệ.', imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  {
    grade: 'Lớp 8',
    level: 'secondary',
    levelName: 'THCS (Cấp 2)',
    textbook: 'Global Success (Tiếng Anh 8 Mới)',
    description: 'Cuộc sống vùng nông thôn, phong tục tập quán các dân tộc Việt Nam, bảo vệ môi trường và thảm họa thiên nhiên.',
    color: 'blue',
    units: [
      {
        id: 'g8_u1',
        unitNumber: 1,
        title: 'Unit 1: Life in the Countryside',
        vietnameseTitle: 'Chủ đề: Cuộc sống vùng nông thôn',
        overview: 'Học sinh so sánh cuộc sống thành thị và nông thôn, sử dụng câu so sánh hơn của trạng từ.',
        grammarFocus: 'So sánh hơn của trạng từ (Comparative adverbs): S + V + more + adv + than / S + V + adv-er + than.',
        sentencePatterns: [
          'Farmers work harder during the harvest season than usual.',
          'Life in the countryside moves more slowly than in big cities.'
        ],
        tips: 'Các trạng từ có đuôi -ly (peacefully, slowly) dùng "more + adv", trạng từ ngắn (fast, hard, early) thêm đuôi -er.',
        vocabulary: [
          { word: 'Countryside', ipa: '/ˈkʌn.tri.saɪd/', type: 'noun', meaning: 'Vùng nông thôn, đồng quê', example: 'The fresh air in the countryside is rejuvenating.', exampleVi: 'Không khí trong lành ở miền quê giúp hồi phục năng lượng.', imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&auto=format&fit=crop&q=80' },
          { word: 'Paddy field', ipa: '/ˈpæd.i fiːld/', type: 'noun', meaning: 'Cánh đồng lúa chín vàng', example: 'Golden paddy fields stretch to the horizon.', exampleVi: 'Những cánh đồng lúa chín vàng trải dài tít tắp.', imageUrl: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=400&auto=format&fit=crop&q=80' },
          { word: 'Harvest', ipa: '/ˈhɑː.vɪst/', type: 'noun/verb', meaning: 'Vụ mùa thu hoạch, gặt hái', example: 'Farmers are busy during the rice harvest.', exampleVi: 'Người nông dân bận rộn trong vụ thu hoạch lúa.', imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop&q=80' },
          { word: 'Peaceful', ipa: '/ˈpiːs.fəl/', type: 'adj', meaning: 'Yên bình, thanh bình', example: 'A peaceful village nestled by the river.', exampleVi: 'Một ngôi làng yên bình nằm nép mình bên dòng sông.', imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&auto=format&fit=crop&q=80' },
          { word: 'Cattle', ipa: '/ˈkæt.əl/', type: 'noun', meaning: 'Gia súc (trâu bò)', example: 'Children herd cattle on the green meadows.', exampleVi: 'Trẻ em chăn thả gia súc trên những đồng cỏ xanh.', imageUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400&auto=format&fit=crop&q=80' },
          { word: 'Tradition', ipa: '/trəˈdɪʃ.ən/', type: 'noun', meaning: 'Truyền thống văn hóa', example: 'We must preserve our valuable cultural traditions.', exampleVi: 'Chúng ta phải gìn giữ những truyền thống văn hóa quý báu.', imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  {
    grade: 'Lớp 9',
    level: 'secondary',
    levelName: 'THCS (Cấp 2)',
    textbook: 'Global Success (Tiếng Anh 9 Mới - Luyện Thi Vào 10)',
    description: 'Trọng tâm ôn thi vào lớp 10: Mệnh đề quan hệ, câu điều kiện loại 1 & 2, câu gián tiếp, câu ước Wish, phát âm đuôi -ed và trọng âm 2-3 âm tiết.',
    color: 'blue',
    units: [
      {
        id: 'g9_u1',
        unitNumber: 1,
        title: 'Unit 1: Local Community & Craft Villages',
        vietnameseTitle: 'Chủ đề: Làng nghề truyền thống & Cộng đồng',
        overview: 'Học sinh khám phá các làng nghề gốm Bát Tràng, nón Chuông, dệt lụa Vạn Phúc và học cụm động từ (Phrasal Verbs).',
        grammarFocus: 'Cụm động từ phổ biến (Phrasal Verbs): pass down (truyền lại), set up (thành lập), live on (sống nhờ vào), look forward to (mong chờ).',
        sentencePatterns: [
          'This pottery skill has been passed down through generations.',
          'If we visit Bat Trang village, we will try moulding clay ourselves.'
        ],
        tips: 'Học phrasal verb theo ngữ cảnh câu chuyện để không bị nhầm lẫn giới từ đi kèm.',
        vocabulary: [
          { word: 'Craftsman', ipa: '/ˈkrɑːfts.mən/', type: 'noun', meaning: 'Nghệ nhân, thợ thủ công', example: 'Skilled craftsmen create intricate lacquerware.', exampleVi: 'Những nghệ nhân lành nghề tạo nên những món đồ sơn mài tinh xảo.', imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80' },
          { word: 'Authentic', ipa: '/ɔːˈθen.tɪk/', type: 'adj', meaning: 'Đích thực, nguyên bản', example: 'We bought authentic silk from Van Phuc village.', exampleVi: 'Chúng mình đã mua lụa nguyên bản từ làng Vạn Phúc.', imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=80' },
          { word: 'Preserve', ipa: '/prɪˈzɜːv/', type: 'verb', meaning: 'Gìn giữ, bảo tồn', example: 'Young generations should preserve ancient crafts.', exampleVi: 'Thế hệ trẻ nên gìn giữ các nghề thủ công cổ truyền.', imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=400&auto=format&fit=crop&q=80' },
          { word: 'Generation', ipa: '/ˌdʒen.əˈreɪ.ʃən/', type: 'noun', meaning: 'Thế hệ con cháu', example: 'Traditions are passed down from generation to generation.', exampleVi: 'Truyền thống được truyền từ thế hệ này sang thế hệ khác.', imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&auto=format&fit=crop&q=80' },
          { word: 'Attraction', ipa: '/əˈtræk.ʃən/', type: 'noun', meaning: 'Điểm thu hút du khách', example: 'Hoi An Ancient Town is a major tourist attraction.', exampleVi: 'Phố cổ Hội An là một điểm thu hút khách du lịch lớn.', imageUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&auto=format&fit=crop&q=80' },
          { word: 'Memorable', ipa: '/ˈmem.ər.ə.bəl/', type: 'adj', meaning: 'Đáng nhớ, khó quên', example: 'We had a memorable school trip to the museum.', exampleVi: 'Chúng mình đã có một chuyến tham quan bảo tàng thật đáng nhớ.', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  // ==========================================
  // CẤP 3: THPT (LỚP 10 - LỚP 12) & THPT QUỐC GIA
  // ==========================================
  {
    grade: 'Lớp 10',
    level: 'highschool',
    levelName: 'THPT (Cấp 3)',
    textbook: 'Global Success (Tiếng Anh 10 Mới)',
    description: 'Khởi đầu cấp 3: Đời sống gia đình, con người và môi trường, âm nhạc quốc tế, các phát minh công nghệ và bình đẳng giới.',
    color: 'indigo',
    units: [
      {
        id: 'g10_u1',
        unitNumber: 1,
        title: 'Unit 1: Family Life & Responsibilities',
        vietnameseTitle: 'Chủ đề: Đời sống gia đình & Trách nhiệm',
        overview: 'Học sinh bàn luận về việc chia sẻ việc nhà (household chores), trách nhiệm tài chính và gắn kết tình cảm gia đình.',
        grammarFocus: 'Phân biệt Hiện tại đơn (thói quen) và Hiện tại tiếp diễn (hành động đang diễn ra hoặc phàn nàn với always).',
        sentencePatterns: [
          'Sharing household chores makes family bonds stronger.',
          'My father is responsible for mending heavy equipment in the house.'
        ],
        tips: 'Ghi nhớ cụm từ cố định (Collocations): do the laundry, wash the dishes, split chores, heavy lifting, breadwinner.',
        vocabulary: [
          { word: 'Breadwinner', ipa: '/ˈbredˌwɪn.ər/', type: 'noun', meaning: 'Trụ cột kinh tế trong gia đình', example: 'In many households, both parents are breadwinners.', exampleVi: 'Trong nhiều gia đình, cả bố và mẹ đều là trụ cột kinh tế.', imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&auto=format&fit=crop&q=80' },
          { word: 'Homemaker', ipa: '/ˈhəʊmˌmeɪ.kər/', type: 'noun', meaning: 'Người nội trợ gia đình', example: 'Being a homemaker is an honorable full-time job.', exampleVi: 'Làm người nội trợ là một công việc toàn thời gian đáng trân trọng.', imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&auto=format&fit=crop&q=80' },
          { word: 'Chore', ipa: '/tʃɔːr/', type: 'noun', meaning: 'Việc vặt trong nhà', example: 'We take turns doing household chores like sweeping.', exampleVi: 'Chúng mình thay phiên nhau làm các việc nhà như quét dọn.', imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop&q=80' },
          { word: 'Gratitude', ipa: '/ˈɡræt.ɪ.tʃuːd/', type: 'noun', meaning: 'Lòng biết ơn sâu sắc', example: 'Expressing gratitude to your parents is important.', exampleVi: 'Bày tỏ lòng biết ơn tới cha mẹ là điều rất quan trọng.', imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&auto=format&fit=crop&q=80' },
          { word: 'Responsibility', ipa: '/rɪˌspɒn.sɪˈbɪl.ə.ti/', type: 'noun', meaning: 'Trách nhiệm cá nhân', example: 'Children should develop a sense of responsibility early.', exampleVi: 'Trẻ em nên phát triển ý thức trách nhiệm từ sớm.', imageUrl: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=400&auto=format&fit=crop&q=80' },
          { word: 'Bond', ipa: '/bɒnd/', type: 'noun/verb', meaning: 'Mối dây gắn kết, sự kết nối', example: 'Cooking together strengthens family bonds.', exampleVi: 'Cùng nhau nấu ăn giúp thắt chặt sợi dây tình cảm gia đình.', imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  {
    grade: 'Lớp 11',
    level: 'highschool',
    levelName: 'THPT (Cấp 3)',
    textbook: 'Global Success (Tiếng Anh 11 Mới)',
    description: 'Sống thọ và khỏe mạnh, khoảng cách thế hệ (Generation Gap), thành phố thông minh tương lai, bảo tồn di sản văn hóa ASEAN.',
    color: 'indigo',
    units: [
      {
        id: 'g11_u1',
        unitNumber: 1,
        title: 'Unit 1: A Long and Healthy Life',
        vietnameseTitle: 'Chủ đề: Sống thọ & Lối sống lành mạnh',
        overview: 'Học sinh nghiên cứu về chế độ ăn uống khoa học, tuổi thọ, phòng ngừa bệnh tật và các yếu tố giúp kéo dài tuổi xuân.',
        grammarFocus: 'Thì Quá khứ đơn (Past Simple) kết hợp Hiện tại hoàn thành (Present Perfect). Động từ khuyết thiếu: must, have to, should.',
        sentencePatterns: [
          'Scientists have found that regular workout boosts longevity.',
          'You should cut down on fast food to avoid obesity and diabetes.'
        ],
        tips: 'Phân biệt: "Must" thể hiện sự bắt buộc từ chủ quan người nói; "Have to" do luật lệ hoặc ngoại cảnh quy định.',
        vocabulary: [
          { word: 'Longevity', ipa: '/lɒnˈdʒev.ə.ti/', type: 'noun', meaning: 'Sự sống thọ, tuổi thọ cao', example: 'The Mediterranean diet is renowned for promoting longevity.', exampleVi: 'Chế độ ăn Địa Trung Hải nổi tiếng với việc giúp nâng cao tuổi thọ.', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&auto=format&fit=crop&q=80' },
          { word: 'Nutrition', ipa: '/njuːˈtrɪʃ.ən/', type: 'noun', meaning: 'Chất dinh dưỡng, chế độ dinh dưỡng', example: 'Adequate nutrition is essential during adolescence.', exampleVi: 'Dinh dưỡng đầy đủ là điều cần thiết trong giai đoạn thanh thiếu niên.', imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&auto=format&fit=crop&q=80' },
          { word: 'Organism', ipa: '/ˈɔː.ɡən.ɪ.zəm/', type: 'noun', meaning: 'Sinh vật sống, vi sinh vật', example: 'Bacteria are microscopic single-celled organisms.', exampleVi: 'Vi khuẩn là những vi sinh vật đơn bào cực nhỏ.', imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&auto=format&fit=crop&q=80' },
          { word: 'Immune system', ipa: '/ɪˈmjuːn ˌsɪs.təm/', type: 'noun', meaning: 'Hệ miễn dịch kháng bệnh', example: 'Getting enough sleep bolsters your immune system.', exampleVi: 'Ngủ đủ giấc giúp củng cố hệ miễn dịch của bạn.', imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&auto=format&fit=crop&q=80' },
          { word: 'Workout', ipa: '/ˈwɜːk.aʊt/', type: 'noun', meaning: 'Buổi tập luyện thể dục thể thao', example: 'A 30-minute cardio workout keeps your heart healthy.', exampleVi: 'Buổi tập tim mạch 30 phút giúp trái tim bạn luôn khỏe mạnh.', imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80' },
          { word: 'Antibiotic', ipa: '/ˌæn.ti.baɪˈɒt.ɪk/', type: 'noun', meaning: 'Thuốc kháng sinh', example: 'Antibiotics should only be taken under doctor prescription.', exampleVi: 'Kháng sinh chỉ nên được sử dụng theo đơn thuốc của bác sĩ.', imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },

  {
    grade: 'Lớp 12',
    level: 'highschool',
    levelName: 'THPT (Cấp 3)',
    textbook: 'Global Success (Tiếng Anh 12 Mới - Ma Trận Bộ GD&ĐT 2026)',
    description: 'Chinh phục Đề thi Tốt nghiệp THPT Quốc gia chuẩn cấu trúc mới 2026: Trí tuệ nhân tạo (AI), kinh tế xanh, đô thị hóa, bài đọc hiểu dài và sắp xếp hội thoại.',
    color: 'indigo',
    units: [
      {
        id: 'g12_u1',
        unitNumber: 1,
        title: 'Unit 1: Life Stories We Admire',
        vietnameseTitle: 'Chủ đề: Những câu chuyện cuộc đời đáng ngưỡng mộ',
        overview: 'Học sinh phân tích tiểu sử các danh nhân thế giới, những tấm gương vượt khó truyền cảm hứng và các cấu trúc ngữ pháp cao cấp.',
        grammarFocus: 'Mệnh đề phân từ (Participle Clauses): Having + V3/ed hoặc V-ing để rút gọn mệnh đề trạng ngữ chỉ thời gian hoặc lý do.',
        sentencePatterns: [
          'Having overcome severe adversity, he inspired millions across the globe.',
          'Steve Jobs is remembered as an unparalleled innovator whose legacy endures.'
        ],
        tips: 'Rút gọn mệnh đề phân từ chỉ áp dụng khi hai mệnh đề có CÙNG CHỦ NGỮ. Dùng Having + V3 khi hành động xảy ra trước hành động chính.',
        vocabulary: [
          { word: 'Perseverance', ipa: '/ˌpɜː.sɪˈvɪə.rəns/', type: 'noun', meaning: 'Sự kiên trì, bền chí vượt khó', example: 'His success is a testament to unwavering perseverance.', exampleVi: 'Thành công của ông ấy là minh chứng cho sự kiên trì không lay chuyển.', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80' },
          { word: 'Distinguished', ipa: '/dɪˈstɪŋ.ɡwɪʃt/', type: 'adj', meaning: 'Xuất chúng, kiệt xuất, lỗi lạc', example: 'She had a distinguished career in diplomatic service.', exampleVi: 'Bà ấy có một sự nghiệp ngoại giao vô cùng xuất chúng.', imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80' },
          { word: 'Innovation', ipa: '/ˌɪn.əˈveɪ.ʃən/', type: 'noun', meaning: 'Sự đổi mới sáng tạo, đột phá', example: 'Technological innovations drive sustainable economic growth.', exampleVi: 'Các đổi mới sáng tạo công nghệ thúc đẩy tăng trưởng kinh tế bền vững.', imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80' },
          { word: 'Philanthropist', ipa: '/fɪˈlæn.θrə.pɪst/', type: 'noun', meaning: 'Nhà hảo tâm, nhà từ thiện vĩ đại', example: 'The generous philanthropist donated millions to hospitals.', exampleVi: 'Nhà hảo tâm hào hiệp đã quyên góp hàng triệu đô la cho các bệnh viện.', imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&auto=format&fit=crop&q=80' },
          { word: 'Unprecedented', ipa: '/ʌnˈpres.ɪ.den.tɪd/', type: 'adj', meaning: 'Chưa từng có tiền lệ', example: 'The emergence of Generative AI represents an unprecedented shift.', exampleVi: 'Sự xuất hiện của AI tạo sinh đại diện cho một bước ngoặt chưa từng có tiền lệ.', imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&auto=format&fit=crop&q=80' },
          { word: 'Inspirational', ipa: '/ˌɪn.spɪˈreɪ.ʃən.əl/', type: 'adj', meaning: 'Truyền cảm hứng mãnh liệt', example: 'Her keynote speech delivered an inspirational message to youth.', exampleVi: 'Bài phát biểu của cô ấy đã truyền tải thông điệp đầy cảm hứng tới giới trẻ.', imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  }
];
