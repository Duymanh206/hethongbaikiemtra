import React from 'react';
import { Bookmark, AlertTriangle } from 'lucide-react';
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
  onToggleMarkForReview
}) {
  if (!question) return null;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 relative min-h-[420px]">
      
      {/* Top Card Row: Question Index & "Xem lại câu này" checkbox matching user photo */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-blue-50 text-blue-800">
            CÂU {questionIndex + 1} / {totalQuestions}
          </span>
          <span className="text-xs text-slate-400 font-medium">
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
          <span className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${
            isMarkedForReview ? 'text-amber-700 font-bold' : 'text-slate-500 group-hover:text-slate-800'
          }`}>
            <Bookmark className={`w-3.5 h-3.5 ${isMarkedForReview ? 'fill-amber-500 text-amber-600' : 'text-slate-400'}`} />
            Xem lại câu này
          </span>
        </label>
      </div>

      {/* Question Content & Title */}
      <div className="mt-5 space-y-2">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
          <span className="text-blue-700 font-extrabold mr-2">Câu {questionIndex + 1}:</span>
          {question.content}
        </h3>

        {/* Badge chỉ dẫn nếu có */}
        {question.instructionBadge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-medium">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{question.instructionBadge}</span>
          </div>
        )}
      </div>

      {/* Render 5 Question Types */}
      <div className="mt-4">
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
              '1) Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân:',
              '2) Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử:'
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
  );
}
