import React from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Bookmark, 
  Send, 
  ArrowRight,
  ClipboardList,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function ReviewAnswersModal({
  isOpen,
  onClose,
  questions = [],
  answers = {},
  markedForReview = [],
  onJumpToQuestion,
  onSubmitExam
}) {
  if (!isOpen) return null;

  // Format answer preview for each question type
  const formatUserAnswer = (question) => {
    const ans = answers[question.id];
    if (!ans) return { text: 'Chưa trả lời', isAnswered: false };

    if (question.type === 'single_choice') {
      const opt = question.options?.find(o => o.id === ans);
      if (opt) {
        return { 
          text: `Đã chọn: [${opt.label || 'A'}] ${opt.content}`, 
          isAnswered: true, 
          label: opt.label || 'A' 
        };
      }
      return { text: 'Đã chọn đáp án', isAnswered: true };
    }

    if (question.type === 'multiple_choice') {
      if (Array.isArray(ans) && ans.length > 0) {
        const labels = ans.map(id => {
          const opt = question.options?.find(o => o.id === id);
          return opt ? opt.label : '';
        }).filter(Boolean).join(', ');
        return { 
          text: `Đã chọn: ${labels || `${ans.length} phương án`}`, 
          isAnswered: true 
        };
      }
      return { text: 'Chưa trả lời', isAnswered: false };
    }

    if (question.type === 'true_false_matrix') {
      if (typeof ans === 'object' && Object.keys(ans).length > 0) {
        const count = Object.keys(ans).length;
        const total = question.statements?.length || 4;
        return { 
          text: `Đã đánh giá: ${count}/${total} phát biểu (Đúng/Sai)`, 
          isAnswered: count > 0 
        };
      }
      return { text: 'Chưa trả lời', isAnswered: false };
    }

    if (question.type === 'drag_drop_categorize' || question.type === 'drag_drop_matching') {
      if (typeof ans === 'object' && Object.keys(ans).length > 0) {
        const count = Object.keys(ans).length;
        return { 
          text: `Đã xếp ${count} thẻ dữ liệu vào các nhóm`, 
          isAnswered: count > 0 
        };
      }
      return { text: 'Chưa trả lời', isAnswered: false };
    }

    return { text: 'Đã có bài làm', isAnswered: true };
  };

  const answeredCount = questions.filter(q => formatUserAnswer(q).isAnswered).length;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <ClipboardList className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight">
                BẢNG RÀ SOÁT CÁC ĐÁP ÁN ĐÃ LÀM
              </h2>
              <p className="text-xs text-blue-200">
                Kiểm tra lại toàn bộ bài làm trước khi nộp bài thi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats Pill Strip */}
        <div className="grid grid-cols-3 gap-2 px-6 py-3.5 bg-slate-50 border-b border-slate-200/80 text-xs font-bold shrink-0">
          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Đã làm: {answeredCount} / {questions.length} câu</span>
          </div>

          <div className="flex items-center gap-2 text-rose-700 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>Chưa làm: {unansweredCount} câu</span>
          </div>

          <div className="flex items-center gap-2 text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
            <Bookmark className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Đánh dấu xem lại: {markedForReview.length} câu</span>
          </div>
        </div>

        {/* Questions Answers List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {questions.map((q, idx) => {
            const formatted = formatUserAnswer(q);
            const isMarked = markedForReview.includes(idx);

            return (
              <div
                key={q.id}
                onClick={() => {
                  onJumpToQuestion(idx);
                  onClose();
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:shadow-md ${
                  formatted.isAnswered 
                    ? 'bg-white border-slate-200 hover:border-blue-400' 
                    : 'bg-rose-50/50 border-rose-200 hover:border-rose-400'
                }`}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                    formatted.isAnswered 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}>
                    {idx + 1}
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold text-slate-500 uppercase">
                        Câu {idx + 1}
                      </span>
                      {q.topicName && (
                        <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-semibold border border-indigo-200/60 truncate max-w-[200px]">
                          {q.topicName}
                        </span>
                      )}
                      {isMarked && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center gap-1">
                          <Bookmark className="w-3 h-3 text-amber-600 fill-amber-500" />
                          <span>Xem lại</span>
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-700 font-medium line-clamp-1">
                      {q.content}
                    </p>

                    <div className="text-xs font-bold">
                      {formatted.isAnswered ? (
                        <span className="text-emerald-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{formatted.text}</span>
                        </span>
                      ) : (
                        <span className="text-rose-600 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                          <span>Chưa trả lời câu hỏi này</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-all shrink-0 self-end sm:self-center flex items-center gap-1"
                >
                  <span>Làm câu này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer"
          >
            Quay lại làm tiếp
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onSubmitExam();
            }}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/30 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Nộp Bài Thi Ngay</span>
          </button>
        </div>

      </div>
    </div>
  );
}

