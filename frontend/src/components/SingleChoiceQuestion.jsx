import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SingleChoiceQuestion({
  options = [],
  selectedOptionId,
  onSelectOption
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
      {options.map((opt, idx) => {
        const isSelected = selectedOptionId === opt.id;
        const letter = opt.label || String.fromCharCode(65 + idx);

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onSelectOption(opt.id)}
            className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
              isSelected
                ? 'border-blue-700 bg-blue-50/90 text-blue-950 shadow-sm shadow-blue-500/10'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800'
            }`}
          >
            {/* Letter badge */}
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
              isSelected
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600'
            }`}>
              {letter}
            </div>

            {/* Option text content */}
            <div className="flex-1 text-sm font-medium leading-relaxed pt-0.5">
              {opt.content}
            </div>

            {/* Indicator */}
            {isSelected && (
              <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            )}
          </button>
        );
      })}
    </div>
  );
}

