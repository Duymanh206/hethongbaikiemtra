import JSZip from 'jszip';
import { XMLParser } from 'fast-xml-parser';

// Standard Word highlight color names to common hex/types
const HIGHLIGHT_COLOR_MAP = {
  yellow: '#FFFF00',
  green: '#22C55E',
  cyan: '#06B6D4',
  magenta: '#D946EF',
  blue: '#3B82F6',
  red: '#EF4444',
  darkBlue: '#1D4ED8',
  darkCyan: '#0E7490',
  darkGreen: '#15803D',
  darkMagenta: '#A21CAF',
  darkRed: '#B91C1C',
  darkYellow: '#B45309',
  lightGray: '#E5E7EB'
};

// Check if hex or named color matches target color group
function colorMatchesGroup(hexOrName, targetColorGroup, customHex = '') {
  if (!hexOrName) return false;
  const val = String(hexOrName).trim().toLowerCase().replace('#', '');
  
  if (targetColorGroup === 'red') {
    return ['red', 'darkred'].includes(val) || 
      val.startsWith('ff00') || val.startsWith('ed1c') || val.startsWith('c000') || 
      val.startsWith('ef44') || val.startsWith('dc26') || val.startsWith('b91c');
  }
  if (targetColorGroup === 'yellow') {
    return ['yellow', 'darkyellow'].includes(val) || 
      val.startsWith('ffff') || val.startsWith('ffd7') || val.startsWith('fff2') || 
      val.startsWith('eab3') || val.startsWith('ca8a') || val.startsWith('facc');
  }
  if (targetColorGroup === 'green') {
    return ['green', 'darkgreen', 'lightgreen'].includes(val) || 
      val.startsWith('00ff') || val.startsWith('0080') || val.startsWith('22c5') || 
      val.startsWith('16a3') || val.startsWith('1580') || val.startsWith('10b9');
  }
  if (targetColorGroup === 'blue') {
    return ['blue', 'darkblue', 'cyan', 'darkcyan'].includes(val) || 
      val.startsWith('0000ff') || val.startsWith('0070') || val.startsWith('3b82') || 
      val.startsWith('2563') || val.startsWith('1d4e') || val.startsWith('06b6');
  }
  if (targetColorGroup === 'custom' && customHex) {
    const customClean = customHex.toLowerCase().replace('#', '');
    return val === customClean || val.includes(customClean);
  }
  return false;
}

