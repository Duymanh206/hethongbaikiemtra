import { parseRawQuizText } from './src/services/smartQuizParser.js';

const userSampleText = `
Câu 1: Trong những nội dung của quyền dân tộc tự quyết, nội dung nào được coi là cơ bản, trước hết?A. Quyền tự quyết về chính trịB. Quyền tự quyết về văn hoáC. Quyền tự quyết về các mối quan hệ quốc tếD. Quyền tự quyết về kinh tế
Câu 11: Tại sao ngày nay khoa học đã phát triển rất mạnh mẽ mà tôn giáo vẫn có xu hướng phát triển? Sinh viên chọn 2 phương án đúng nhấtA. Do nhận thức của con người về tự nhiên, về xã hội và về chính bản thân mình còn có giới hạnB. Do lực lượng siêu nhiên thúc đẩyC. Do xã hội có xu hướng phát triển ngày càng tụt lùiD. Do thế giới mà con người đang sống vẫn còn muôn vàn điều bí ẩn mà khoa học chưa hiểu rõ bản chất của nó
Câu 29: Kéo thả các yếu tố liên quan vào các cột tương ứng:
| Đặc trưng của dân tộc (quốc gia)   | Đặc trưng của dân tộc (tộc người)   |
| Lãnh thổ chung  Ngôn ngữ chung  Tâm lý dân tộc   | Ngôn ngữ tộc người     Văn hóa đặc thù   Ý thức tự giác tộc người   |
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
Câu 39: Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:
1) Cương lĩnh dân tộc của Chủ nghĩa Mác-Lênin không đề cập đến bình đẳng dân tộcSai
2) Dân tộc (tộc người) có ngôn ngữ riêngĐúng 
3) Lãnh thổ chung là đặc trưng của dân tộc quốc giaĐúng
4) Quyền tự quyết dân tộc không bao gồm nội dung liên hiệp các dân tộc lạiSai
`;

const result = parseRawQuizText(userSampleText);

console.log('--- TEST RESULTS ---');
console.log('Total questions parsed:', result.length);
result.forEach(q => {
  console.log(`\n[Câu ${q.orderIndex}] Type: ${q.type}`);
  console.log(' Prompt:', q.content);
  if (q.options) {
    console.log(' Options count:', q.options.length);
    q.options.forEach(o => console.log(`   ${o.label}. ${o.content}`));
  }
  if (q.categories) {
    console.log(' Categories:', q.categories);
    console.log(' Drag items count:', q.dragDropItems.length);
    q.dragDropItems.forEach(d => console.log(`   - "${d.itemText}" -> [${d.targetCategoryOrMatch}]`));
  }
  if (q.matchingTargets) {
    console.log(' Targets:', q.matchingTargets);
    q.dragDropItems.forEach(d => console.log(`   - "${d.itemText}" -> [${d.targetCategoryOrMatch}]`));
  }
  if (q.statements) {
    console.log(' Statements count:', q.statements.length);
    q.statements.forEach(s => console.log(`   ${s.text} => [${s.isCorrect}]`));
  }
});
