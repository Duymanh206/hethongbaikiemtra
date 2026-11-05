import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  RotateCcw, 
  BookOpen, 
  Grid, 
  Star, 
  Check, 
  X, 
  Lightbulb, 
  Clock, 
  CheckCircle2, 
  XCircle,
  Share2,
  Download
} from 'lucide-react';
import AIExplanationModal from '../components/AIExplanationModal';

export default function ExamResultPage({
  attemptId,
  onRetakeQuiz,
  onGoToQuizDetail,
  onGoToExplore
}) {
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Review & Rating State
  const [ratingStars, setRatingStars] = useState(5);
  const [ratingComment, setRatingComment] = useState('');
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [submittingRating, setSubmittingRating] = useState(false);

  // AI Explanation Modal State
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState(null);

  useEffect(() => {
    if (!attemptId) return;
    setLoading(true);
    fetch(`/api/attempts/${attemptId}/result`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setResultData(data);
        } else {
          setError(data.message || 'Không thể tải kết quả');
        }
      })
      .catch(err => {
        console.error(err);
        setError('Lỗi kết nối tới máy chủ');
      })
      .finally(() => setLoading(false));
  }, [attemptId]);

  const handleSubmitRating = async (e) => {
    e.preventDefault();
    if (!resultData?.quiz?.id) return;
    setSubmittingRating(true);
    try {
      const res = await fetch(`/api/quizzes/${resultData.quiz.id}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating: ratingStars,
          comment: ratingComment,
          userName: resultData.attempt.candidateName || 'Nguyễn Văn An'
        })
      });
      const data = await res.json();
      if (data.success) {
        setRatingSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmittingRating(false);
    }
  };

  const handleOpenAiExplanation = async (question) => {
    setAiModalOpen(true);
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: question.id,
          userAnswer: question.userAnswer
        })
      });
      const data = await res.json();
      if (data.success) {
        setAiExplanation(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm font-bold text-slate-600 mt-4">Đang tổng hợp bảng điểm và phân tích kết quả...</p>
      </div>
    );
  }

  if (error || !resultData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
        <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-200 max-w-md">
          <p className="text-base font-bold text-rose-600">{error || 'Không tìm thấy kết quả bài thi'}</p>
          <button
            onClick={onGoToExplore}
            className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
          >
            Quay lại trang khám phá
          </button>
        </div>
      </div>
    );
  }

  const { quiz, attempt, detailedReview = [] } = resultData;
  const isPassed = attempt.score >= 5.0;

  return (
    <div className="min-h-screen bg-[#f4f6f9] pb-24">
      {/* Top Banner */}
      <div className="bg-white border-b border-slate-200 py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            {quiz.title}
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Kết Quả Bài Kiểm Tra
          </h1>

          {/* Large Scale 10 Score Display (e.g. 3.9 điểm / 10) */}
          <div className="flex flex-col items-center justify-center my-6">
            <div className={`p-8 rounded-3xl border-2 flex flex-col items-center justify-center min-w-[280px] shadow-lg transition-all ${
              isPassed 
                ? 'bg-gradient-to-b from-emerald-50 to-white border-emerald-300 shadow-emerald-500/10'
                : 'bg-gradient-to-b from-rose-50 to-white border-rose-300 shadow-rose-500/10'
            }`}>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">
                Điểm số đạt được
              </span>
              <div className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900">
                <span className={isPassed ? 'text-emerald-600' : 'text-rose-600'}>
                  {attempt.score.toFixed(1)}
                </span>
                <span className="text-xl sm:text-2xl text-slate-400 font-bold ml-1">/ 10</span>
              </div>
              <div className="mt-3 text-sm font-bold text-slate-600">
                Đúng {attempt.correctCount} / {attempt.totalCount} câu ({attempt.percentage}%)
              </div>
            </div>
          </div>

          {/* Quick Navigation Buttons: [Làm lại], [Trang quiz], [Quiz khác] */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onRetakeQuiz(quiz.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại</span>
            </button>

            <button
              onClick={() => onGoToQuizDetail(quiz.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs active:scale-95 transition-all"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Trang quiz</span>
            </button>

            <button
              onClick={onGoToExplore}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs active:scale-95 transition-all"
            >
              <Grid className="w-4 h-4 text-slate-500" />
              <span>Quiz khác</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 space-y-8">
        
        {/* Rating Box: "Đánh giá quiz này" */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h3 className="font-bold text-base text-slate-900">Đánh giá quiz này</h3>
          </div>

          {ratingSubmitted ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center">
              ✓ Cảm ơn bạn đã gửi đánh giá! Nhận xét của bạn giúp cải thiện chất lượng đề thi.
            </div>
          ) : (
            <form onSubmit={handleSubmitRating} className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium mr-2">Mức độ hài lòng:</span>
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRatingStars(s)}
                    className="p-1 hover:scale-125 transition-transform"
                  >
                    <Star className={`w-6 h-6 ${s <= ratingStars ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
                  </button>
                ))}
              </div>

              <textarea
                value={ratingComment}
                onChange={(e) => setRatingComment(e.target.value)}
                rows={2}
                placeholder="Nhập cảm nhận của bạn về độ khó, độ chính xác của câu hỏi..."
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={submittingRating}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  {submittingRating ? 'Đang gửi...' : 'Gửi đánh giá'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Detailed Review Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <span>Xem lại bài làm chi tiết</span>
              <span className="text-xs font-medium text-slate-400">
                ({detailedReview.length} câu)
              </span>
            </h2>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Đáp án đúng (✓)
              </span>
              <span className="flex items-center gap-1.5 text-rose-700">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span> Đã chọn sai (✕)
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {detailedReview.map((q, idx) => {
              const isCorrect = q.isCorrect;

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-3xl p-6 shadow-xs border transition-all ${
                    isCorrect ? 'border-emerald-200' : 'border-rose-200'
                  }`}
                >
                  {/* Question header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white ${
                        isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        isCorrect ? 'text-emerald-700' : 'text-rose-700'
                      }`}>
                        {isCorrect ? 'Chính xác' : 'Chưa chính xác'}
                      </span>
                    </div>

                    {/* AI Explanation Button */}
                    <button
                      onClick={() => handleOpenAiExplanation(q)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200/80 transition-all active:scale-95"
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-indigo-600" />
                      <span>💡 Giải thích chi tiết</span>
                    </button>
                  </div>

                  {/* Question content */}
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-4 leading-relaxed">
                    {q.content}
                  </h4>

                  {/* Single & Multiple Choice Options Display */}
                  {(q.type === 'single_choice' || q.type === 'multiple_choice') && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options?.map(opt => {
                        const isCorrectOption = opt.isCorrect;
                        const isUserPicked = opt.isUserSelected;

                        let styleClass = 'bg-white border-slate-200 text-slate-700';
                        let icon = null;

                        if (isCorrectOption) {
                          styleClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                          icon = <Check className="w-4 h-4 text-emerald-700 shrink-0" />;
                        } else if (isUserPicked && !isCorrectOption) {
                          styleClass = 'bg-rose-50 border-rose-500 text-rose-950 font-semibold ring-1 ring-rose-500';
                          icon = <X className="w-4 h-4 text-rose-700 shrink-0" />;
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`flex items-start justify-between gap-3 p-3.5 rounded-xl border-2 text-xs leading-relaxed ${styleClass}`}
                          >
                            <div className="flex items-start gap-2">
                              <span className="font-bold shrink-0">{opt.label}.</span>
                              <span>{opt.content}</span>
                            </div>
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* True / False Matrix Review */}
                  {q.type === 'true_false_matrix' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      {q.statements?.map(stmt => {
                        const isStmtOk = stmt.isStatementCorrect;
                        const userVal = stmt.userSelectedValue === 'dung' ? 'Đúng' : stmt.userSelectedValue === 'sai' ? 'Sai' : 'Chưa chọn';
                        const correctVal = stmt.correctValue === 'dung' ? 'Đúng' : 'Sai';
                        return (
                          <div
                            key={stmt.id}
                            className={`p-3 rounded-xl border text-xs leading-relaxed flex flex-col justify-between ${
                              isStmtOk ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/70 border-rose-300'
                            }`}
                          >
                            <div className="font-semibold text-slate-800 mb-2">{stmt.text}</div>
                            <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px]">
                              <span>Bạn chọn: <strong className={isStmtOk ? 'text-emerald-700' : 'text-rose-700'}>{userVal}</strong></span>
                              <span>Chuẩn: <strong className="text-emerald-700">{correctVal}</strong></span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Drag and Drop Categorization Review */}
                  {q.type === 'drag_drop_categorize' && (
                    <div className="space-y-2 mt-3">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Chi tiết phân loại:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {q.dragDropItems?.map(item => {
                          const isMatch = item.correctTarget === item.userPlacedTarget;
                          return (
                            <div
                              key={item.id}
                              className={`p-3 rounded-xl border text-xs leading-relaxed flex flex-col justify-between ${
                                isMatch ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/70 border-rose-300'
                              }`}
                            >
                              <div className="font-semibold text-slate-800 mb-2">
                                {item.itemText}
                              </div>
                              <div className="space-y-1 text-[11px] pt-2 border-t border-slate-200/60">
                                <div>
                                  <span className="text-slate-400">Đáp án chuẩn: </span>
                                  <strong className="text-emerald-700">{item.correctTarget}</strong>
                                </div>
                                <div>
                                  <span className="text-slate-400">Bạn đã xếp: </span>
                                  <strong className={isMatch ? 'text-emerald-700' : 'text-rose-700'}>
                                    {item.userPlacedTarget || 'Chưa xếp'}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Drag and Drop Matching Review */}
                  {q.type === 'drag_drop_matching' && (
                    <div className="space-y-2 mt-3">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Chi tiết ghép nối:
                      </div>
                      <div className="space-y-2">
                        {q.dragDropItems?.map(item => {
                          const isMatch = item.correctTarget === item.userPlacedTarget;
                          return (
                            <div
                              key={item.id}
                              className={`p-3 rounded-xl border text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${
                                isMatch ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/70 border-rose-300'
                              }`}
                            >
                              <span className="font-semibold text-slate-800">
                                {item.itemText}
                              </span>
                              <div className="flex items-center gap-2 text-[11px]">
                                <span className="text-slate-400">Ghép với:</span>
                                <span className={`px-2 py-0.5 rounded font-bold ${
                                  isMatch ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                }`}>
                                  {item.userPlacedTarget || 'Chưa ghép'}
                                </span>
                                {!isMatch && (
                                  <span className="text-slate-400">
                                    (Chuẩn: <strong className="text-emerald-700">{item.correctTarget}</strong>)
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Inline Explanation preview */}
                  {q.explanation && (
                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                      💡 <strong>Giải thích tóm tắt:</strong> {q.explanation}
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* AI Explanation Deep Modal */}
      <AIExplanationModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        explanationData={aiExplanation}
        isLoading={aiLoading}
      />
    </div>
  );
}