export async function parseDocxBuffer(buffer, config = {}) {
  const {
    detectByColor = false,
    selectedColors = ['red', 'yellow'], // 'red', 'yellow', 'green', 'blue', 'custom'
    customColorHex = '',
    detectByBold = true,
    detectByUnderline = false,
    detectByHighlight = true
  } = config;

  const zip = await JSZip.loadAsync(buffer);
  const docXmlFile = zip.file('word/document.xml');
  if (!docXmlFile) {
    throw new Error('Tệp tải lên không phải là định dạng Word .docx hợp lệ (thiếu word/document.xml)');
  }

  const xmlContent = await docXmlFile.async('text');
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    preserveOrder: false,
    trimValues: false
  });

  const parsedDoc = parser.parse(xmlContent);
  const body = parsedDoc?.['w:document']?.['w:body'];
  if (!body) {
    throw new Error('Cấu trúc nội dung Word trống hoặc không đọc được');
  }

  // Collect paragraphs
  let rawParagraphs = [];
  if (Array.isArray(body['w:p'])) {
    rawParagraphs = body['w:p'];
  } else if (body['w:p']) {
    rawParagraphs = [body['w:p']];
  }

  // Also check if there are tables with paragraphs
  if (body['w:tbl']) {
    const tables = Array.isArray(body['w:tbl']) ? body['w:tbl'] : [body['w:tbl']];
    for (const tbl of tables) {
      const rows = Array.isArray(tbl['w:tr']) ? tbl['w:tr'] : tbl['w:tr'] ? [tbl['w:tr']] : [];
      for (const tr of rows) {
        const cells = Array.isArray(tr['w:tc']) ? tr['w:tc'] : tr['w:tc'] ? [tr['w:tc']] : [];
        for (const tc of cells) {
          if (tc['w:p']) {
            const tcParas = Array.isArray(tc['w:p']) ? tc['w:p'] : [tc['w:p']];
            rawParagraphs.push(...tcParas);
          }
        }
      }
    }
  }

  // Process runs inside each paragraph to retain formatting
  const processedParagraphs = [];
  for (const p of rawParagraphs) {
    let runs = [];
    if (Array.isArray(p['w:r'])) {
      runs = p['w:r'];
    } else if (p['w:r']) {
      runs = [p['w:r']];
    }

    let pFullText = '';
    const runDetails = [];

    for (const r of runs) {
      let t = '';
      if (typeof r['w:t'] === 'string') {
        t = r['w:t'];
      } else if (r['w:t'] && typeof r['w:t']['#text'] === 'string') {
        t = r['w:t']['#text'];
      }

      if (!t) continue;
      pFullText += t;

      const rPr = r['w:rPr'] || {};
      const isBold = rPr['w:b'] !== undefined && rPr['w:b']['@_w:val'] !== 'false' && rPr['w:b']['@_w:val'] !== '0';
      const isUnderline = rPr['w:u'] !== undefined && rPr['w:u']['@_w:val'] !== 'none';
      const colorVal = rPr['w:color'] ? rPr['w:color']['@_w:val'] : null;
      const highlightVal = rPr['w:highlight'] ? rPr['w:highlight']['@_w:val'] : null;
      const shdVal = rPr['w:shd'] ? rPr['w:shd']['@_w:fill'] : null;

      runDetails.push({
        text: t,
        isBold,
        isUnderline,
        colorVal,
        highlightVal,
        shdVal
      });
    }

    const trimmedText = pFullText.trim();
    if (trimmedText) {
      processedParagraphs.push({
        fullText: trimmedText,
        runs: runDetails
      });
    }
  }

  // Regex patterns
  // Matches "Câu 1:", "Câu 1.", "Câu 1 -", "Question 1:", "Bài 1:"
  const questionRegex = /^(?:Câu|Question|Bài)\s*(\d+)[\s*.:\-_)]+(.*)$/i;
  // Matches option lines: "A.", "A)", "A:", "B.", "B)", etc.
  const optionRegex = /^[(\[]?([A-Ha-h])[)\].:\-]\s*(.*)$/;

  const extractedQuestions = [];
  let currentQuestion = null;
  let currentOption = null;

  function evaluateOptionIsCorrect(runs) {
    if (!runs || runs.length === 0) return false;

    for (const r of runs) {
      if (detectByBold && r.isBold) return true;
      if (detectByUnderline && r.isUnderline) return true;
      
      if (detectByHighlight && r.highlightVal) {
        if (!selectedColors || selectedColors.length === 0) return true;
        for (const col of selectedColors) {
          if (colorMatchesGroup(r.highlightVal, col, customColorHex)) return true;
        }
      }

      if (detectByColor && r.colorVal) {
        if (!selectedColors || selectedColors.length === 0) return true;
        for (const col of selectedColors) {
          if (colorMatchesGroup(r.colorVal, col, customColorHex)) return true;
        }
      }

      if (r.shdVal && r.shdVal !== 'auto' && r.shdVal !== 'FFFFFF') {
        if (detectByColor || detectByHighlight) {
          for (const col of selectedColors) {
            if (colorMatchesGroup(r.shdVal, col, customColorHex)) return true;
          }
        }
      }
    }
    return false;
  }

  for (const para of processedParagraphs) {
    const text = para.fullText;
    const qMatch = text.match(questionRegex);

    if (qMatch) {
      // Finalize previous question
      if (currentQuestion) {
        finalizeQuestion(currentQuestion);
        extractedQuestions.push(currentQuestion);
      }

      const qNum = parseInt(qMatch[1], 10);
      const qText = qMatch[2].trim();

      currentQuestion = {
        orderIndex: qNum || extractedQuestions.length + 1,
        content: qText || `Câu hỏi ${qNum}`,
        instructionBadge: null,
        type: 'single_choice',
        points: 1.0,
        options: [],
        explanation: ''
      };
      currentOption = null;
      continue;
    }

    // Check if this paragraph contains options
    const optMatch = text.match(optionRegex);
    if (optMatch && currentQuestion) {
      const label = optMatch[1].toUpperCase();
      const content = optMatch[2].trim();
      const isCorrect = evaluateOptionIsCorrect(para.runs);

      currentOption = {
        id: `opt_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        label,
        content,
        isCorrect,
        orderIndex: currentQuestion.options.length + 1
      };
      currentQuestion.options.push(currentOption);
      continue;
    }

    // If text starts without marker but we are in a question and have no options yet, append to question content
    if (currentQuestion && currentQuestion.options.length === 0 && !optMatch) {
      currentQuestion.content += `\n${text}`;
    } else if (currentOption) {
      // Append additional text to current option
      currentOption.content += ` ${text}`;
      if (evaluateOptionIsCorrect(para.runs)) {
        currentOption.isCorrect = true;
      }
    }
  }

  if (currentQuestion) {
    finalizeQuestion(currentQuestion);
    extractedQuestions.push(currentQuestion);
  }

  function finalizeQuestion(q) {
    const correctOptions = q.options.filter(o => o.isCorrect);
    const correctCount = correctOptions.length;

    if (correctCount > 1) {
      q.type = 'multiple_choice';
      q.requiredCount = correctCount;
      q.instructionBadge = `(!) Chọn ${correctCount} phương án đúng nhất`;
    } else {
      q.type = 'single_choice';
      q.requiredCount = 1;
      q.instructionBadge = null;
      if (correctCount === 0 && q.options.length > 0) {
        // Fallback: if no formatting detected, default first option or keep false
        q.options[0].isCorrect = true;
      }
    }
  }

  return {
    totalQuestions: extractedQuestions.length,
    questions: extractedQuestions
  };
}

