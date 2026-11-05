import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseRawQuizText } from './src/services/smartQuizParser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STORE_PATH = path.join(__dirname, 'data', 'store.json');

const user40QuestionsText = `
Câu 1: Trong những nội dung của quyền dân tộc tự quyết, nội dung nào được coi là cơ bản, trước hết?A. Quyền tự quyết về chính trịB. Quyền tự quyết về văn hoáC. Quyền tự quyết về các mối quan hệ quốc tếD. Quyền tự quyết về kinh tế
Câu 2: Quan điểm: Không phân biệt dân tộc lớn hay nhỏ, ở trình độ phát triển cao hay thấp, các dân tộc đều có nghĩa vụ và quyền lợi ngang nhau trên tất cả các lĩnh vực của đời sống xã hội - thuộc nội dung nào trong Cương lĩnh dân tộc của V.I. Lênin?A. Các dân tộc hoàn toàn bình đẳngB. Liên hiệp công nhân tất cả các dân tộcC. Đoàn kết các dân tộcD. Các dân tộc được quyền tự quyết
Câu 3: Thứ tự quá trình phát triển của dân tộc lần lượt trải qua các hình thức nào?A. Bộ lạc, bộ tộc, thị tộc, dân tộcB. Bộ tộc, thị tộc, bộ lạc, dân tộcC. Thị tộc, bộ tộc, bộ lạc, dân tộcD. Thị tộc, bộ lạc, bộ tộc, dân tộc
Câu 4: Theo chủ nghĩa Mác – Lênin, nguyên nhân nào dẫn đến các cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập?A. Do chủ nghĩa tư bản đã phát triển thành chủ nghĩa đế quốcB. Do sự thức tỉnh, sự trưởng thành về ý thức dân tộc, ý thức về quyền sống của mìnhC. Do các cộng đồng dân cư muốn phân chia lại thị trường thế giớiD. Do các cộng đồng dân cư muốn độc lập để có thể đi xâm chiếm các dân tộc khác
Câu 5: Tôn giáo là một phạm trù thuộc:A. Hình thái ý thức xã hộiB. Cơ sở hạ tầngC. Kiến trúc thượng tầngD. Tồn tại xã hội
Câu 6: Tôn giáo là sản phẩm của ai?A. Lực lượng siêu nhiênB. Các thần linhC. Thượng đếD. Con người
Câu 7: Tôn giáo khác với tín ngưỡng khác ở điểm nào?A. Tín ngưỡng tôn giáo ra đời từ rất sớmB. Tín ngưỡng tôn giáo có số lượng tín đồ đôngC. Tín ngưỡng tôn giáo có hệ thống giáo lý, giáo luật, có tổ chức và các nghi lễ chặt chẽD. Tín ngưỡng tôn giáo tồn tại ở tất cả các quốc gia trên thế giới
Câu 8: Niềm tin của con người vào các lực lượng siêu nhiên, thần thánh đến mức độ mê muội, cuồng tín, dẫn đến những hành vi cực đoan, sai lệch quá mức, trái với các giá trị văn hoá, đạo đức, pháp luật – gọi là:A. Mê tín dị đoanB. Thờ cúng tổ tiênC. Tín ngưỡng thờ MẫuD. Thờ anh hùng dân tộc
Câu 9: Theo chủ nghĩa Mác – Lênin, xét đến cùng nhân tố quyết định sự tồn tại và phát triển của các hình thái ý thức xã hội, trong đó có tôn giáo là gì?A. Sản xuất vật chất và các quan hệ kinh tếB. Các cuộc cách mạngC. Các hoạt động chính trị và quan hệ chính trịD. Các hoạt động văn hoá
Câu 10: Sự sợ hãi trước những hiện tượng tự nhiên, xã hội, hay lúc ốm đau, những may rủi, bất ngờ, tâm lý muốn bình yên khi làm việc lớn... khiến con người dễ tìm đến với hình thái ý thức xã hội nào?A. Ý thức tôn giáoB. Ý thức chính trịC. Ý thức thẩm mỹD. Ý thức pháp quyền
Câu 11: Tại sao ngày nay khoa học đã phát triển rất mạnh mẽ mà tôn giáo vẫn có xu hướng phát triển? Sinh viên chọn 2 phương án đúng nhấtA. Do nhận thức của con người về tự nhiên, về xã hội và về chính bản thân mình còn có giới hạnB. Do lực lượng siêu nhiên thúc đẩyC. Do xã hội có xu hướng phát triển ngày càng tụt lùiD. Do thế giới mà con người đang sống vẫn còn muôn vàn điều bí ẩn mà khoa học chưa hiểu rõ bản chất của nó
Câu 12: Ở Việt Nam hiện nay có khoảng bao nhiêu dân tộc?A. 54B. 50C. 63D. 45
Câu 13: Tìm đáp án sai về đặc điểm dân tộc ở Việt NamA. Các dân tộc cư trú tập trung tại các trung tâm lớnB. Các dân tộc ở Việt Nam có trình độ phát triển không đềuC. Các dân tộc thiểu số ở Việt Nam phân bố chủ yếu ở địa bàn có vị trí chiến lược quan trọngD. Có sự chênh lệch về số dân giữa các tộc người
Câu 14: Vận dụng kiến thức về đặc điểm tôn giáo ở Việt Nam, hãy xác định số lượng tôn giáo đã được công nhận và cấp đăng ký hoạt động ở Việt Nam:A. 5B. 43C. 16D. 13
Câu 15: Tại sao các tôn giáo ở Việt Nam luôn đồng hành cùng dân tộc và có nhiều đóng góp quan trọng trong quá trình xây dựng và bảo vệ đất nước?A. Vì các tôn giáo thường bị lợi dụng bởi các thế lực phản độngB. Vì các tôn giáo có vai trò quyết định đến những vấn đề quan trọng của xã hộiC. Vì đa số tín đồ là nhân dân lao động có lòng yêu nước, chống giặc ngoại xâmD. Vì các tôn giáo có quan hệ với các tổ chức nước ngoài
Câu 16: Dân tộc hiểu theo nghĩa hẹp là:A. Bộ lạcB. Quốc gia dân tộcC. Tộc ngườiD. Bộ tộc
Câu 17: Đâu là đặc trưng quan trọng nhất, là cơ sở để liên kết các thành viên của dân tộc tạo thành nền tảng vững chắc của cộng đồng dân tộc?A. Có thể cư trú tập trung trên một vùng lãnh thổ của một quốc gia, hoặc cư trú đan xen với nhiều dân tộc anh emB. Có ngôn ngữ riêng và có thể có chữ viết riêng làm công cụ giao tiếpC. Có nét tâm lý riêng (nét tâm lý dân tộc) biểu hiện kết tinh trong nền văn hoá dân tộc và tạo thành bản sắc văn hoá của dân tộcD. Có chung một phương thức sinh hoạt kinh tế
Câu 18: Theo quan điểm của chủ nghĩa Mác – Lênin, để thực hiện được bình đẳng dân tộc cần phải làm gì? 
Sinh viên chọn 2 phương án đúng nhấtA. Thủ tiêu tình trạng áp bức giai cấp, trên cơ sở đó xoá bỏ tình trạng áp bức dân tộcB. Phải liên kết với các nước đế quốc lớnC. Phải đấu tranh chống chủ nghĩa phân biệt chủng tộc, chủ nghĩa sô vanhD. Phải duy trì chế độ tư hữu về tư liệu sản xuất
Câu 19: Tôn giáo ra đời từ những nguồn gốc cơ bản nào?A. Có nguồn gốc tự nhiên, kinh tế - xã hội, tâm lý, nhận thứcB. Có nguồn gốc do thượng đế tạo raC. Có nguồn gốc do chủ nghĩa tư bản tạo raD. Có nguồn gốc do lực lượng siêu nhiên tạo ra
Câu 20: Vận dụng kiến thức về vấn đề dân tộc, hãy chỉ ra điểm khác biệt cơ bản trong quá trình hình thành nên dân tộc Việt Nam so với các dân tộc khác là gì?A. Do dân tộc Việt Nam có diện tích nhỏB. Do quá trình đồng hóa của các bộ tộc phong kiếnC. Do yêu cầu đoàn kết của quá trình đấu tranh chống thiên tai và xâm lượcD. Do sự phát triển tiến bộ của các bộ lạc
Câu 21: Hiểu theo nghĩa rộng, dân tộc là:A. Tộc ngườiB. Thị tộcC. Bộ tộcD. Quốc gia
Câu 22: Đâu là sự giống nhau giữa tôn giáo và tín ngưỡng?A. Đều có hệ thống kinh điểnB. Đều có giáo chủC. Đều có các giáo sĩD. Đều có niềm tin vào đấng siêu nhiên
Câu 23: Về phương diện thế giới quan, tôn giáo mang bản chất:A. Thế giới quan siêu hìnhB. Thế giới quan duy tâmC. Thế giới quan biện chứngD. Thế giới quan duy vật
Câu 24: Luận điểm nổi tiếng: “Tôn giáo là tiếng thở dài của chúng sinh bị áp bức, là trái tim của thế giới không có trái tim…Tôn giáo là thuốc phiện của nhân dân” là của ai?A. V.I. LêninB. Hồ Chí MinhC. C. MácD. Ph. Ăngghen
Câu 25: Vì sao Đảng, Nhà nước Việt Nam chủ trương luôn tôn trọng, bảo đảm quyền tự do tín ngưỡng tôn giáo và không tín ngưỡng tôn giáo của nhân dân?A. Vì tín ngưỡng, tôn giáo có số lượng tín đồ đôngB. Vì tín ngưỡng, tôn giáo là nhu cầu tinh thần của nhân dânC. Vì tín ngưỡng tôn giáo được du nhập từ nước ngoài vàoD. Vì lực lượng chức sắc trong các tôn giáo có tiềm lực kinh tế lớn mạnh
Câu 26: Nội dung nào vừa là nội dung chủ yếu vừa là giải pháp quan trọng để liên kết các nội dung của Cương lĩnh dân tộc thành một chỉnh thể?A. Các dân tộc được quyền tự quyếtB. Các dân tộc hoàn toàn bình đẳngC. Liên hiệp công nhân tất cả các dân tộcD. Các dân tộc có nền phát triển kinh tế ngang nhau
Câu 27: Đối với quốc gia và từng thành viên của dân tộc, yếu tố nào là thiêng liêng nhất mà nếu không có thì không có khái niệm tổ quốc, quốc gia:A. Lãnh thổB. Ngôn ngữC. Kinh tếD. Truyền thống văn hoá
Câu 28: Tìm đáp án sai về nguồn gốc hình thành của tôn giáo:A. Nguồn gốc nhân tạoB. Nguồn gốc nhận thứcC. Nguồn gốc kinh tế - xã hộiD. Nguồn gốc tâm lý
Câu 29: Kéo thả các yếu tố liên quan vào các cột tương ứng:
| Đặc trưng của dân tộc (quốc gia)   | Đặc trưng của dân tộc (tộc người)   |
| Lãnh thổ chung  Ngôn ngữ chung  Tâm lý dân tộc   | Ngôn ngữ tộc người     Văn hóa đặc thù   Ý thức tự giác tộc người   |
Câu 30: Kéo thả các yếu tố liên quan đến tôn giáo vào các cột tương ứng:
| Yếu tố liên quan đến tôn giáo   | Nguồn gốc của tôn giáo   |
| Cơ sở thờ tự  Hệ thống tín đồ  Niềm tin   | Tâm lý  Kinh tế  Nhận thức   |
Câu 31: Kéo thả các đáp án đúng tương ứng với các phát biểu về dân tộc dưới đây:
| Khái niệm dân tộc theo nghĩa hẹp được gọi là gì?   | Dân tộc tộc người   |
| Đặc trưng quan trọng nhất của dân tộc là gì?   | Phương thức sinh hoạt kinh tế chung   |
| Nội dung cơ bản của cương lĩnh dân tộc Mác-Lênin là gì?   | Bình đẳng dân tộc   |
| Yếu tố thiêng liêng đối với dân tộc (quốc gia) và từng thành viên dân tộc là gì?   | Lãnh thổ   |
Câu 32: Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:
1) Tâm lý dân tộc tạo nên bản sắc văn hóa dân tộc
Đúng
2) Dân tộc (tộc người) có ý thức tự giác tộc người
Đúng
3) Đấu tranh chống chủ nghĩa Sô - vanh là giải pháp thực hiện bình đẳng dân tộc
Đúng
4) Tôn giáo là đặc trưng chính của dân tộc quốc gia
Sai
Câu 33: Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:
1) Tôn giáo phản ánh chân thực hiện thực khách quan
Sai
2) Tín ngưỡng là niềm tin vào lực lượng siêu nhiên
Đúng
3) Khoa học chưa giải thích hết được các hiện tượng là lý do tôn giáo phát triển
Đúng
4) Nguồn gốc nhận thức của tôn giáo là sự hạn chế hiểu biết của con người
Đúng
Câu 34: Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:
1) Tôn giáo phản ánh hoang đường, hư ảo hiện thực khách quan
Đúng
2) Tín ngưỡng có hệ thống giáo lý chặt chẽ
Sai
3) Nguồn gốc kinh tế - xã hội dẫn đến sự ra đời của tôn giáo
Đúng
4) Mê tín dị đoan là niềm tin mù quáng cần loại bỏ
Đúng
Câu 35: Kéo thả các yếu tố liên quan vào các cột tương ứng:
| Đặc trưng của dân tộc   | Nội dung cương lĩnh dân tộc của Mác-Lênin   |
| Tâm lý dân tộc riêng  Lãnh thổ chung  Ngôn ngữ riêng  Bản sắc văn hóa dân tộc   | Các dân tộc hoàn toàn bình đẳng  Các dân tộc được quyền tự quyết  Liên hiệp công nhân tất cả các dân tộc   |
Câu 36: Kéo thả các đáp án đúng tương ứng với các phát biểu về nội dung Cương lĩnh dân tộc của Chủ nghĩa Mác – Lênin:
| Thực hiện quyền tự quyết dân tộc phải đứng vững trên lập trường của giai cấp nào?   | Giai cấp công nhân   |
| Yếu tố thúc đẩy bình đẳng dân tộc là gì?   | Cơ sở pháp lý   |
| Giải pháp quan trọng để liên kết các nội dung của Cương lĩnh dân tộc thành một chỉnh thể   | Liên hiệp công nhân các dân tộc lại   |
| Đây là quyền thiêng liêng của các dân tộc, không phân biệt dân tộc lớn hay nhỏ   | Quyền bình đẳng dân tộc   |
Câu 37: Hãy chỉ ra đâu là nguồn gốc tồn tại của Tôn giáo?Sinh viên chọn 2 phương án đúng nhấtA. Do các lực lượng siêu nhiên thúc đẩyB. Do vẫn tồn tại đối kháng giai cấpC. Do qui định của nhà nướcD. Do khoa học chưa giải thích hết được các hiện tượng tự nhiên và xã hội
Câu 38: Kéo thả các đáp án đúng khớp với các phát biểu dưới đây:
| Là sự phản ánh một cách hoang đường, hư ảo hiện thực khách quan   | Tôn giáo   |
| Mê tín dị đoan dẫn con người đến điều gì?   | Mê muội   |
| Là niềm tin và sự ngưỡng mộ của con người vào một lực lượng siêu nhiên, thần bí   | Tín ngưỡng   |
| Là sự phản ánh niềm tin mù quáng của một số người vào các lực lượng siêu nhiên   | Mê tín dị đoan   |
Câu 39: Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:
1) Cương lĩnh dân tộc của Chủ nghĩa Mác-Lênin không đề cập đến bình đẳng dân tộcSai
2) Dân tộc (tộc người) có ngôn ngữ riêngĐúng 
3) Lãnh thổ chung là đặc trưng của dân tộc quốc giaĐúng
4) Quyền tự quyết dân tộc không bao gồm nội dung liên hiệp các dân tộc lạiSai
Câu 40: Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:
1) Dân tộc là cộng đồng người có ngôn ngữ riêng và văn hóa đặc thùĐúng
2) Bình đẳng dân tộc là nội dung cương lĩnh dân tộc của Mác-LêninĐúng
3) Quyền tự quyết dân tộc bao gồm quyền phân lập thành quốc gia độc lậpĐúng
4) Dân tộc (quốc gia) không cần lãnh thổ chungSai 
`;

