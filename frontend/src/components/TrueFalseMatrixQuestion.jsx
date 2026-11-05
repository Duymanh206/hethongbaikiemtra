import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function TrueFalseMatrixQuestion({
  statements = [],
  answers = {}, // { [statementId]: 'dung' | 'sai' }
  onSelectAnswer
}) {
  const answeredCount = Object.keys(answers).length;
  const isAllAnswered = statements.length > 0 && answeredCount === statements.length;

  return (
    <div className="space-y-4 mt-3">
      {/* 2-column grid exactly like Image 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {statements.map((stmt, idx) => {
          const selected = answers[stmt.id]; // 'dung' or 'sai'

          return (
            <div
              key={stmt.id || idx}
              className="p-4 rounded-xl border border-slate-200 bg-white/80 hover:border-slate-300 transition-all flex flex-col justify-between space-y-3"
            >
              {/* Statement Content */}
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                {stmt.text}
              </p>

              {/* Radio options: [Đúng] and [Sai] */}
              <div className="flex items-center gap-3 pt-1">
                {/* Option Đúng */}
                <label
                  onClick={() => onSelectAnswer(stmt.id, 'dung')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border cursor-pointer select-none transition-all ${
                    selected === 'dung'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold shadow-xs ring-1 ring-blue-500'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selected === 'dung' ? 'border-blue-600 bg-blue-600' : 'border-slate-400 bg-white'
                  }`}>
                    {selected === 'dung' && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </span>
                  <span className="text-xs">Đúng</span>
                </label>

                {/* Option Sai */}
                <label
                  onClick={() => onSelectAnswer(stmt.id, 'sai')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border cursor-pointer select-none transition-all ${
                    selected === 'sai'
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold shadow-xs ring-1 ring-blue-500'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selected === 'sai' ? 'border-blue-600 bg-blue-600' : 'border-slate-400 bg-white'
                  }`}>
                    {selected === 'sai' && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </span>
                  <span className="text-xs">Sai</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>

      {/* Status hint */}
      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 pt-2 border-t border-slate-100">
        <span>Tiến độ câu hỏi: {answeredCount} / {statements.length} phát biểu</span>
        {isAllAnswered ? (
          <span className="text-emerald-600 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Đã trả lời đầy đủ
          </span>
        ) : (
          <span className="text-amber-600">
            Cần chọn Đúng hoặc Sai cho tất cả {statements.length} phát biểu
          </span>
        )}
      </div>
    </div>
  );
}
