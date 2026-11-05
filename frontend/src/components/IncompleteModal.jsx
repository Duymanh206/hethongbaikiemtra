import React from 'react';
import { AlertCircle, ArrowRight, X } from 'lucide-react';

export default function IncompleteModal({
  isOpen,
  onClose,
  incompleteQuestionIndices = [], // 0-based array of indices
  onJumpToQuestion
}) {
  if (!isOpen) return null;

  const firstIncomplete = incompleteQuestionIndices.length > 0 ? incompleteQuestionIndices[0] : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-rose-100 text-center animate-in zoom-in-95 duration-150">
        
        {/* Warning Icon */}
        <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4 shadow-sm shadow-rose-500/10">
          <AlertCircle className="w-8 h-8" />
        </div>

        {/* Modal Title */}
        <h3 className="text-xl font-black text-slate-900 tracking-tight">
          Chưa làm xong bài thi
        </h3>
        
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Bạn còn <span className="font-bold text-rose-600">{incompleteQuestionIndices.length} câu</span> chưa hoàn thành hoặc chưa chọn đủ số lượng phương án yêu cầu!
        </p>

        {/* List of incomplete question numbered buttons in red */}
        <div className="my-5 p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
          <div className="text-xs font-semibold text-rose-800 uppercase tracking-wider mb-2.5">
            Danh sách câu hỏi cần hoàn thành:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {incompleteQuestionIndices.map(idx => (
              <button
                key={idx}
                onClick={() => {
                  onJumpToQuestion(idx);
                  onClose();
                }}
                className="w-9 h-9 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
                title={`Nhảy tới Câu ${idx + 1}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
          >
            Đóng
          </button>
          
          <button
            onClick={() => {
              onJumpToQuestion(firstIncomplete);
              onClose();
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 flex items-center justify-center gap-1.5 active:scale-98 transition-all"
          >
            <span>Làm câu {firstIncomplete + 1}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