const parsedQuestions = parseRawQuizText(user40QuestionsText);
console.log(`Parsed ${parsedQuestions.length} questions from user text!`);

const quizId = 'quiz_cnxhkh_05';

// Build DB data structures
const questions = [];
const question_options = [];
const drag_drop_items = [];

parsedQuestions.forEach((q, idx) => {
  const qId = `q_u40_${idx + 1}`;
  questions.push({
    id: qId,
    quizId,
    orderIndex: idx + 1,
    type: q.type,
    content: q.content,
    instructionBadge: q.instructionBadge || null,
    explanation: q.explanation || 'Đáp án theo giáo trình Chủ nghĩa xã hội khoa học chuẩn.',
    points: q.points || 1.0,
    requiredCount: q.requiredCount || 1,
    categories: q.categories || [],
    statements: q.statements || []
  });

  if (q.options && q.options.length > 0) {
    q.options.forEach((opt, optIdx) => {
      question_options.push({
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
      drag_drop_items.push({
        id: `dd_${qId}_${ddIdx + 1}`,
        questionId: qId,
        itemText: dd.itemText,
        targetCategoryOrMatch: dd.targetCategoryOrMatch,
        orderIndex: ddIdx + 1
      });
    });
  }
});

const storeData = {
  users: [
    {
      id: 'user_1',
      username: 'dtc245200060',
      fullName: 'Hoàng Duy Mạnh',
      studentId: 'dtc245200060',
      email: 'dtc245200060@student.edu.vn',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'student',
      createdAt: '2026-03-01T08:00:00.000Z'
    }
  ],
  quizzes: [
    {
      id: quizId,
      title: 'BÀI KIỂM TRA 15 PHÚT - TUẦN 1',
      description: 'Môn: Chủ nghĩa xã hội khoa học. Bài thi gồm 40 câu trắc nghiệm chuẩn hóa bao gồm Single Choice, Multiple Choice, Đúng/Sai từng phát biểu và Kéo thả phân loại / ghép nối.',
      category: 'Chủ nghĩa xã hội khoa học',
      originalDocxName: 'DeThi_CNXHKH_40Cau_ChinhThuc.docx',
      durationMinutes: 15,
      passingScore: 5.0,
      shuffleQuestions: false,
      shuffleOptions: false,
      antiCheatEnabled: true,
      maxViolations: 3,
      totalQuestions: questions.length,
      attemptsCount: 245,
      avgRating: 5.0,
      createdBy: 'Bộ môn Triết học & CNXHKH',
      createdAt: '2026-03-10T10:00:00.000Z',
      updatedAt: '2026-03-12T14:20:00.000Z'
    }
  ],
  questions,
  question_options,
  drag_drop_items,
  exam_attempts: [],
  attempt_answers: [],
  battle_rooms: [],
  reviews: []
};

fs.writeFileSync(STORE_PATH, JSON.stringify(storeData, null, 2), 'utf-8');
console.log('Successfully written complete 40-question quiz into store.json!');
