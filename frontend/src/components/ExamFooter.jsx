import React from 'react';
import { 
  ChevronsLeft, 
  ChevronsRight, 
  Zap, 
  ArrowRight,
  Send
} from 'lucide-react';

export default function ExamFooter({
  quizTitle,
  totalQuestions,
  currentIndex,
  onSelectQuestion,
  answers,
  isQuestionCompleted,
  markedForReview,
  onNextQuestion,
  onSubmitClick
}) {
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-xl py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left: Solid Red Banner Block matching Image 2, 3, 4, 5 + Backup mirror button */}
        <div className="flex items-center gap-2.5">
          <div className="bg-[#dc2626] text-white px-3.5 py-1.5 rounded-lg shadow-xs text-left min-w-[200px]">
            <div className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider leading-tight">
              BÀI KIỂM TRA 15 PHÚT - TUẦN 1
            </div>
            <div className="text-[10px] sm:text-[11px] text-white/90 leading-tight">
              Môn: Chủ nghĩa xã hội khoa học
            </div>
          </div>

          <button
            onClick={() => alert('Đang chuyển hướng sang link dự phòng tốc độ cao. Dữ liệu bài làm đã được đồng bộ an toàn!')}
            className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-md transition-colors"
          >
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Web chậm? Dùng link dự phòng</span>
          </button>
        </div>

        {/* Center: Question Pagination Round Buttons (Active is Solid Red Circle!) */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
          {/* Jump to first « */}
          <button
            onClick={() => onSelectQuestion(0)}
            disabled={currentIndex === 0}
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border border-slate-300 text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Về câu đầu"
          >
            <ChevronsLeft className="w-3.5 h-3.5" />
          </button>

          {/* Numbered buttons matching user photos (Solid Red for current!) */}
          {Array.from({ length: totalQuestions }).map((_, idx) => {
            const isCurrent = idx === currentIndex;
            const completed = isQuestionCompleted(idx);
            const isMarked = markedForReview.includes(idx);

            let btnClass = 'bg-white text-slate-700 border-slate-300 hover:border-slate-400';
            if (completed && !isCurrent) {
              btnClass = 'bg-blue-50 text-blue-800 border-blue-200 font-bold';
            }
            // Matching user photos: ACTIVE IS SOLID RED WITH WHITE TEXT
            if (isCurrent) {
              btnClass = 'bg-[#dc2626] text-white border-[#dc2626] font-black shadow-sm scale-110';
            }

            return (
              <button
                key={idx}
                onClick={() => onSelectQuestion(idx)}
                className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs border transition-all ${btnClass}`}
              >
                {idx + 1}
                {isMarked && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 border-2 border-white rounded-full" title="Đánh dấu xem lại"></span>
                )}
              </button>
            );
          })}

          {/* Jump to last » */}
          <button
            onClick={() => onSelectQuestion(totalQuestions - 1)}
            disabled={currentIndex === totalQuestions - 1}
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border border-slate-300 text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Đến câu cuối"
          >
            <ChevronsRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Next / Submit Button */}
        <div>
          {isLastQuestion ? (
            <button
              onClick={onSubmitClick}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm active:scale-95 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Nộp bài</span>
            </button>
          ) : (
            <button
              onClick={onNextQuestion}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm active:scale-95 transition-all"
            >
              <span>Câu hỏi tiếp theo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </footer>
  );
}
