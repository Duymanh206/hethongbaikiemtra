import JSZip from 'jszip';

// Standard Word highlight / text color matcher
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
    detectByColor = true,
    selectedColors = ['red', 'yellow'],
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
    // If run is question header "Câu ...", ignore highlight/color on it
    if (/^Câu\s*\d*[:.-]/i.test(r.text.trim())) return false;

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
    return false;
  }

  // Extract body XML
  const bodyStart = xmlContent.indexOf('<w:body>');
  const bodyEnd = xmlContent.lastIndexOf('</w:body>');
  const bodyXml = bodyStart !== -1 ? xmlContent.substring(bodyStart + 8, bodyEnd) : xmlContent;

  // Scan sequential top-level body elements: <w:p>...</w:p> and <w:tbl>...</w:tbl>
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

  // Parse a paragraph's XML into runs and text
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
      runs.push({
        text,
        isBold,
        isUnderline,
        color: colorMatch ? colorMatch[1] : null,
        highlight: highlightMatch ? highlightMatch[1] : null
      });
    }
    return { fullText: fullText.trim(), runs };
  }

  // Parse a table's XML into rows and cells
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

  // Parse sequential options: A, B, C, D even when glued to words (e.g. "nhấtA.", "NamA.")
  function parseSequentialOptions(text, runs = []) {
    const labels = ['A', 'B', 'C', 'D'];
    const positions = [];
    let searchPos = 0;
    for (let i = 0; i < labels.length; i++) {
      const l = labels[i];
      const regex = new RegExp('(?:^|[\\s\\?:;,.!_\\-]|[a-zà-ỹ0-9])(' + l + ')[.):]\\s*', 'i');
      const sub = text.substring(searchPos);
      const m = sub.match(regex);
      if (!m) break;
      const actualLetterPos = searchPos + m.index + m[0].toUpperCase().indexOf(l);
      const afterMarker = text.substring(actualLetterPos).match(/^[A-D][.):]\s*/i);
      const contentStart = actualLetterPos + (afterMarker ? afterMarker[0].length : 2);
      positions.push({ label: l, start: actualLetterPos, contentStart });
      searchPos = contentStart;
    }

    if (positions.length < 2) return null;

    const prompt = text.substring(0, positions[0].start).trim();
    const options = [];
    for (let i = 0; i < positions.length; i++) {
      const start = positions[i].contentStart;
      const end = (i < positions.length - 1) ? positions[i + 1].start : text.length;
      let optContent = text.substring(start, end).trim();
      // Clean up leading punctuation or stray letters
      optContent = optContent.replace(/^[\s.:\-]+/, '').replace(/^[A-D][.):\s]+/, '').trim();
      const label = positions[i].label;

      // Check if correct from styled runs
      const isCorrect = runs.some(r => {
        if (!checkRunIsCorrect(r)) return false;
        const rt = r.text.trim();
        if (rt.startsWith(label + '.') || rt.startsWith(label + ')') || rt.startsWith(label + ':')) return true;
        return (optContent.includes(rt) || rt.includes(optContent)) && rt.length >= 3;
      });

      options.push({
        label,
        content: optContent,
        isCorrect
      });
    }

    return { prompt, options };
  }

  // Question regex: Matches "Câu 1:", "Câu:", "Câu 1.", "Câu1:", "Bài 1:", "Question 1:"
  const qStartRegex = /^(?:Câu|Question|Bài)\s*\d*[:.-]\s*(.*)$/i;

  const questions = [];
  let currentQ = null;
  let qCounter = 0;

  for (const el of elements) {
    if (el.type === 'paragraph') {
      const { fullText, runs } = parseParagraph(el.xml);
      if (!fullText) continue;

      const qMatch = fullText.match(qStartRegex);
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

        // Check if inline options are right inside this question paragraph
        const seqRes = parseSequentialOptions(currentQ.content, runs);
        if (seqRes) {
          currentQ.content = seqRes.prompt;
          seqRes.options.forEach((opt, idx) => {
            currentQ.options.push({
              id: `opt_${Date.now()}_${qCounter}_${opt.label.toLowerCase()}`,
              label: opt.label,
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

        // Check if this paragraph is an option line: "A. ...", "B. ...", etc.
        const optLineMatch = fullText.match(/^[(\[]?([A-Ha-h])[)\].:\-]\s*(.*)$/);
        if (optLineMatch) {
          const label = optLineMatch[1].toUpperCase();
          let content = optLineMatch[2].trim();
          content = content.replace(/^[\s.:\-]+/, '').trim();
          const isCorrect = runs.some(r => checkRunIsCorrect(r));
          currentQ.options.push({
            id: `opt_${Date.now()}_${qCounter}_${label.toLowerCase()}`,
            label,
            content,
            isCorrect,
            orderIndex: currentQ.options.length + 1
          });
          continue;
        }

        // Check if True/False statement line: e.g. "1) ... Đúng", "1) ... Sai", or "Đúng", "Sai"
        const tfInlineMatch = fullText.match(/^(\d+[\).:-]\s*)([\s\S]+?)\s*(Đúng|Sai)$/i);
        if (tfInlineMatch) {
          currentQ.type = 'true_false_matrix';
          currentQ.instructionBadge = '(!) Chọn Đúng hoặc Sai cho mỗi phát biểu';
          currentQ.statements.push({
            id: `stmt_${qCounter}_${currentQ.statements.length + 1}`,
            indexNumber: currentQ.statements.length + 1,
            text: `${tfInlineMatch[1]}${tfInlineMatch[2]}`.trim(),
            correctAnswer: tfInlineMatch[3].charAt(0).toUpperCase() + tfInlineMatch[3].slice(1).toLowerCase()
          });
          continue;
        }

        // If paragraph is just "Đúng" or "Sai", it belongs to the previous statement!
        if (/^(Đúng|Sai)$/i.test(fullText) && currentQ.statements.length > 0) {
          const lastStmt = currentQ.statements[currentQ.statements.length - 1];
          if (!lastStmt.correctAnswer) {
            lastStmt.correctAnswer = fullText.charAt(0).toUpperCase() + fullText.slice(1).toLowerCase();
          }
          continue;
        }

        // Check if paragraph is statement prompt without answer: "1) Phát biểu..."
        const stmtOnlyMatch = fullText.match(/^(\d+[\).:-]\s*)([\s\S]+)$/);
        if (stmtOnlyMatch && (currentQ.content.toLowerCase().includes('đúng hoặc sai') || currentQ.type === 'true_false_matrix')) {
          currentQ.type = 'true_false_matrix';
          currentQ.instructionBadge = '(!) Chọn Đúng hoặc Sai cho mỗi phát biểu';
          currentQ.statements.push({
            id: `stmt_${qCounter}_${currentQ.statements.length + 1}`,
            indexNumber: currentQ.statements.length + 1,
            text: fullText.trim(),
            correctAnswer: '' // will be filled by next paragraph
          });
          continue;
        }

        // Check if paragraph has inline options: e.g. "Sinh viên chọn 2 phương án... A. ... B. ..."
        const seqRes = parseSequentialOptions(fullText, runs);
        if (seqRes) {
          if (seqRes.prompt) {
            currentQ.content += (currentQ.content ? '\n' : '') + seqRes.prompt;
          }
          seqRes.options.forEach((opt, idx) => {
            currentQ.options.push({
              id: `opt_${Date.now()}_${qCounter}_${opt.label.toLowerCase()}`,
              label: opt.label,
              content: opt.content,
              isCorrect: opt.isCorrect,
              orderIndex: idx + 1
            });
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
    } else if (el.type === 'table' && currentQ) {
      const tableData = parseTable(el.xml);
      if (tableData.length === 0) continue;

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
    }
  }

  // Post-process each question
  questions.forEach(q => {
    // Check multiple choice instruction in content
    const multiMatch = q.content.match(/(?:chọn|Sinh viên chọn)\s*(\d+)\s*phương án/i);
    if (multiMatch) {
      const requiredCount = parseInt(multiMatch[1], 10);
      q.type = 'multiple_choice';
      q.requiredCount = requiredCount;
      q.instructionBadge = `(!) Sinh viên chọn ${requiredCount} phương án đúng nhất`;
      const correctOpts = q.options.filter(o => o.isCorrect);
      if (correctOpts.length < requiredCount) {
        for (let i = 0; i < Math.min(requiredCount, q.options.length); i++) {
          q.options[i].isCorrect = true;
        }
      }
    } else if (q.type === 'single_choice' && q.options.length > 0) {
      const correctOpts = q.options.filter(o => o.isCorrect);
      if (correctOpts.length === 0) {
        q.options[0].isCorrect = true;
      } else if (correctOpts.length > 1) {
        // Keep only first marked as correct
        let firstFound = false;
        q.options.forEach(o => {
          if (o.isCorrect && !firstFound) {
            firstFound = true;
          } else {
            o.isCorrect = false;
          }
        });
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
