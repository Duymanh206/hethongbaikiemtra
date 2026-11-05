import React from 'react';
import { Sparkles, BookOpen, Lightbulb, CheckCircle2, AlertTriangle, X } from 'lucide-react';

export default function AIExplanationModal({
  isOpen,
  onClose,
  explanationData,
  isLoading
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-blue-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Trợ Lý AI Giải Thích Chi Tiết</h3>
              <p className="text-xs text-slate-400">Căn cứ theo giáo trình và tài liệu quy chuẩn</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs font-semibold text-slate-500">Đang tra cứu cơ sở lý luận & phân tích câu hỏi...</p>
          </div>
        ) : explanationData ? (
          <div className="space-y-5 my-5 text-left text-sm">
            
            {/* Core Concepts */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Khái niệm trọng tâm</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-blue-950 font-medium">
                {explanationData.coreConcepts?.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Detailed Analysis */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Phân tích nguyên lý & luận điểm</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed text-xs sm:text-sm whitespace-pre-line font-medium">
                {explanationData.detailedAnalysis}
              </div>
            </div>

            {/* Why Correct vs Common Mistakes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Vì sao đáp án đúng?</span>
                </div>
                <p className="text-xs text-emerald-950 leading-relaxed">
                  {explanationData.whyCorrect}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Cạm bẫy thường gặp</span>
                </div>
                <p className="text-xs text-rose-950 leading-relaxed">
                  {explanationData.commonMistakes}
                </p>
              </div>
            </div>

            {/* Study Tip */}
            {explanationData.studyTip && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                💡 <strong>Lời khuyên ôn tập:</strong> {explanationData.studyTip}
              </div>
            )}

          </div>
        ) : null}

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all"
          >
            Đã hiểu
          </button>
        </div>

      </div>
    </div>
  );
}

