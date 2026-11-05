import React from 'react';
import { Bookmark, AlertTriangle } from 'lucide-react';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import DragDropCategorizeQuestion from './DragDropCategorizeQuestion';
import DragDropMatchingQuestion from './DragDropMatchingQuestion';

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  answer,
  onAnswerChange,
  isMarkedForReview,
  onToggleMarkForReview
}) {
  if (!question) return null;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 relative">
      
      {/* Top Card Row: Question Number & "Xem lại câu này" checkbox */}
      <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-blue-100 text-blue-800">
            Câu {questionIndex + 1} / {totalQuestions}
          </span>
          <span className="text-xs font-medium text-slate-400">
            ({question.points || 1.0} điểm)
          </span>
        </div>

        {/* Checkbox "Xem lại câu này" (Mark for review) */}
        <label className="flex items-center gap-2 cursor-pointer select-none group">
          <input
            type="checkbox"
            checked={isMarkedForReview}
            onChange={onToggleMarkForReview}
            className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-300 transition-colors"
          />
          <span className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${
            isMarkedForReview ? 'text-amber-700 font-bold' : 'text-slate-500 group-hover:text-slate-800'
          }`}>
            <Bookmark className={`w-3.5 h-3.5 ${isMarkedForReview ? 'fill-amber-500 text-amber-600' : 'text-slate-400'}`} />
            Xem lại câu này
          </span>
        </label>
      </div>

      {/* Question Content & Title */}
      <div className="mt-5 space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
          <span className="text-blue-700 font-extrabold mr-2">Câu {questionIndex + 1}:</span>
          {question.content}
        </h3>

        {/* Badge chỉ dẫn màu đỏ/cam nhạt (nếu có) */}
        {question.instructionBadge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{question.instructionBadge}</span>
          </div>
        )}
      </div>

      {/* Render 4 Question Types */}
      <div className="mt-4">
        {question.type === 'single_choice' && (
          <SingleChoiceQuestion
            options={question.options}
            selectedOptionId={answer}
            onSelectOption={(optId) => onAnswerChange(question.id, optId)}
          />
        )}

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

        {question.type === 'drag_drop_categorize' && (
          <DragDropCategorizeQuestion
            dragDropItems={question.dragDropItems}
            categories={question.categories && question.categories.length > 0 ? question.categories : ['1) Điều kiện khách quan...', '2) Điều kiện chủ quan...']}
            placements={answer && typeof answer === 'object' ? answer : {}}
            onUpdatePlacements={(newPlacements) => onAnswerChange(question.id, newPlacements)}
          />
        )}

        {question.type === 'drag_drop_matching' && (
          <DragDropMatchingQuestion
            dragDropItems={question.dragDropItems}
            matchingTargets={question.matchingTargets || []}
            matches={answer && typeof answer === 'object' ? answer : {}}
            onUpdateMatches={(newMatches) => onAnswerChange(question.id, newMatches)}
          />
        )}
      </div>

    </div>
  );
}

