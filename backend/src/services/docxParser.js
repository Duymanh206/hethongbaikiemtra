import JSZip from 'jszip';

// Standard Word highlight / text color / shading matcher
export function colorMatchesGroup(hexOrName, targetColorGroup, customHex = '') {
  if (!hexOrName) return false;
  const val = String(hexOrName).trim().toLowerCase().replace('#', '');
  if (['auto', 'none', '000000', 'ffffff', 'transparent'].includes(val)) return false;
  
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

// Clean raw option content from trailing / leading answer markers
export function cleanOptionContentAndDetectCorrect(rawText, runs = [], checkRunIsCorrect = () => false, optLabel = '') {
  let content = rawText.trim();
  let isCorrect = false;
  let hasExplicitMarker = false;

  // 1. Leading asterisk or checkmark: *A. or *Option
  if (/^(\*|✓|✔|☑)\s*/.test(content)) {
    isCorrect = true;
    hasExplicitMarker = true;
    content = content.replace(/^(\*|✓|✔|☑)\s*/, '').trim();
  }

  // 2. Trailing Đúng / Sai, True / False, (Đúng), [Đúng], (Sai), [Sai]
  const tfTrailingMatch = content.match(/\s*([(\[]?\s*(Đúng|Sai|True|False|Đ|S)\s*[)\]]?)\s*$/i);
  if (tfTrailingMatch) {
    hasExplicitMarker = true;
    const markerVal = tfTrailingMatch[2].toLowerCase();
    if (markerVal === 'đúng' || markerVal === 'true' || markerVal === 'đ') {
      isCorrect = true;
    }
    content = content.substring(0, content.length - tfTrailingMatch[0].length).trim();
  }

  // 3. Trailing * or [x] or (x) or checkmark
  if (/\s*(\*|\[x\]|\(x\)|\(X\)|\[X\]|✓|✔|☑)\s*$/i.test(content)) {
    isCorrect = true;
    hasExplicitMarker = true;
    content = content.replace(/\s*(\*|\[x\]|\(x\)|\(X\)|\[X\]|✓|✔|☑)\s*$/i, '').trim();
  }

  // 4. Clean leading stray label or punctuation: "A." or "1." or "- "
  content = content.replace(/^[\s.:\-\/]+/, '').replace(/^[A-Fa-f1-9][.):\/\-\s]+/, '').trim();

  // 5. If no explicit text marker, check run formatting (color, highlight, bold, underline, shading)
  if (!hasExplicitMarker && runs.length > 0) {
    isCorrect = runs.some(r => {
      if (!checkRunIsCorrect(r)) return false;
      const rt = r.text.trim();
      if (!rt) return false;
      if (optLabel && (rt.startsWith(optLabel + '.') || rt.startsWith(optLabel + ')') || rt === optLabel)) return true;
      return (content.includes(rt) || rt.includes(content)) && rt.length >= 2;
    });
  }

  return { content, isCorrect, hasExplicitMarker };
}

