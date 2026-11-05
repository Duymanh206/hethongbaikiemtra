import React, { useState, useEffect } from 'react';
import { RotateCcw, Check, Sparkles, MoveRight } from 'lucide-react';

export default function SentenceRearrangeQuestion({
  scrambledWords = [],
  answer,
  onAnswerChange
}) {
  // Available words bank and current constructed sentence
  const [bank, setBank] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);

  useEffect(() => {
    // If user already had an answer
    if (Array.isArray(answer) && answer.length > 0) {
      setSelectedWords(answer);
      // Remaining in bank
      const remaining = [...scrambledWords];
      answer.forEach(word => {
        const idx = remaining.indexOf(word);
        if (idx !== -1) remaining.splice(idx, 1);
      });
      setBank(remaining);
    } else {
      setBank([...scrambledWords]);
      setSelectedWords([]);
    }
  }, [scrambledWords]);

  // Click word in bank to add to sentence
  const handleSelectWord = (word, indexInBank) => {
    const newBank = [...bank];
    newBank.splice(indexInBank, 1);
    const newSelected = [...selectedWords, word];

    setBank(newBank);
    setSelectedWords(newSelected);
    onAnswerChange(newSelected);
  };

  // Click word in sentence tray to return to bank
  const handleRemoveWord = (word, indexInSelected) => {
    const newSelected = [...selectedWords];
    newSelected.splice(indexInSelected, 1);
    const newBank = [...bank, word];

    setSelectedWords(newSelected);
    setBank(newBank);
    onAnswerChange(newSelected);
  };

  // Reset all
  const handleReset = () => {
    setBank([...scrambledWords]);
    setSelectedWords([]);
    onAnswerChange([]);
  };

  return (
    <div className="space-y-5 my-4">
      {/* Target Construction Tray (Khay ghép câu) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-blue-50/70 to-white border-2 border-dashed border-blue-300 min-h-[90px] flex flex-col justify-between transition-all">
        <div className="flex items-center justify-between text-xs text-blue-800 font-bold mb-2">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Khay ghép câu hoàn chỉnh (Bấm từ ở dưới để đưa lên đây):
          </span>
          {selectedWords.length > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 text-[11px] text-red-600 hover:text-red-700 font-bold hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Làm lại
            </button>
          )}
        </div>

        {selectedWords.length === 0 ? (
          <div className="flex items-center justify-center py-4 text-slate-400 text-xs italic">
            (Chưa có từ nào được chọn. Hãy bấm vào các từ bên dưới theo đúng thứ tự ngữ pháp)
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2 py-2">
            {selectedWords.map((word, idx) => (
              <button
                key={`${word}_${idx}`}
                type="button"
                onClick={() => handleRemoveWord(word, idx)}
                className="group flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-sm hover:bg-red-600 transition-all active:scale-95 cursor-pointer"
                title="Bấm để bỏ từ này khỏi câu"
              >
                <span>{word}</span>
                <span className="text-[10px] text-blue-200 group-hover:text-white opacity-75">✕</span>
              </button>
            ))}
          </div>
        )}

        {/* Live Sentence Preview */}
        {selectedWords.length > 0 && (
          <div className="mt-3 pt-3 border-t border-blue-200/60 text-xs text-slate-700 font-medium">
            <span className="text-blue-700 font-bold">Câu của bạn: </span>
            <span className="italic font-semibold text-slate-900">
              "{selectedWords.join(' ')}."
            </span>
          </div>
        )}
      </div>

      {/* Scrambled Word Bank (Kho từ bị xáo trộn) */}
      <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200">
        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
          Ngân hàng từ vựng (Bấm vào từ để ghép):
        </div>
        
        {bank.length === 0 ? (
          <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 py-1">
            <Check className="w-4 h-4 text-emerald-600" />
            Đã sắp xếp toàn bộ các từ vào câu!
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {bank.map((word, idx) => (
              <button
                key={`${word}_${idx}`}
                type="button"
                onClick={() => handleSelectWord(word, idx)}
                className="px-4 py-2 rounded-xl bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-sm border border-slate-300 hover:border-blue-400 shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                {word}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

