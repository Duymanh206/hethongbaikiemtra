import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight, 
  Bookmark, 
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
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 shadow-xl py-2.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left: Subject / Quiz Title Badge + Backup link */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-lg bg-blue-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm truncate max-w-[280px] sm:max-w-xs">
            {quizTitle || 'CHỦ NGHĨA XÃ HỘI KHOA HỌC - BÀI 5'}
          </div>
          <button
            onClick={() => alert('Đang chuyển hướng sang máy chủ dự phòng (Backup Server Mirror 2)... Toàn bộ bài làm và thời gian đã được tự động đồng bộ an toàn!')}
            className="flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-md transition-colors"
          >
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>⚡ Web chậm? Dùng link dự phòng</span>
          </button>
        </div>

        {/* Center: Question Pagination Round Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
          {/* Jump to first « */}
          <button
            onClick={() => onSelectQuestion(0)}
            disabled={currentIndex === 0}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-slate-300 text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Về câu đầu tiên"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>

          {/* Numbered buttons */}
          {Array.from({ length: totalQuestions }).map((_, idx) => {
            const isCurrent = idx === currentIndex;
            const completed = isQuestionCompleted(idx);
            const isMarked = markedForReview.includes(idx);

            // Styling based on state:
            // - Current: Dark blue background, white text
            // - Answered: Light blue background, blue text
            // - Unanswered: White background, gray border
            // - Marked: Yellow border / dot
            let btnClass = 'bg-white text-slate-700 border-slate-300 hover:border-slate-400';
            if (completed && !isCurrent) {
              btnClass = 'bg-blue-100 text-blue-800 border-blue-300 font-bold';
            }
            if (isCurrent) {
              btnClass = 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-600/30 font-extrabold scale-110';
            }

            return (
              <button
                key={idx}
                onClick={() => onSelectQuestion(idx)}
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-xs border transition-all ${btnClass}`}
              >
                {idx + 1}
                {/* Yellow dot indicator if marked for review */}
                {isMarked && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-white rounded-full shadow-xs" title="Đánh dấu xem lại"></span>
                )}
              </button>
            );
          })}

          {/* Jump to last » */}
          <button
            onClick={() => onSelectQuestion(totalQuestions - 1)}
            disabled={currentIndex === totalQuestions - 1}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-slate-300 text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Đến câu cuối cùng"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Next / Submit Button */}
        <div>
          {isLastQuestion ? (
            <button
              onClick={onSubmitClick}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Nộp bài</span>
            </button>
          ) : (
            <button
              onClick={onNextQuestion}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 active:scale-95 transition-all"
            >
              <span>Câu hỏi tiếp theo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </footer>
  );
}

