import { extractOptionsUniversal } from './docxParser.js';

/**
 * Smart Quiz Parser for:
 * 1. Single Choice & Multiple Choice (supports inline "A. ... B. ... C. ... D. ..." or multiline)
 * 2. True / False Matrix ("Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:")
 * 3. Drag & Drop Categorization ("Kéo thả các yếu tố liên quan vào các cột tương ứng:")
 * 4. Drag & Drop Matching ("Kéo thả các đáp án đúng khớp / tương ứng với các phát biểu:")
 */

export function parseRawQuizText(rawText) {
  if (!rawText || !rawText.trim()) return [];

  // Normalize line endings
  const normalized = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Split text by "Câu \d+:" or "Câu \d+."
  const questionBlockRegex = /(?:^|\n)(?:Câu|Question|Bài)\s*(\d+)[\s*.:\-_)]+/gi;
  
  const blocks = [];
  let match;
  let lastIndex = 0;
  let lastNum = 0;

  while ((match = questionBlockRegex.exec(normalized)) !== null) {
    if (blocks.length > 0) {
      blocks[blocks.length - 1].rawText = normalized.substring(lastIndex, match.index).trim();
    }
    blocks.push({
      num: parseInt(match[1], 10),
      startIndex: match.index + match[0].length,
      rawText: ''
    });
    lastIndex = match.index + match[0].length;
  }

  if (blocks.length > 0) {
    blocks[blocks.length - 1].rawText = normalized.substring(lastIndex).trim();
  }

  const parsedQuestions = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const text = block.rawText;
    const qNum = block.num || i + 1;

    const parsed = parseSingleQuestionBlock(text, qNum);
    if (parsed) {
      parsedQuestions.push(parsed);
    }
  }

  return parsedQuestions;
}

function parseSingleQuestionBlock(text, qNum) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return null;

  const firstLine = lines[0];

  // 1. Check for Drag & Drop Categorization
  // Example: "Kéo thả các yếu tố liên quan vào các cột tương ứng:"
  if (text.toLowerCase().includes('kéo thả') && (text.toLowerCase().includes('vào các cột tương ứng') || text.toLowerCase().includes('vào cột tương ứng'))) {
    return parseDragDropCategorization(text, qNum);
  }

  // 2. Check for Drag & Drop Matching
  // Example: "Kéo thả các đáp án đúng khớp với các phát biểu dưới đây:" or "tương ứng với các phát biểu"
  if (text.toLowerCase().includes('kéo thả') && (text.toLowerCase().includes('khớp với') || text.toLowerCase().includes('tương ứng với các phát biểu') || text.toLowerCase().includes('dưới đây'))) {
    return parseDragDropMatching(text, qNum);
  }

  // 3. Check for True / False Matrix
  // Example: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:"
  if (text.toLowerCase().includes('đúng hoặc sai') || text.toLowerCase().includes('đúng hay sai') || text.toLowerCase().includes('đúng/sai')) {
    return parseTrueFalseMatrix(text, qNum);
  }

  // 4. Default: Single Choice or Multiple Choice (with inline or multiline A, B, C, D)
  return parseStandardChoiceQuestion(text, qNum);
}

// -------------------------------------------------------------
// PARSER 1: Drag & Drop Categorization
// -------------------------------------------------------------
function parseDragDropCategorization(text, qNum) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const prompt = lines[0] || 'Kéo thả các yếu tố sau đây vào cột tương ứng:';

  // Find table rows with pipe `|`
  const tableRows = lines.filter(l => l.startsWith('|') && l.endsWith('|'));
  let categories = [];
  let dragDropItems = [];

  if (tableRows.length >= 2) {
    // Row 1: Column Headers
    const headerCells = tableRows[0].split('|').map(c => c.trim()).filter(Boolean);
    categories = headerCells;

    // Row 2: Items for each column
    const dataCells = tableRows[1].split('|').map(c => c.trim()).filter(Boolean);

    dataCells.forEach((cellText, colIdx) => {
      const targetCol = categories[colIdx] || `Cột ${colIdx + 1}`;
      // Split items by 2 or more spaces, or tabs, or newlines
      const items = cellText.split(/\s{2,}|\t|\n/).map(s => s.trim()).filter(Boolean);
      items.forEach((itemStr, itemIdx) => {
        dragDropItems.push({
          id: `dd_${qNum}_${colIdx + 1}_${itemIdx + 1}`,
          itemText: itemStr,
          targetCategoryOrMatch: targetCol,
          orderIndex: dragDropItems.length + 1
        });
      });
    });
  }

  // Fallback if no table found
  if (categories.length === 0) {
    categories = ['1) Cột Nhóm 1', '2) Cột Nhóm 2'];
  }

  return {
    id: `q_gen_${qNum}`,
    orderIndex: qNum,
    type: 'drag_drop_categorize',
    content: prompt,
    instructionBadge: '(!) Kéo và thả các thẻ đáp án vào đúng cột tương ứng',
    explanation: 'Phân loại các khái niệm, đặc trưng vào đúng nhóm danh mục.',
    points: 2.0,
    requiredCount: dragDropItems.length,
    categories,
    dragDropItems
  };
}