// Universal Option Extractor from inline or multiline text
export function extractOptionsUniversal(text, runs = [], checkRunIsCorrect = () => false, startFrom = 'A') {
  if (!text || typeof text !== 'string') return null;

  // Style sets to try in order of specificity
  const styles = [
    // 1. Delimited with dot: A. B. C. D. (allows glued to preceding word/punct like hết?A. or trịB.)
    {
      name: 'dot_delimited_letter',
      type: 'lettered',
      labels: startFrom === 'C' ? ['C', 'D', 'E', 'F'] : ['A', 'B', 'C', 'D'],
      getRegex: (l) => new RegExp('(?:^|[\\s\\?:;,.!_\\-]|[a-zà-ỹA-Z0-9])(' + l + '\\.)\\s*', 'i')
    },
    // 2. Delimited with paren: A) B) C) D)
    {
      name: 'paren_delimited_letter',
      type: 'lettered',
      labels: startFrom === 'C' ? ['C', 'D', 'E', 'F'] : ['A', 'B', 'C', 'D'],
      getRegex: (l) => new RegExp('(?:^|[\\s\\?:;,.!_\\-]|[a-zà-ỹA-Z0-9])(' + l + '\\))\\s*', 'i')
    },
    // 3. Enclosed in parentheses: (A), (B), (C), (D)
    {
      name: 'paren_enclosed_letter',
      type: 'lettered',
      labels: startFrom === 'C' ? ['C', 'D', 'E', 'F'] : ['A', 'B', 'C', 'D'],
      getRegex: (l) => new RegExp('(?:^|[\\s\\?:;,.!_\\-]|[a-zà-ỹA-Z0-9])(\\(' + l + '\\))\\s*', 'i')
    },
    // 4. Enclosed in brackets: [A], [B], [C], [D]
    {
      name: 'bracket_enclosed_letter',
      type: 'lettered',
      labels: startFrom === 'C' ? ['C', 'D', 'E', 'F'] : ['A', 'B', 'C', 'D'],
      getRegex: (l) => new RegExp('(?:^|[\\s\\?:;,.!_\\-]|[a-zà-ỹA-Z0-9])(\\[[' + l + ']\\])\\s*', 'i')
    },
    // 5. Delimited with colon / dash / slash: A: / A- / A/
    {
      name: 'other_delimited_letter',
      type: 'lettered',
      labels: startFrom === 'C' ? ['C', 'D', 'E', 'F'] : ['A', 'B', 'C', 'D'],
      getRegex: (l) => new RegExp('(?:^|[\\s\\?:;,.!_\\-]|[a-zà-ỹA-Z0-9])(' + l + '[:\\/\\-])\\s*', 'i')
    },
    // 6. Numbered with dot: 1. 2. 3. 4.
    {
      name: 'dot_numbered',
      type: 'numbered',
      labels: startFrom === '3' ? ['3', '4', '5', '6'] : ['1', '2', '3', '4'],
      getRegex: (l) => new RegExp('(?:^|[\\s\\?:;,.!_\\-]|[a-zà-ỹA-Z0-9])(' + l + '\\.)\\s*', 'i')
    },
    // 7. Numbered with paren/bracket/other: 1) / (1) / [1] / 1:
    {
      name: 'other_numbered',
      type: 'numbered',
      labels: startFrom === '3' ? ['3', '4', '5', '6'] : ['1', '2', '3', '4'],
      getRegex: (l) => new RegExp('(?:^|[\\s\\?:;,.!_\\-]|[a-zà-ỹA-Z0-9])(?:(\\(' + l + '\\))|(\\[[' + l + ']\\])|(' + l + '[\\):\\/\\-]))\\s*', 'i')
    },
    // 8. Bare letter: A <space> B <space> C <space> D <space> (must be uppercase A-D, strictly preceded by whitespace/punct)
    {
      name: 'bare_letter',
      type: 'lettered',
      labels: startFrom === 'C' ? ['C', 'D', 'E', 'F'] : ['A', 'B', 'C', 'D'],
      getRegex: (l) => new RegExp('(?:^|[\\s\\?:;,.!_\\-])(' + l + ')(?=\\s+)', '')
    }
  ];

  for (const style of styles) {
    const matches = [];
    let searchPos = 0;
    let failed = false;

    for (let i = 0; i < style.labels.length; i++) {
      const l = style.labels[i];
      const sub = text.substring(searchPos);
      const m = sub.match(style.getRegex(l));
      if (!m) {
        if (i >= 2) break; // Found at least 2 options (e.g. A and B, or 1 and 2)
        failed = true;
        break;
      }

      // Group 1 is the exact marker string
      const marker = m[1] || m[2] || m[3] || m[0].trim();
      const markerPos = searchPos + m.index + m[0].indexOf(marker);
      const afterMarker = text.substring(markerPos + marker.length).match(/^\s*/);
      const contentStart = markerPos + marker.length + (afterMarker ? afterMarker[0].length : 0);

      matches.push({
        label: l,
        originalLabel: l,
        marker,
        start: markerPos,
        contentStart
      });
      searchPos = contentStart;
    }

    if (!failed && matches.length >= 2) {
      const prompt = text.substring(0, matches[0].start).trim();
      const options = [];

      for (let i = 0; i < matches.length; i++) {
        const start = matches[i].contentStart;
        const end = (i < matches.length - 1) ? matches[i + 1].start : text.length;
        const rawContent = text.substring(start, end).trim();

        // Calculate mapped letter (1 -> A, 2 -> B, etc.)
        let optLabel = matches[i].label;
        if (style.type === 'numbered') {
          const numVal = parseInt(matches[i].label, 10);
          optLabel = String.fromCharCode(64 + numVal);
        }

        const cleaned = cleanOptionContentAndDetectCorrect(rawContent, runs, checkRunIsCorrect, optLabel);

        options.push({
          label: optLabel,
          originalLabel: matches[i].label,
          content: cleaned.content,
          isCorrect: cleaned.isCorrect,
          hasExplicitMarker: cleaned.hasExplicitMarker
        });
      }

      const correctCount = options.filter(o => o.isCorrect).length;
      let qType = 'single_choice';
      let requiredCount = 1;
      let instructionBadge = null;

      if (correctCount > 1) {
        qType = 'multiple_choice';
        requiredCount = correctCount;
        instructionBadge = `(!) Chọn ${correctCount} phương án đúng`;
      } else if (correctCount === 1) {
        qType = 'single_choice';
        requiredCount = 1;
      } else {
        const multiMatch = prompt.match(/(?:chọn|Sinh viên chọn)\s*(\d+)\s*phương án/i);
        if (multiMatch) {
          requiredCount = parseInt(multiMatch[1], 10);
          qType = 'multiple_choice';
          instructionBadge = `(!) Chọn ${requiredCount} phương án đúng`;
          for (let i = 0; i < Math.min(requiredCount, options.length); i++) {
            options[i].isCorrect = true;
          }
        } else {
          options[0].isCorrect = true;
        }
      }

      return {
        prompt,
        type: qType,
        requiredCount,
        instructionBadge,
        options,
        matchedStyle: style.name
      };
    }
  }

  return null;
}

