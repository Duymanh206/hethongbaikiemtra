import React, { useState } from 'react';
import { Bookmark, AlertTriangle, ArrowRight, ArrowLeft, BookOpen, ZoomIn, ZoomOut, Image as ImageIcon } from 'lucide-react';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import DragDropCategorizeQuestion from './DragDropCategorizeQuestion';
import DragDropMatchingQuestion from './DragDropMatchingQuestion';
import TrueFalseMatrixQuestion from './TrueFalseMatrixQuestion';
import ListeningAudioPlayer from './english/ListeningAudioPlayer';
import SentenceRearrangeQuestion from './english/SentenceRearrangeQuestion';
import FillBlankQuestion from './english/FillBlankQuestion';

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
  const [passageFontSize, setPassageFontSize] = useState('text-sm');

  if (!question) return null;

  const hasPassage = !!question.passageText;
  const hasAudio = !!question.audioUrl || !!question.listeningScript || question.type === 'listening';

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 lg:p-8 shadow-sm border border-slate-200/90 relative min-h-[480px] w-full flex flex-col justify-between">
      
      <div>
        {/* Top Card Row: Question Index & "Xem lại câu này" checkbox */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200/60">
              CÂU {questionIndex + 1} / {totalQuestions}
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium">
              ({question.points || 1.0} điểm)
            </span>
            {question.topicName && (
              <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg truncate max-w-[280px]">
                {question.topicName}
              </span>
            )}
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

        {/* Listening Track Player (If audio question) */}
        {hasAudio && (
          <ListeningAudioPlayer
            audioUrl={question.audioUrl}
            listeningScript={question.listeningScript}
            title={question.passageTitle || 'Đoạn Băng Nghe Tiếng Anh (Listening Track)'}
          />
        )}

        {/* SPLIT VIEW (If Question has a Reading Comprehension Passage) */}
        {hasPassage ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5">
            {/* Left Column: Sticky Reading Passage */}
            <div className="lg:col-span-6 bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-200/90 flex flex-col justify-between max-h-[600px] overflow-y-auto">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>{question.passageTitle || 'Đoạn Văn Bản Đọc Hiểu (Reading Passage)'}</span>
                  </div>
                  
                  {/* Font Size Adjuster */}
                  <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setPassageFontSize('text-xs')}
                      className={`px-1.5 py-0.5 rounded font-mono ${passageFontSize === 'text-xs' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                      title="Chữ nhỏ"
                    >
                      A-
                    </button>
                    <button
                      type="button"
                      onClick={() => setPassageFontSize('text-sm')}
                      className={`px-1.5 py-0.5 rounded font-mono ${passageFontSize === 'text-sm' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                      title="Chữ vừa"
                    >
                      A
                    </button>
                    <button
                      type="button"
                      onClick={() => setPassageFontSize('text-base')}
                      className={`px-1.5 py-0.5 rounded font-mono ${passageFontSize === 'text-base' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                      title="Chữ lớn"
                    >
                      A+
                    </button>
                  </div>
                </div>

                <div className={`text-slate-800 leading-relaxed whitespace-pre-line ${passageFontSize}`}>
                  {question.passageText}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 italic">
                💡 Mẹo: Bạn có thể cuộn đọc đoạn văn ở cột này mà không bị trôi câu hỏi. Bôi đen từ bất kỳ để tra từ điển nhanh.
              </div>
            </div>

            {/* Right Column: Question Content & Options */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                  <span className="text-blue-700 font-extrabold mr-2">Câu {questionIndex + 1}:</span>
                  <span dangerouslySetInnerHTML={{ __html: question.content }} />
                </h3>

                {question.instructionBadge && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/90 text-xs font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{question.instructionBadge}</span>
                  </div>
                )}
              </div>

              {/* Options */}
              <SingleChoiceQuestion
                options={question.options}
                selectedOptionId={answer}
                onSelectOption={(optId) => onAnswerChange(question.id, optId)}
              />
            </div>
          </div>
        ) : (
          /* STANDARD VIEW (When No Long Passage) */
          <>
            {/* Question Content & Title */}
            <div className="mt-5 space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                <span className="text-blue-700 font-extrabold mr-2">Câu {questionIndex + 1}:</span>
                <span dangerouslySetInnerHTML={{ __html: question.content }} />
              </h3>

              {/* Badge chỉ dẫn nếu có */}
              {question.instructionBadge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/90 text-xs sm:text-sm font-semibold">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{question.instructionBadge}</span>
                </div>
              )}

              {/* Optional Question Image (Useful for Primary English) */}
              {question.imageUrl && (
                <div className="my-3 max-w-sm rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                  <img src={question.imageUrl} alt="Hình minh họa câu hỏi" className="w-full h-auto object-cover" />
                </div>
              )}
            </div>

            {/* Render Question Types */}
            <div className="mt-6 w-full">
              {/* Type: Single Choice, Phonetics, Listening single choice */}
              {(question.type === 'single_choice' || question.type === 'phonetics' || question.type === 'listening' || question.type === 'reading_comprehension') && (
                <SingleChoiceQuestion
                  options={question.options}
                  selectedOptionId={answer}
                  onSelectOption={(optId) => onAnswerChange(question.id, optId)}
                />
              )}

              {/* Type: Sentence Rearrangement */}
              {question.type === 'sentence_rearrange' && (
                <SentenceRearrangeQuestion
                  scrambledWords={question.scrambledWords || []}
                  answer={answer}
                  onAnswerChange={(newAnswer) => onAnswerChange(question.id, newAnswer)}
                />
              )}

              {/* Type: Fill in the blank / Cloze */}
              {question.type === 'fill_blank' && (
                <FillBlankQuestion
                  content={question.content}
                  blanks={question.blanks || []}
                  answer={answer}
                  onAnswerChange={(newAnswer) => onAnswerChange(question.id, newAnswer)}
                />
              )}

              {/* Type: True/False Matrix */}
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

              {/* Type: Drag & Drop Categorization */}
              {question.type === 'drag_drop_categorize' && (
                <DragDropCategorizeQuestion
                  dragDropItems={question.dragDropItems}
                  categories={question.categories && question.categories.length > 0 ? question.categories : [
                    'Nhóm A',
                    'Nhóm B'
                  ]}
                  placements={answer && typeof answer === 'object' ? answer : {}}
                  onUpdatePlacements={(newPlacements) => onAnswerChange(question.id, newPlacements)}
                />
              )}

              {/* Type: Drag & Drop Matching */}
              {question.type === 'drag_drop_matching' && (
                <DragDropMatchingQuestion
                  dragDropItems={question.dragDropItems}
                  matchingTargets={question.matchingTargets || []}
                  matches={answer && typeof answer === 'object' ? answer : {}}
                  onUpdateMatches={(newMatches) => onAnswerChange(question.id, newMatches)}
                />
              )}

              {/* Type: Multiple Choice */}
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
          </>
        )}
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
