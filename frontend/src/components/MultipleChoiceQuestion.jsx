import React from 'react';
import { CheckSquare, Square, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function MultipleChoiceQuestion({
  options = [],
  selectedOptionIds = [],
  requiredCount = 2,
  onToggleOption
}) {
  const currentSelectedCount = selectedOptionIds.length;
  const isSatisfied = currentSelectedCount === requiredCount;

  return (
    <div className="space-y-3 mt-4">
      {/* Strict requirement counter bar */}
      <div className={`p-3 rounded-xl border flex items-center justify-between text-xs font-semibold ${
        isSatisfied
          ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
          : 'bg-amber-50 border-amber-200 text-amber-800'
      }`}>
        <div className="flex items-center gap-2">
          {isSatisfied ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          ) : (
            <AlertCircle className="w-4 h-4 text-amber-600" />
          )}
          <span>
            {isSatisfied
              ? `Đã chọn đủ ${requiredCount} / ${requiredCount} phương án yêu cầu (Hợp lệ)`
              : `Yêu cầu chọn đúng ${requiredCount} phương án (Đang chọn: ${currentSelectedCount}/${requiredCount})`}
          </span>
        </div>
        <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/80 border border-slate-200">
          {currentSelectedCount} / {requiredCount}
        </span>
      </div>

      {/* Options grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {options.map((opt, idx) => {
          const isSelected = selectedOptionIds.includes(opt.id);
          const letter = String.fromCharCode(65 + idx);

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onToggleOption(opt.id)}
              className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                isSelected
                  ? 'border-blue-700 bg-blue-50/90 text-blue-950 shadow-sm shadow-blue-500/10'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800'
              }`}
            >
              {/* Square checkbox */}
              <div className="shrink-0 mt-0.5">
                {isSelected ? (
                  <CheckSquare className="w-5 h-5 text-blue-700 fill-blue-100" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400" />
                )}
              </div>

              {/* Letter badge */}
              <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0 ${
                isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {letter}
              </div>

              {/* Content */}
              <div className="flex-1 text-sm font-medium leading-relaxed">
                {opt.content}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