export async function parseDocxBuffer(buffer, config = {}) {
  const {
    detectByColor = true,
    selectedColors = ['red', 'yellow', 'green', 'blue'],
    customColorHex = '',
    detectByBold = true,
    detectByUnderline = true,
    detectByHighlight = true
  } = config;

  const zip = await JSZip.loadAsync(buffer);
  const docXmlFile = zip.file('word/document.xml');
  if (!docXmlFile) {
    throw new Error('Tệp tải lên không phải là định dạng Word .docx hợp lệ (thiếu word/document.xml)');
  }

  const xmlContent = await docXmlFile.async('text');

  function checkRunIsCorrect(r) {
    if (/^(?:Câu|Question|Bài|CÂU|QUESTION|BÀI)\s*\d*[:.-]/i.test(r.text.trim())) return false;

    if (detectByBold && r.isBold) return true;
    if (detectByUnderline && r.isUnderline) return true;
    
    if (detectByColor && r.color) {
      if (!selectedColors || selectedColors.length === 0) return true;
      for (const c of selectedColors) {
        if (colorMatchesGroup(r.color, c, customColorHex)) return true;
      }
    }
    if (detectByHighlight && r.highlight) {
      if (!selectedColors || selectedColors.length === 0) return true;
      for (const c of selectedColors) {
        if (colorMatchesGroup(r.highlight, c, customColorHex)) return true;
      }
    }
    if (detectByHighlight && r.shading) {
      if (!selectedColors || selectedColors.length === 0) return true;
      for (const c of selectedColors) {
        if (colorMatchesGroup(r.shading, c, customColorHex)) return true;
      }
    }
    return false;
  }

  const bodyStart = xmlContent.indexOf('<w:body>');
  const bodyEnd = xmlContent.lastIndexOf('</w:body>');
  const bodyXml = bodyStart !== -1 ? xmlContent.substring(bodyStart + 8, bodyEnd) : xmlContent;

  const elements = [];
  let pos = 0;
  while (pos < bodyXml.length) {
    const nextP = bodyXml.indexOf('<w:p', pos);
    const nextTbl = bodyXml.indexOf('<w:tbl', pos);

    if (nextP === -1 && nextTbl === -1) break;

    if (nextTbl !== -1 && (nextP === -1 || nextTbl < nextP)) {
      const closeTbl = bodyXml.indexOf('</w:tbl>', nextTbl);
      if (closeTbl === -1) break;
      elements.push({ type: 'table', xml: bodyXml.substring(nextTbl, closeTbl + 8) });
      pos = closeTbl + 8;
    } else {
      const closeP = bodyXml.indexOf('</w:p>', nextP);
      if (closeP === -1) break;
      elements.push({ type: 'paragraph', xml: bodyXml.substring(nextP, closeP + 6) });
      pos = closeP + 6;
    }
  }

  function parseParagraph(pXml) {
    const rRegex = /<w:r(?: [^>]*)?>([\s\S]*?)<\/w:r>/g;
    let rm;
    const runs = [];
    let fullText = '';
    while ((rm = rRegex.exec(pXml)) !== null) {
      const rContent = rm[1];
      const tMatch = rContent.match(/<w:t(?: [^>]*)?>([^<]*)<\/w:t>/);
      const text = tMatch ? tMatch[1] : '';
      if (!text) continue;
      fullText += text;
      const isBold = /<w:b(?:\/| [^>]*\/>)/.test(rContent);
      const isUnderline = /<w:u(?:\/| [^>]*\/>)/.test(rContent);
      const colorMatch = rContent.match(/<w:color [^>]*w:val="([^"]+)"/);
      const highlightMatch = rContent.match(/<w:highlight [^>]*w:val="([^"]+)"/);
      const shdMatch = rContent.match(/<w:shd [^>]*w:fill="([^"]+)"/);
      runs.push({
        text,
        isBold,
        isUnderline,
        color: colorMatch ? colorMatch[1] : null,
        highlight: highlightMatch ? highlightMatch[1] : null,
        shading: shdMatch ? shdMatch[1] : null
      });
    }
    return { fullText: fullText.trim(), runs };
  }

  function parseTable(tblXml) {
    const rows = tblXml.split(/<w:tr(?: [^>]*)?>/).slice(1);
    return rows.map(r => {
      const cells = r.split(/<w:tc(?: [^>]*)?>/).slice(1);
      return cells.map(c => {
        const paras = c.split(/<w:p(?: [^>]*)?>/).slice(1);
        const paraObjects = paras.map(p => parseParagraph(p)).filter(p => p.fullText.length > 0);
        return {
          text: paraObjects.map(p => p.fullText).join('\n'),
          paragraphs: paraObjects
        };
      });
    });
  }

  // Question regex: Matches "Câu 1:", "Câu:", "Câu 1.", "Câu1:", "Bài 1:", "Question 1:"
  const qStartRegex = /^(?:Câu|Question|Bài|CÂU|QUESTION|BÀI)\s*\d*[:.-]\s*(.*)$/i;
  const qBracketRegex = /^\[(?:Câu|Question|Bài)\s*\d*\][:.-]?\s*(.*)$/i;
  // Answer key regex: "Đáp án: B", "Đ/A: 2", "Key: C", "Answer: B"
  const answerKeyRegex = /^(?:Đáp\s*án|Đ\/A|Key|Answer|Phương\s*án\s*đúng)[\s.:\-]+([A-Ha-h1-9,\s]+)/i;
  // Section header for end-of-file answer keys: "BẢNG ĐÁP ÁN", "ĐÁP ÁN TRẮC NGHIỆM"
  const docAnswerKeyHeaderRegex = /^(?:BẢNG\s*ĐÁP\s*ÁN|ĐÁP\s*ÁN\s*CHI\s*TIẾT|ĐÁP\s*ÁN\s*CÁC\s*CÂU|ANSWER\s*KEY)/i;

  const questions = [];
  let currentQ = null;
  let qCounter = 0;
  let inAnswerKeySection = false;
  const globalAnswerKeys = {};

  for (const el of elements) {
    if (el.type === 'paragraph') {
      const { fullText, runs } = parseParagraph(el.xml);
      if (!fullText) continue;

      // Check if we hit the end-of-document Answer Key table / section
      if (docAnswerKeyHeaderRegex.test(fullText)) {
        inAnswerKeySection = true;
        continue;
      }

      // If we are in the answer key section, parse all question keys: "1. A   2. B   3. C..." or "1-A, 2-B"
      if (inAnswerKeySection) {
        const keyPairs = fullText.matchAll(/(\d+)[\s.:\-_]*([A-Ha-h1-9])/g);
        for (const kp of keyPairs) {
          const qNum = parseInt(kp[1], 10);
          const rawKey = kp[2].toUpperCase();
          globalAnswerKeys[qNum] = rawKey;
        }
        continue;
      }

      // Check if this paragraph is a question start
      const qMatch = fullText.match(qStartRegex) || fullText.match(qBracketRegex);
      if (qMatch) {
        qCounter++;
        currentQ = {
          orderIndex: qCounter,
          rawHeader: fullText,
          content: qMatch[1].trim(),
          runs: [...runs],
          type: 'single_choice',
          instructionBadge: null,
          points: 1.0,
          requiredCount: 1,
          options: [],
          categories: [],
          statements: [],
          dragDropItems: [],
          matchingTargets: []
        };
        questions.push(currentQ);

        // Check if inline options are right inside this question paragraph (Universal Extractor)
        const inlineRes = extractOptionsUniversal(currentQ.content, runs, checkRunIsCorrect);
        if (inlineRes) {
          currentQ.content = inlineRes.prompt;
          currentQ.type = inlineRes.type;
          currentQ.requiredCount = inlineRes.requiredCount;
          currentQ.instructionBadge = inlineRes.instructionBadge;
          inlineRes.options.forEach((opt, idx) => {
            currentQ.options.push({
              id: `opt_${Date.now()}_${qCounter}_${opt.label.toLowerCase()}`,
              label: opt.label,
              originalLabel: opt.originalLabel,
              content: opt.content,
              isCorrect: opt.isCorrect,
              orderIndex: idx + 1
            });
          });
        }
        continue;
      }

      // If we are inside a question
      if (currentQ) {
        currentQ.runs.push(...runs);

        // Check if question is True/False Matrix
        const isTFQuestion = currentQ.type === 'true_false_matrix' || 
          currentQ.content.toLowerCase().includes('đúng hoặc sai') || 
          currentQ.content.toLowerCase().includes('đúng hay sai') ||
          currentQ.content.toLowerCase().includes('đúng/sai') ||
          (currentQ.content.toLowerCase().includes('phát biểu') && currentQ.content.toLowerCase().includes('đúng'));

        if (isTFQuestion) {
          currentQ.type = 'true_false_matrix';
          currentQ.instructionBadge = '(!) Chọn Đúng hoặc Sai cho mỗi phát biểu';

          // 1. If line is just "Đúng" or "Sai"
          if (/^(Đúng|Sai)$/i.test(fullText.trim())) {
            if (currentQ.statements.length > 0) {
              const lastStmt = currentQ.statements[currentQ.statements.length - 1];
              if (!lastStmt.correctAnswer) {
                lastStmt.correctAnswer = fullText.trim().charAt(0).toUpperCase() + fullText.trim().slice(1).toLowerCase();
              }
            }
            continue;
          }

          // 2. If line is statement with answer: "1) Phát biểu... Đúng"
          const tfInlineMatch = fullText.match(/^(\d+[\).:-]\s*)([\s\S]+?)\s*(Đúng|Sai)$/i);
          if (tfInlineMatch) {
            currentQ.statements.push({
              id: `stmt_${qCounter}_${currentQ.statements.length + 1}`,
              indexNumber: currentQ.statements.length + 1,
              text: `${tfInlineMatch[1]}${tfInlineMatch[2]}`.trim(),
              correctAnswer: tfInlineMatch[3].charAt(0).toUpperCase() + tfInlineMatch[3].slice(1).toLowerCase()
            });
            continue;
          }

          // 3. If line is statement prompt: "1) Phát biểu..."
          const stmtOnlyMatch = fullText.match(/^(\d+[\).:-]\s*)([\s\S]+)$/);
          if (stmtOnlyMatch) {
            currentQ.statements.push({
              id: `stmt_${qCounter}_${currentQ.statements.length + 1}`,
              indexNumber: currentQ.statements.length + 1,
              text: fullText.trim(),
              correctAnswer: '' // will be filled by next paragraph
            });
            continue;
          }
        }

        // Check Answer Key line: "Đáp án: B"
        const ansMatch = fullText.match(answerKeyRegex);
        if (ansMatch) {
          const rawKeys = ansMatch[1].toUpperCase().split(/[,\s]+/).filter(Boolean);
          currentQ.options.forEach(o => {
            if (rawKeys.includes(o.label) || rawKeys.includes(o.originalLabel)) {
              o.isCorrect = true;
            }
          });
          continue;
        }

        // Check if this paragraph contains CONTINUATION options (e.g. Line 1 had A & B, Line 2 has C & D)
        if (currentQ.options.length === 2 && currentQ.statements.length === 0) {
          const contRes = extractOptionsUniversal(fullText, runs, checkRunIsCorrect, 'C');
          if (contRes && contRes.options.length >= 2) {
            contRes.options.forEach((opt, idx) => {
              currentQ.options.push({
                id: `opt_${Date.now()}_${qCounter}_${opt.label.toLowerCase()}`,
                label: opt.label,
                originalLabel: opt.originalLabel,
                content: opt.content,
                isCorrect: opt.isCorrect,
                orderIndex: currentQ.options.length + 1
              });
            });
            continue;
          }
        }

        // Check if this paragraph contains full inline options (if options haven't been parsed yet)
        if (currentQ.options.length === 0 && currentQ.statements.length === 0) {
          const inlineRes = extractOptionsUniversal(fullText, runs, checkRunIsCorrect, 'A');
          if (inlineRes) {
            if (inlineRes.prompt) {
              currentQ.content += (currentQ.content ? '\n' : '') + inlineRes.prompt;
            }
            currentQ.type = inlineRes.type;
            currentQ.requiredCount = inlineRes.requiredCount;
            currentQ.instructionBadge = inlineRes.instructionBadge;
            inlineRes.options.forEach((opt, idx) => {
              currentQ.options.push({
                id: `opt_${Date.now()}_${qCounter}_${opt.label.toLowerCase()}`,
                label: opt.label,
                originalLabel: opt.originalLabel,
                content: opt.content,
                isCorrect: opt.isCorrect,
                orderIndex: idx + 1
              });
            });
            continue;
          }
        }

        // Check if this paragraph is a SINGLE option line:
        // Examples: "A. ...", "B. ...", "1. ...", "(A) ...", "A receivers: ..."
        const singleOptMatch = fullText.match(/^[(\[]?([A-Ha-h1-9])[)\].:\-\/]?\s+(.*)$/);
        if (singleOptMatch) {
          const rawMarker = singleOptMatch[1];
          const rawRest = singleOptMatch[2].trim();

          let label = rawMarker.toUpperCase();
          if (/^[1-9]$/.test(rawMarker)) {
            const numVal = parseInt(rawMarker, 10);
            label = String.fromCharCode(64 + numVal);
          }

          const cleaned = cleanOptionContentAndDetectCorrect(rawRest, runs, checkRunIsCorrect, label);

          currentQ.options.push({
            id: `opt_${Date.now()}_${qCounter}_${label.toLowerCase()}`,
            label,
            originalLabel: rawMarker,
            content: cleaned.content,
            isCorrect: cleaned.isCorrect,
            orderIndex: currentQ.options.length + 1
          });
          continue;
        }

        // Check if instruction paragraph: "Sinh viên chọn 2 phương án đúng nhất"
        const multiMatch = fullText.match(/(?:chọn|Sinh viên chọn)\s*(\d+)\s*phương án/i);
        if (multiMatch) {
          currentQ.type = 'multiple_choice';
          currentQ.requiredCount = parseInt(multiMatch[1], 10);
          currentQ.instructionBadge = `(!) Sinh viên chọn ${currentQ.requiredCount} phương án đúng nhất`;
        }

        // Otherwise append text to question content if options haven't started
        if (currentQ.options.length === 0 && currentQ.statements.length === 0) {
          currentQ.content += (currentQ.content ? '\n' : '') + fullText;
        }
      }
    } else if (el.type === 'table') {
      const tableData = parseTable(el.xml);
      if (tableData.length === 0) continue;

      // Check if this table is an end-of-document Answer Key table: e.g. rows with "Câu 1 | A", "Câu 2 | B"
      if (inAnswerKeySection || tableData[0].some(c => /^(?:Câu|Question|Bài|Số TT)/i.test(c.text.trim()) && /^(?:Đáp án|Đ\/A|Key)/i.test(c.text.trim()))) {
        tableData.forEach(row => {
          row.forEach(cell => {
            const m = cell.text.match(/(\d+)[\s.:\-_]*([A-Ha-h1-9])/);
            if (m) {
              globalAnswerKeys[parseInt(m[1], 10)] = m[2].toUpperCase();
            }
          });
        });
        continue;
      }

      if (currentQ) {
        const row1 = tableData[0];
        const isTwoColumnTable = row1.length === 2;

        // Categorization (Row 1 headers, Row 2 items)
        if (tableData.length === 2 && isTwoColumnTable) {
          currentQ.type = 'drag_drop_categorize';
          currentQ.instructionBadge = '(!) Kéo và thả các thẻ đáp án vào đúng cột tương ứng';
          const col1Title = row1[0].text.trim();
          const col2Title = row1[1].text.trim();
          currentQ.categories = [col1Title, col2Title];

          const row2 = tableData[1];
          const cell1Paras = row2[0].paragraphs;
          const cell2Paras = row2[1].paragraphs;

          cell1Paras.forEach((p, idx) => {
            if (p.fullText.trim()) {
              currentQ.dragDropItems.push({
                id: `dd_${qCounter}_1_${idx + 1}`,
                itemText: p.fullText.trim(),
                targetCategoryOrMatch: col1Title,
                orderIndex: currentQ.dragDropItems.length + 1
              });
            }
          });

          cell2Paras.forEach((p, idx) => {
            if (p.fullText.trim()) {
              currentQ.dragDropItems.push({
                id: `dd_${qCounter}_2_${idx + 1}`,
                itemText: p.fullText.trim(),
                targetCategoryOrMatch: col2Title,
                orderIndex: currentQ.dragDropItems.length + 1
              });
            }
          });
          currentQ.requiredCount = currentQ.dragDropItems.length;
        } 
        // Matching (each row is statement -> match target)
        else if (tableData.length >= 2 && isTwoColumnTable) {
          currentQ.type = 'drag_drop_matching';
          currentQ.instructionBadge = '(!) Kéo và thả các đáp án đúng vào ô tương ứng';
          tableData.forEach((row, rIdx) => {
            if (row.length >= 2) {
              const statement = row[0].text.trim();
              const target = row[1].text.trim();
              if (statement && target) {
                currentQ.dragDropItems.push({
                  id: `dd_${qCounter}_${rIdx + 1}`,
                  itemText: statement,
                  targetCategoryOrMatch: target,
                  orderIndex: rIdx + 1
                });
              }
            }
          });
          currentQ.matchingTargets = [...new Set(currentQ.dragDropItems.map(d => d.targetCategoryOrMatch))];
          currentQ.requiredCount = currentQ.dragDropItems.length;
        }
        // Options in Table (e.g. 2x2 grid or 4 rows of options)
        else if (currentQ.options.length === 0) {
          const cells = tableData.flat();
          if (cells.length >= 2 && cells.length <= 6) {
            cells.forEach((cell, cIdx) => {
              const cText = cell.text.trim();
              if (cText) {
                const optMatch = cText.match(/^[(\[]?([A-Ha-h1-9])[)\].:\-\/]?\s*(.*)$/);
                const label = optMatch ? optMatch[1].toUpperCase() : String.fromCharCode(65 + cIdx);
                const content = optMatch ? optMatch[2] : cText;
                const cleaned = cleanOptionContentAndDetectCorrect(content, cell.paragraphs.flatMap(p => p.runs), checkRunIsCorrect, label);
                currentQ.options.push({
                  id: `opt_${Date.now()}_${qCounter}_${label.toLowerCase()}`,
                  label,
                  originalLabel: optMatch ? optMatch[1] : label,
                  content: cleaned.content,
                  isCorrect: cleaned.isCorrect,
                  orderIndex: currentQ.options.length + 1
                });
              }
            });
          }
        }
      }
    }
  }

  // Apply any global answer keys found at end of document
  if (Object.keys(globalAnswerKeys).length > 0) {
    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const key = globalAnswerKeys[qNum] || globalAnswerKeys[q.orderIndex];
      if (key && q.options && q.options.length > 0) {
        q.options.forEach(o => {
          if (o.label === key || o.originalLabel === key) {
            o.isCorrect = true;
          }
        });
      }
    });
  }

  // Post-process each question
  questions.forEach(q => {
    // If options were parsed from separate lines or inline
    if (q.options.length > 0) {
      const correctOpts = q.options.filter(o => o.isCorrect);
      if (correctOpts.length > 1) {
        q.type = 'multiple_choice';
        q.requiredCount = correctOpts.length;
        if (!q.instructionBadge) {
          q.instructionBadge = `(!) Chọn ${correctOpts.length} phương án đúng`;
        }
      } else if (correctOpts.length === 1) {
        q.type = 'single_choice';
        q.requiredCount = 1;
      } else {
        // Fallback: check content for instruction
        const multiMatch = q.content.match(/(?:chọn|Sinh viên chọn)\s*(\d+)\s*phương án/i);
        if (multiMatch) {
          const count = parseInt(multiMatch[1], 10);
          q.type = 'multiple_choice';
          q.requiredCount = count;
          q.instructionBadge = `(!) Chọn ${count} phương án đúng`;
          for (let i = 0; i < Math.min(count, q.options.length); i++) {
            q.options[i].isCorrect = true;
          }
        } else {
          q.type = 'single_choice';
          q.requiredCount = 1;
          q.options[0].isCorrect = true;
        }
      }
    }

    if (q.type === 'true_false_matrix') {
      q.requiredCount = q.statements.length;
      q.statements.forEach(s => {
        if (!s.correctAnswer) s.correctAnswer = 'Đúng';
      });
    }

    q.content = q.content.replace(/\s*Sinh viên chọn \d+ phương án đúng nhất\s*$/i, '').trim();
    q.content = q.content.replace(/<\/?p>/gi, '').trim();
    delete q.runs;
  });

  return { totalQuestions: questions.length, questions };
}
