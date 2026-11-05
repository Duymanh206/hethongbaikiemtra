import React from 'react';

export default function FillBlankQuestion({
  content,
  blanks = [],
  answer = {},
  onAnswerChange
}) {
  const currentAnswers = typeof answer === 'object' && answer !== null ? answer : {};

  const handleInputChange = (blankKey, val) => {
    onAnswerChange({
      ...currentAnswers,
      [blankKey]: val
    });
  };

  // If blanks array is provided with options or input fields
  return (
    <div className="space-y-4 my-4">
      {/* Passage / Content with blanks explanation */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm leading-relaxed text-slate-800">
        <div className="font-semibold text-xs text-blue-700 uppercase tracking-wider mb-2">
          Đoạn văn điền khuyết (Fill-in-the-blank text):
        </div>
        <div className="whitespace-pre-line leading-loose text-base">
          {content}
        </div>
      </div>

      {/* Inputs / Dropdowns for each Blank */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {blanks.map((b, idx) => {
          const key = b.id || `blank_${idx}`;
          const val = currentAnswers[key] || '';

          return (
            <div key={key} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Vị trí trống ({idx + 1}):</span>
                {b.hint && <span className="text-[11px] text-slate-400 font-normal italic">Gợi ý: {b.hint}</span>}
              </label>

              {b.options && b.options.length > 0 ? (
                <select
                  value={val}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm font-semibold bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">-- Chọn đáp án đúng --</option>
                  {b.options.map((opt, oIdx) => (
                    <option key={oIdx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={val}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  placeholder="Nhập từ vựng hoặc dạng đúng của động từ..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
