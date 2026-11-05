import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

async function createSampleDocx() {
  const dir = path.join(process.cwd(), 'sample-files');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:r>
        <w:rPr><w:b/><w:sz w:val="32"/></w:rPr>
        <w:t>ĐỀ THI TRẮC NGHIỆM CHỦ NGHĨA XÃ HỘI KHOA HỌC</w:t>
      </w:r>
    </w:p>
    
    <!-- Câu 1: Single choice với chữ Đỏ -->
    <w:p>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>Câu 1: Sứ mệnh lịch sử của giai cấp công nhân do yếu tố nào quy định?</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:rPr><w:color w:val="FF0000"/><w:b/></w:rPr>
        <w:t>A. Địa vị kinh tế - xã hội và đặc điểm chính trị - xã hội của giai cấp công nhân.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r><w:t>B. Nguyện vọng chủ quan thuần túy của các lãnh tụ cách mạng.</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>C. Sự trợ giúp tài chính từ các nước tư bản phát triển.</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>D. Do hoàn cảnh địa lý tự nhiên của từng quốc gia.</w:t></w:r>
    </w:p>

    <!-- Câu 2: Multiple choice với Highlight Vàng (2 đáp án đúng) -->
    <w:p>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>Câu 2: Hai điều kiện chủ quan để giai cấp công nhân hoàn thành sứ mệnh lịch sử là gì? (Chọn 2 phương án)</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:rPr><w:highlight w:val="yellow"/></w:rPr>
        <w:t>A. Sự trưởng thành của bản thân giai cấp công nhân về số lượng và chất lượng.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:rPr><w:highlight w:val="yellow"/></w:rPr>
        <w:t>B. Sự lãnh đạo của Đảng Cộng sản - Đội tiên phong của giai cấp công nhân.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r><w:t>C. Sự thụ động chờ đợi mâu thuẫn tư bản tự tiêu vong.</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>D. Duy trì nguyên trạng quan hệ bóc lột giá trị thặng dư.</w:t></w:r>
    </w:p>

    <!-- Câu 3: Single choice với In đậm -->
    <w:p>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>Câu 3: Quy luật chung cho sự ra đời của Đảng Cộng sản là kết hợp giữa Chủ nghĩa Mác - Lênin với yếu tố nào?</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>A. Phong trào công nhân.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r><w:t>B. Phong trào tôn giáo.</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>C. Phong trào tiểu tư sản thành thị.</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>D. Phong trào trí thức tư sản.</w:t></w:r>
    </w:p>
  </w:body>
</w:document>`;

  const zip = new JSZip();
  zip.file('word/document.xml', documentXml);
  const buffer = await zip.generateAsync({ type: 'nodebuffer' });
  const outPath = path.join(dir, 'DeThiMau_CNXHKH.docx');
  fs.writeFileSync(outPath, buffer);
  console.log('Sample docx created at:', outPath);
}

createSampleDocx();