// -------------------------------------------------------------
// PARSER 2: Drag & Drop Matching
// -------------------------------------------------------------
function parseDragDropMatching(text, qNum) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const prompt = lines[0] || 'Kéo thả các đáp án đúng khớp với các phát biểu dưới đây:';

  const tableRows = lines.filter(l => l.startsWith('|') && l.endsWith('|'));
  const dragDropItems = [];
  const targets = new Set();

  tableRows.forEach((row, idx) => {
    const cells = row.split('|').map(c => c.trim()).filter(Boolean);
    if (cells.length >= 2) {
      const statement = cells[0];
      const matchTarget = cells[1];
      targets.add(matchTarget);
      dragDropItems.push({
        id: `dd_match_${qNum}_${idx + 1}`,
        itemText: statement,
        targetCategoryOrMatch: matchTarget,
        orderIndex: idx + 1
      });
    }
  });

  return {
    id: `q_gen_${qNum}`,
    orderIndex: qNum,
    type: 'drag_drop_matching',
    content: prompt,
    instructionBadge: '(!) Kéo thẻ đáp án khớp với từng phát biểu',
    explanation: 'Ghép nối chính xác các nhận định với khái niệm tương ứng.',
    points: 2.0,
    requiredCount: dragDropItems.length,
    dragDropItems,
    matchingTargets: Array.from(targets)
  };
}

// -------------------------------------------------------------
// PARSER 3: True / False Matrix
// -------------------------------------------------------------
function parseTrueFalseMatrix(text, qNum) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const prompt = lines[0] || 'Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:';

  // Statements can be:
  // "1) Tâm lý dân tộc tạo nên bản sắc văn hóa dân tộc\nĐúng"
  // OR "1) Cương lĩnh dân tộc... không đề cập...Sai"
  const statements = [];
  const remainingText = lines.slice(1).join('\n');

  // Match items starting with 1), 2), 3), 4) or 1., 2., 3., 4.
  const stmtRegex = /(?:^|\n)\s*(\d+)[\)\.]\s*(.*?)(?=(?:\n\s*\d+[\)\.]|$))/gs;
  let match;

  while ((match = stmtRegex.exec(remainingText)) !== null) {
    const sNum = match[1];
    let fullStmtText = match[2].trim();

    let isCorrect = 'dung';
    // Check if ends with "Đúng" or "Sai"
    if (/(?:Đúng|\(Đúng\))\s*$/i.test(fullStmtText)) {
      isCorrect = 'dung';
      fullStmtText = fullStmtText.replace(/(?:Đúng|\(Đúng\))\s*$/i, '').trim();
    } else if (/(?:Sai|\(Sai\))\s*$/i.test(fullStmtText)) {
      isCorrect = 'sai';
      fullStmtText = fullStmtText.replace(/(?:Sai|\(Sai\))\s*$/i, '').trim();
    }

    statements.push({
      id: `tf_${qNum}_${sNum}`,
      text: `${sNum}) ${fullStmtText}`,
      isCorrect
    });
  }

  // Fallback: if regex didn't catch, split line by line
  if (statements.length === 0) {
    for (let i = 1; i < lines.length; i++) {
      let l = lines[i];
      if (/^\d+[\)\.]/.test(l)) {
        let isCorrect = 'dung';
        if (/Đúng\s*$/i.test(l)) {
          isCorrect = 'dung';
          l = l.replace(/Đúng\s*$/i, '').trim();
        } else if (/Sai\s*$/i.test(l)) {
          isCorrect = 'sai';
          l = l.replace(/Sai\s*$/i, '').trim();
        } else if (i + 1 < lines.length && /^(?:Đúng|Sai)$/i.test(lines[i + 1])) {
          isCorrect = lines[i + 1].toLowerCase().includes('đúng') ? 'dung' : 'sai';
          i++;
        }
        statements.push({
          id: `tf_${qNum}_${statements.length + 1}`,
          text: l,
          isCorrect
        });
      }
    }
  }

  return {
    id: `q_gen_${qNum}`,
    orderIndex: qNum,
    type: 'true_false_matrix',
    content: prompt,
    instructionBadge: '(!) Chọn Đúng hoặc Sai cho mỗi phát biểu',
    explanation: 'Phân định tính đúng đắn của từng luận điểm căn cứ vào lý luận.',
    points: 2.0,
    requiredCount: statements.length,
    statements
  };
}

