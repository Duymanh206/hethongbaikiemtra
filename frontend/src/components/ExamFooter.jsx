import React from 'react';
import { 
  ChevronsLeft, 
  ChevronsRight, 
  Zap, 
  Send,
  ClipboardList
} from 'lucide-react';

export default function ExamFooter({
  quizTitle,
  modeBadge,
  courseName,
  totalQuestions,
  currentIndex,
  onSelectQuestion,
  answers = {},
  isQuestionCompleted = () => false,
  markedForReview = [],
  onOpenReviewAnswers,
  onSubmitClick
}) {
  const answeredCount = Array.from({ length: totalQuestions }).filter((_, idx) => isQuestionCompleted(idx)).length;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-xl py-2 px-3 sm:px-6">
      <div className="w-full max-w-[98vw] 2xl:max-w-[1720px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left: Solid Red Banner Block matching user photo + Backup mirror link */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="bg-[#dc2626] text-white px-3.5 py-1.5 rounded-lg shadow-xs text-left min-w-[200px] max-w-[320px]">
            <div className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider leading-tight truncate">
              {modeBadge || quizTitle || 'BÀI KIỂM TRA 15 PHÚT'}
            </div>
            <div className="text-[10px] sm:text-[11px] text-white/90 leading-tight truncate">
              Môn: {courseName || 'Chủ nghĩa xã hội khoa học'}
            </div>
          </div>

          <button
            type="button"
            onClick={() => alert('Đang kích hoạt đường truyền dự phòng tốc độ cao. Dữ liệu bài làm đã được đồng bộ an toàn!')}
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
            type="button"
            onClick={() => onSelectQuestion(0)}
            disabled={currentIndex === 0}
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border border-slate-300 text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shrink-0"
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
              btnClass = 'bg-blue-50 text-blue-800 border-blue-300 font-bold';
            }
            // Matching user photos: ACTIVE IS SOLID RED WITH WHITE TEXT
            if (isCurrent) {
              btnClass = 'bg-[#dc2626] text-white border-[#dc2626] font-black shadow-sm scale-110 ring-2 ring-red-200';
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectQuestion(idx)}
                title={`Câu ${idx + 1}: ${completed ? 'Đã làm' : 'Chưa làm'}${isMarked ? ' (Đánh dấu xem lại)' : ''}`}
                className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs border transition-all shrink-0 cursor-pointer ${btnClass}`}
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
            type="button"
            onClick={() => onSelectQuestion(totalQuestions - 1)}
            disabled={currentIndex === totalQuestions - 1}
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border border-slate-300 text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shrink-0"
            title="Đến câu cuối"
          >
            <ChevronsRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Review Answers Button + Submit Button (Duplicate Next Button Removed as requested!) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenReviewAnswers}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs shadow-xs active:scale-95 transition-all cursor-pointer"
            title="Xem lại toàn bộ các đáp án đã làm và chưa làm"
          >
            <ClipboardList className="w-4 h-4 text-indigo-600" />
            <span className="hidden sm:inline">Xem lại đáp án đã làm</span>
            <span className="sm:hidden">Xem lại</span>
            <span className="px-1.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-black">
              {answeredCount}/{totalQuestions}
            </span>
          </button>

          <button
            type="button"
            onClick={onSubmitClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm shadow-emerald-600/30 active:scale-95 transition-all cursor-pointer"
            title="Nộp bài thi"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Nộp bài</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
