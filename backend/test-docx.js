import JSZip from 'jszip';
import { parseDocxBuffer } from './src/services/docxParser.js';

async function testDocxParser() {
  console.log('--- TESTING DOCX PARSER XML ENGINE ---');
  
  // Construct a realistic OpenXML document.xml buffer
  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <!-- Question 1: Single choice with Red Text Color -->
    <w:p>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>Câu 1: Giai cấp công nhân Việt Nam ra đời trong hoàn cảnh nào?</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:rPr>
          <w:color w:val="FF0000"/>
        </w:rPr>
        <w:t>A. Trước Chiến tranh thế giới lần thứ nhất trong cuộc khai thác thuộc địa lần thứ nhất của Pháp.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>B. Sau Chiến tranh thế giới thứ nhất khi tư bản Pháp đẩy mạnh đầu tư.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>C. Cùng thời điểm với giai cấp tư sản Việt Nam.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>D. Trong thời kỳ đổi mới đất nước năm 1986.</w:t>
      </w:r>
    </w:p>

    <!-- Question 2: Multiple choice with Yellow Highlight -->
    <w:p>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>Câu 2: Nội dung sứ mệnh lịch sử của giai cấp công nhân thể hiện trên những lĩnh vực nào? (Chọn 2 phương án)</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:rPr>
          <w:highlight w:val="yellow"/>
        </w:rPr>
        <w:t>A. Lĩnh vực kinh tế: giải phóng lực lượng sản xuất.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:rPr>
          <w:highlight w:val="yellow"/>
        </w:rPr>
        <w:t>B. Lĩnh vực chính trị - xã hội: lật đổ ách thống trị tư sản.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>C. Lĩnh vực tư hữu cá nhân hóa tuyệt đối.</w:t>
      </w:r>
    </w:p>
  </w:body>
</w:document>`;

  const zip = new JSZip();
  zip.file('word/document.xml', documentXml);
  const buffer = await zip.generateAsync({ type: 'nodebuffer' });

  // Test 1: Detect by color & highlight (red, yellow)
  const res1 = await parseDocxBuffer(buffer, {
    detectByColor: true,
    selectedColors: ['red', 'yellow'],
    detectByHighlight: true,
    detectByBold: false
  });

  console.log('Result 1 total questions:', res1.totalQuestions);
  console.log('Q1 type:', res1.questions[0].type);
  console.log('Q1 options count:', res1.questions[0].options.length);
  const q1Correct = res1.questions[0].options.find(o => o.isCorrect);
  console.log('Q1 correct option label:', q1Correct?.label);

  console.log('Q2 type:', res1.questions[1].type);
  console.log('Q2 required count:', res1.questions[1].requiredCount);
  const q2Corrects = res1.questions[1].options.filter(o => o.isCorrect).map(o => o.label);
  console.log('Q2 correct options labels:', q2Corrects);

  if (q1Correct?.label === 'A' && q2Corrects.includes('A') && q2Corrects.includes('B') && res1.questions[1].type === 'multiple_choice') {
    console.log('>>> DOCX PARSER TEST PASSED PERFECTLY! <<<');
  } else {
    console.error('>>> DOCX PARSER TEST FAILED! <<<');
    process.exit(1);
  }
}

testDocxParser().catch(err => {
  console.error(err);
  process.exit(1);
});
