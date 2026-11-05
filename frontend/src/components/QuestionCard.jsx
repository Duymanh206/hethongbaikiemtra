import React from 'react';
import { Bookmark, AlertTriangle, ArrowRight, ArrowLeft } from 'lucide-react';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import DragDropCategorizeQuestion from './DragDropCategorizeQuestion';
import DragDropMatchingQuestion from './DragDropMatchingQuestion';
import TrueFalseMatrixQuestion from './TrueFalseMatrixQuestion';

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  answer,
  onAnswerChange,
  isMarkedForReview,
  onToggleMarkForReview,
  onNextQuestion,
  onPrevQuestion
}) {
  if (!question) return null;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200/90 relative min-h-[460px] w-full flex flex-col justify-between">
      
      <div>
        {/* Top Card Row: Question Index & "Xem lại câu này" checkbox matching user photo */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200/60">
              CÂU {questionIndex + 1} / {totalQuestions}
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium">
              ({question.points || 1.0} điểm)
            </span>
          </div>

          {/* Checkbox "Xem lại câu này" */}
          <label className="flex items-center gap-2 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={isMarkedForReview}
              onChange={onToggleMarkForReview}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-400 border-slate-300 transition-colors"
            />
            <span className={`text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors ${
              isMarkedForReview ? 'text-amber-700 font-bold' : 'text-slate-500 group-hover:text-slate-800'
            }`}>
              <Bookmark className={`w-4 h-4 ${isMarkedForReview ? 'fill-amber-500 text-amber-600' : 'text-slate-400'}`} />
              Xem lại câu này
            </span>
          </label>
        </div>

        {/* Question Content & Title (Large, bold, prominent) */}
        <div className="mt-5 space-y-2.5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
            <span className="text-blue-700 font-extrabold mr-2">Câu {questionIndex + 1}:</span>
            {question.content}
          </h3>

          {/* Badge chỉ dẫn nếu có */}
          {question.instructionBadge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/90 text-xs sm:text-sm font-semibold">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{question.instructionBadge}</span>
            </div>
          )}
        </div>

        {/* Render 5 Question Types (Full Width, Spacious) */}
        <div className="mt-6 w-full">
          {/* Type 1: Single Choice (Full-width rows matching Image 4) */}
          {question.type === 'single_choice' && (
            <SingleChoiceQuestion
              options={question.options}
              selectedOptionId={answer}
              onSelectOption={(optId) => onAnswerChange(question.id, optId)}
            />
          )}

          {/* Type 2: True/False Matrix (Matching Image 2) */}
          {question.type === 'true_false_matrix' && (
            <TrueFalseMatrixQuestion
              statements={question.statements || []}
              answers={answer && typeof answer === 'object' ? answer : {}}
              onSelectAnswer={(stmtId, value) => {
                const current = answer && typeof answer === 'object' ? { ...answer } : {};
                current[stmtId] = value;
                onAnswerChange(question.id, current);
              }}
            />
          )}

          {/* Type 3: Drag & Drop Categorization (Matching Image 3) */}
          {question.type === 'drag_drop_categorize' && (
            <DragDropCategorizeQuestion
              dragDropItems={question.dragDropItems}
              categories={question.categories && question.categories.length > 0 ? question.categories : [
                '1) Đặc trưng của dân tộc (quốc gia)',
                '2) Đặc trưng của dân tộc (tộc người)'
              ]}
              placements={answer && typeof answer === 'object' ? answer : {}}
              onUpdatePlacements={(newPlacements) => onAnswerChange(question.id, newPlacements)}
            />
          )}

          {/* Type 4: Drag & Drop Matching (Matching Image 5) */}
          {question.type === 'drag_drop_matching' && (
            <DragDropMatchingQuestion
              dragDropItems={question.dragDropItems}
              matchingTargets={question.matchingTargets || []}
              matches={answer && typeof answer === 'object' ? answer : {}}
              onUpdateMatches={(newMatches) => onAnswerChange(question.id, newMatches)}
            />
          )}

          {/* Type 5: Multiple Choice */}
          {question.type === 'multiple_choice' && (
            <MultipleChoiceQuestion
              options={question.options}
              selectedOptionIds={Array.isArray(answer) ? answer : []}
              requiredCount={question.requiredCount || 2}
              onToggleOption={(optId) => {
                const current = Array.isArray(answer) ? [...answer] : [];
                const index = current.indexOf(optId);
                if (index > -1) {
                  current.splice(index, 1);
                } else {
                  current.push(optId);
                }
                onAnswerChange(question.id, current);
              }}
            />
          )}
        </div>
      </div>

      {/* Card In-page Navigation Footer (prev/next) */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={onPrevQuestion}
          disabled={questionIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Câu trước</span>
        </button>

        <button
          onClick={onNextQuestion}
          disabled={questionIndex === totalQuestions - 1}
          className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <span>Câu tiếp theo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
