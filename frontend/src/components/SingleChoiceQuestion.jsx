import React from 'react';

export default function SingleChoiceQuestion({
  options = [],
  selectedOptionId,
  onSelectOption
}) {
  // Sort options cleanly if orderIndex is provided
  const displayOptions = [...options].sort((a, b) => {
    if (a.orderIndex && b.orderIndex && a.orderIndex !== b.orderIndex) {
      return a.orderIndex - b.orderIndex;
    }
    return 0;
  });

  return (
    <div className="space-y-3 mt-4">
      {displayOptions.map((opt, idx) => {
        const isSelected = selectedOptionId === opt.id;
        // Strictly assign sequential A, B, C, D in order of display
        const letter = String.fromCharCode(65 + idx);

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onSelectOption(opt.id)}
            className={`w-full flex items-center gap-4 p-3.5 sm:p-4 rounded-xl border text-left transition-all ${
              isSelected
                ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold shadow-xs ring-1 ring-blue-500'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 text-slate-800'
            }`}
          >
            {/* Letter A, B, C, D */}
            <span className="font-bold text-xs sm:text-sm text-slate-700 w-4 text-center shrink-0">
              {letter}
            </span>

            {/* Radio circle */}
            <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
              isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-400 bg-white'
            }`}>
              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
            </span>

            {/* Content text with underline and formatting support */}
            <span 
              className="flex-1 text-xs sm:text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: opt.content }}
            />
          </button>
        );
      })}
    </div>
  );
}
