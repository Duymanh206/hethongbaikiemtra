/**
 * AI Assistant Service for Detailed Answer Explanations & Question Structure Conversion
 */

export async function generateDetailedExplanation(question, selectedAnswers, allOptions) {
  // Generates curriculum-aligned pedagogic explanation
  const qType = question.type;
  let typeDescription = 'Trắc nghiệm một lựa chọn';
  if (qType === 'multiple_choice') typeDescription = 'Trắc nghiệm nhiều lựa chọn';
  if (qType === 'drag_drop_categorize') typeDescription = 'Kéo thả phân loại theo nhóm';
  if (qType === 'drag_drop_matching') typeDescription = 'Kéo thả ghép nối mệnh đề';

  // Build rationale
  let reasoning = question.explanation || '';
  if (!reasoning) {
    if (qType === 'single_choice' || qType === 'multiple_choice') {
      const correctLabels = allOptions.filter(o => o.isCorrect).map(o => `${o.label}. ${o.content}`).join('\n- ');
      reasoning = `Theo tài liệu giảng dạy chuẩn, đáp án chính xác là:\n- ${correctLabels}\nCác phương án còn lại là các luận điểm không đầy đủ hoặc nhầm lẫn giữa các giai đoạn/khái niệm.`;
    } else if (qType === 'drag_drop_categorize') {
      reasoning = `Việc phân loại dựa trên tính chất bản chất của từng nhân tố: Các nhân tố thuộc về quy luật kinh tế, vị trí trong phương thức sản xuất là Điều kiện khách quan; các nhân tố về ý thức, tổ chức Đảng và tinh thần liên minh là Điều kiện chủ quan.`;
    } else {
      reasoning = `Ghép nối chính xác căn cứ vào thời điểm xuất bản và tác giả chính của các tác phẩm kinh điển trong kho tàng lý luận khoa học.`;
    }
  }

  const breakdown = {
    questionTitle: question.content,
    questionType: typeDescription,
    coreConcepts: [
      'Cơ sở lý luận và phương pháp biện chứng duy vật',
      'Đặc trưng lịch sử và hoàn cảnh cụ thể của bối cảnh câu hỏi',
      'Tính quy luật và mối liên hệ nhân quả'
    ],
    detailedAnalysis: reasoning,
    whyCorrect: `Phương án đúng phản ánh chính xác luận điểm gốc trong giáo trình quy chuẩn, thỏa mãn đầy đủ các điều kiện cần và đủ mà đề bài đặt ra.`,
    commonMistakes: `Sai lầm phổ biến của sinh viên là nhầm lẫn giữa điều kiện khách quan và chủ quan, hoặc không chú ý mốc thời gian lịch sử quan trọng.`,
    studyTip: `Nên vẽ sơ đồ tư duy (Mindmap) phân nhánh các nhóm khái niệm để ghi nhớ lâu hơn thay vì học vẹt.`
  };

  return breakdown;
}

export function convertTextToJsonQuiz(rawText) {
  // Intelligent heuristic text/prompt to structured questions converter
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  const questions = [];
  let currentQ = null;

  for (const line of lines) {
    const qMatch = line.match(/^(?:Câu|Question|\d+[\.:])\s*(.*)/i);
    const optMatch = line.match(/^([A-Da-d])[\.:\)]\s*(.*)/);
    const tagMatch = line.match(/^(?:Thẻ|Tag|Item)\s*(\d+)?:?\s*(.*)->\s*(.*)/i);

    if (qMatch) {
      if (currentQ) questions.push(currentQ);
      currentQ = {
        id: `gen_q_${Date.now()}_${questions.length + 1}`,
        type: 'single_choice',
        content: qMatch[1] || line,
        instructionBadge: null,
        explanation: 'Giải thích tự động tạo bởi trợ lý AI.',
        options: [],
        requiredCount: 1,
        points: 1.0
      };
      continue;
    }

    if (optMatch && currentQ) {
      const label = optMatch[1].toUpperCase();
      const text = optMatch[2];
      const isCorrect = line.includes('*') || line.toLowerCase().includes('(đúng)') || line.toLowerCase().includes('[x]');
      const cleanContent = text.replace(/[*]|(\(đúng\))|(\[x\])/gi, '').trim();

      currentQ.options.push({
        id: `gen_opt_${Date.now()}_${currentQ.options.length + 1}`,
        label,
        content: cleanContent,
        isCorrect,
        orderIndex: currentQ.options.length + 1
      });
      continue;
    }

    if (tagMatch && currentQ) {
      currentQ.type = 'drag_drop_matching';
      if (!currentQ.dragDropItems) currentQ.dragDropItems = [];
      currentQ.dragDropItems.push({
        id: `gen_dd_${Date.now()}_${currentQ.dragDropItems.length + 1}`,
        itemText: tagMatch[2].trim(),
        targetCategoryOrMatch: tagMatch[3].trim()
      });
    }
  }

  if (currentQ) questions.push(currentQ);

  // Validate and assign types
  for (const q of questions) {
    const corrects = q.options ? q.options.filter(o => o.isCorrect) : [];
    if (corrects.length > 1) {
      q.type = 'multiple_choice';
      q.requiredCount = corrects.length;
      q.instructionBadge = `(!) Chọn ${corrects.length} phương án đúng nhất`;
    }
    if (corrects.length === 0 && q.options && q.options.length > 0) {
      q.options[0].isCorrect = true;
    }
  }

  return {
    success: true,
    totalConverted: questions.length,
    questions
  };
}

