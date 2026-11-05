import React from 'react';
import { HelpCircle, CheckCircle2, Send, ArrowLeft } from 'lucide-react';

export default function SubmitConfirmModal({
  isOpen,
  onClose,
  totalQuestions,
  onConfirmSubmit,
  isSubmitting = false
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-emerald-100 text-center animate-in zoom-in-95 duration-150">
        
        {/* Success / Confirmation Icon */}
        <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm shadow-emerald-500/10">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        {/* Modal Title */}
        <h3 className="text-xl font-black text-slate-900 tracking-tight">
          Nộp bài?
        </h3>
        
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Bạn đã làm đủ <span className="font-bold text-emerald-600">{totalQuestions}/{totalQuestions} câu</span>. Nộp rồi sẽ không sửa được nữa.
        </p>

        <div className="my-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed text-left flex items-start gap-2.5">
          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <span>Hệ thống sẽ tiến hành chấm điểm tự động và lưu trữ bài thi vào hồ sơ học tập của bạn.</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kiểm tra lại</span>
          </button>
          
          <button
            onClick={onConfirmSubmit}
            disabled={isSubmitting}
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 active:scale-98 disabled:opacity-50 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Đang nộp...' : 'Nộp bài'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