// -------------------------------------------------------------
// PARSER 4: Standard Single Choice & Multiple Choice
// Handles inline "A. ... B. ... C. ... D. ..." or multiline
// -------------------------------------------------------------
function parseStandardChoiceQuestion(text, qNum) {
  // First attempt: use universal option extractor
  const universalRes = extractOptionsUniversal(text);
  if (universalRes && universalRes.options.length >= 2) {
    return {
      id: `q_gen_${qNum}`,
      orderIndex: qNum,
      type: universalRes.type,
      content: universalRes.prompt,
      instructionBadge: universalRes.instructionBadge,
      explanation: 'Đáp án được đối chiếu chuẩn xác theo giáo trình môn học.',
      points: universalRes.type === 'multiple_choice' ? 1.5 : 1.0,
      requiredCount: universalRes.requiredCount,
      options: universalRes.options.map((opt, idx) => ({
        id: `opt_${qNum}_${opt.label.toLowerCase()}`,
        label: opt.label,
        content: opt.content,
        isCorrect: opt.isCorrect,
        orderIndex: idx + 1
      }))
    };
  }

  // Check if multiple choice required count is indicated in prompt
  // e.g. "Sinh viên chọn 2 phương án đúng nhất" or "Chọn 2 phương án đúng nhất"
  const multiMatch = text.match(/(?:chọn|Sinh viên chọn)\s*(\d+)\s*phương án/i);
  let isMultiple = !!multiMatch;
  let requiredCount = multiMatch ? parseInt(multiMatch[1], 10) : 1;

  // Split prompt vs options
  // Find the first option marker: A. or A) or A:
  // Must be A followed by . or ) or :
  const firstOptIdx = text.search(/(?:^|\s|\?|[a-z0-9])([A-D])[.):]\s*/i);

  let prompt = text;
  let optionsText = '';

  if (firstOptIdx !== -1) {
    // Find where "A." actually starts
    const matchA = text.substring(firstOptIdx).match(/([A-D])[.):]\s*/i);
    if (matchA) {
      const realStart = firstOptIdx + matchA.index;
      prompt = text.substring(0, realStart).trim();
      optionsText = text.substring(realStart).trim();
    }
  }

  // Extract all options from optionsText using regex
  // Matches A., B., C., D.
  const optionRegex = /([A-D])[.):]\s*(.*?)(?=(?:[A-D][.):]\s*|$))/gs;
  const options = [];
  let optMatch;

  while ((optMatch = optionRegex.exec(optionsText)) !== null) {
    const label = optMatch[1].toUpperCase();
    const content = optMatch[2].trim();
    options.push({
      id: `opt_${qNum}_${label.toLowerCase()}`,
      label,
      content,
      isCorrect: false, // will mark default or evaluated
      orderIndex: options.length + 1
    });
  }

  // Fallback: if optionsText didn't match, check if lines start with A., B., C., D.
  if (options.length === 0) {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    prompt = lines[0];
    for (let i = 1; i < lines.length; i++) {
      const lMatch = lines[i].match(/^([A-D])[.):]\s*(.*)/i);
      if (lMatch) {
        options.push({
          id: `opt_${qNum}_${lMatch[1].toLowerCase()}`,
          label: lMatch[1].toUpperCase(),
          content: lMatch[2].trim(),
          isCorrect: false,
          orderIndex: options.length + 1
        });
      }
    }
  }

  // Set default correct options
  if (isMultiple) {
    // If requiredCount > 1, mark first requiredCount as true by default
    for (let i = 0; i < Math.min(requiredCount, options.length); i++) {
      options[i].isCorrect = true;
    }
  } else {
    // Single choice: mark first option or option with indicator as correct
    if (options.length > 0) {
      options[0].isCorrect = true;
    }
  }

  return {
    id: `q_gen_${qNum}`,
    orderIndex: qNum,
    type: isMultiple ? 'multiple_choice' : 'single_choice',
    content: prompt,
    instructionBadge: isMultiple ? `(!) Sinh viên chọn ${requiredCount} phương án đúng nhất` : null,
    explanation: 'Đáp án được đối chiếu chuẩn xác theo giáo trình môn học.',
    points: isMultiple ? 1.5 : 1.0,
    requiredCount,
    options
  };
}

