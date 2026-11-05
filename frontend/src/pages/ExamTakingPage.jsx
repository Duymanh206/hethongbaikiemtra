import React, { useState, useEffect, useRef } from 'react';
import ExamHeader from '../components/ExamHeader';
import ExamFooter from '../components/ExamFooter';
import QuestionCard from '../components/QuestionCard';
import IncompleteModal from '../components/IncompleteModal';
import SubmitConfirmModal from '../components/SubmitConfirmModal';
import AntiCheatModal from '../components/AntiCheatModal';
import ReviewAnswersModal from '../components/ReviewAnswersModal';
import { useAuth } from '../context/AuthContext';

export default function ExamTakingPage({
  quizId,
  mode = 'practice',
  selectedTopicIds = [],
  courseName = '',
  onExamSubmitted,
  onCancelExam
}) {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [quizInfo, setQuizInfo] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Attempt State
  const [attemptId, setAttemptId] = useState(null);
  const defaultDurationSeconds = mode === 'practice' ? 5400 : (mode === 'period60' ? 3600 : (mode === 'final45' ? 2700 : 900));
  const [timeRemaining, setTimeRemaining] = useState(defaultDurationSeconds);
  const [totalTime, setTotalTime] = useState(defaultDurationSeconds);
  const [answers, setAnswers] = useState({}); // { [questionId]: answerValue }
  const [markedForReview, setMarkedForReview] = useState([]); // [questionIndices]

  // Modals
  const [incompleteModalOpen, setIncompleteModalOpen] = useState(false);
  const [submitConfirmOpen, setSubmitConfirmOpen] = useState(false);
  const [reviewAnswersOpen, setReviewAnswersOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Anti-Cheat State
  const [antiCheatModalOpen, setAntiCheatModalOpen] = useState(false);
  const [violationsCount, setViolationsCount] = useState(0);
  const [maxViolations, setMaxViolations] = useState(3);
  const [violationReason, setViolationReason] = useState('');

  const timerRef = useRef(null);
  const attemptIdRef = useRef(attemptId);
  attemptIdRef.current = attemptId;
  const answersRef = useRef(answers);
  answersRef.current = answers;

  // LocalStorage Key
  const topicsKey = Array.isArray(selectedTopicIds) ? selectedTopicIds.slice().sort().join('_') : '';
  const courseKey = courseName ? encodeURIComponent(courseName) : '';
  const STORAGE_KEY = `exam_progress_${quizId}_${mode}_${topicsKey}_${courseKey}_${user?.studentId || 'guest'}`;

  // 1. Initialize Exam
  useEffect(() => {
    async function initExam() {
      try {
        setLoading(true);

        // Fetch Exam Questions with Mode, courseName and selected Topic IDs
        const modeQuery = mode ? `?mode=${encodeURIComponent(mode)}` : '';
        const topicsQuery = (Array.isArray(selectedTopicIds) && selectedTopicIds.length > 0)
          ? `&quizIds=${encodeURIComponent(selectedTopicIds.join(','))}`
          : '';
        const courseQuery = courseName ? `&courseName=${encodeURIComponent(courseName)}` : '';
        const qRes = await fetch(`/api/quizzes/${quizId}/exam${modeQuery}${topicsQuery}${courseQuery}`);
        const qData = await qRes.json();
        if (!qData.success) {
          alert(qData.message || 'Không thể tải câu hỏi');
          onCancelExam();
          return;
        }

        setQuizInfo(qData.quiz);
        setQuestions(qData.questions);
        const quizDuration = (qData.quiz.durationMinutes || (mode === 'practice' ? 90 : 15)) * 60;
        setTotalTime(quizDuration);

        // Check LocalStorage for crash recovery
        const savedLocal = localStorage.getItem(STORAGE_KEY);
        let restoredAnswers = {};
        let restoredMarked = [];
        let restoredTime = quizDuration;
        let restoredAttemptId = null;

        if (savedLocal) {
          try {
            const parsed = JSON.parse(savedLocal);
            restoredAnswers = parsed.answers || {};
            restoredMarked = parsed.markedForReview || [];
            if (parsed.timeRemaining && parsed.timeRemaining > 0) {
              // Ensure practice mode doesn't get clamped to legacy 15min (900s)
              if (mode === 'practice' && parsed.timeRemaining <= 900 && quizDuration === 5400) {
                restoredTime = 5400;
              } else {
                restoredTime = parsed.timeRemaining;
              }
            }
            restoredAttemptId = parsed.attemptId;
          } catch (e) {
            console.error('Failed to parse local storage cache', e);
          }
        }

        // Start or continue attempt on backend
        let attId = restoredAttemptId;
        if (!attId) {
          const attRes = await fetch('/api/attempts/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              quizId,
              mode,
              questionIds: qData.questions.map(q => q.id),
              durationMinutes: qData.quiz.durationMinutes,
              studentId: user?.studentId || 'dtc245200060',
              candidateName: user?.fullName || 'Hoàng Duy Mạnh'
            })
          });
          const attData = await attRes.json();
          if (attData.success) {
            attId = attData.attemptId;
            restoredTime = attData.remainingSeconds || quizDuration;
            setMaxViolations(attData.maxViolations || 3);
          }
        }

        setAttemptId(attId);
        setAnswers(restoredAnswers);
        setMarkedForReview(restoredMarked);
        setTimeRemaining(restoredTime);

        // Fullscreen request for proctoring
        if (qData.quiz.antiCheatEnabled) {
          try {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen().catch(() => {});
            }
          } catch (e) {}
        }
      } catch (err) {
        console.error('Init exam error:', err);
        alert('Lỗi khởi tạo bài thi');
      } finally {
        setLoading(false);
      }
    }

    initExam();
  }, [quizId, mode, topicsKey]);

  // 2. Timer Countdown & Auto-Save Loop
  useEffect(() => {
    if (loading || !attemptId) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeExpired();
          return 0;
        }
        const nextTime = prev - 1;

        // Save to LocalStorage
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({
            attemptId: attemptIdRef.current,
            answers: answersRef.current,
            markedForReview,
            timeRemaining: nextTime,
            savedAt: Date.now()
          }));
        } catch (e) {}

        // Background sync to server every 15 seconds
        if (nextTime % 15 === 0 && attemptIdRef.current) {
          fetch(`/api/attempts/${attemptIdRef.current}/sync`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              answers: answersRef.current,
              markedForReview,
              remainingSeconds: nextTime
            })
          }).catch(() => {});
        }

        return nextTime;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading, attemptId, markedForReview]);

  // 3. Anti-Cheat / Proctoring Listeners
  useEffect(() => {
    if (!quizInfo?.antiCheatEnabled || !attemptId) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        recordProctoringViolation('Thí sinh chuyển sang tab hoặc ứng dụng khác');
      }
    };

    const handleWindowBlur = () => {
      recordProctoringViolation('Thí sinh rời tiêu điểm khỏi cửa sổ bài thi');
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        recordProctoringViolation('Thí sinh thoát chế độ toàn màn hình');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [quizInfo, attemptId]);

  const recordProctoringViolation = async (reason) => {
    if (!attemptIdRef.current) return;
    setViolationReason(reason);
    setAntiCheatModalOpen(true);

    try {
      const res = await fetch(`/api/attempts/${attemptIdRef.current}/violation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason })
      });
      const data = await res.json();
      if (data.success) {
        setViolationsCount(data.violationsCount);
        if (data.shouldAutoSubmit) {
          alert('Bạn đã vi phạm quy chế thi quá số lần cho phép. Bài thi sẽ tự động bị đình chỉ và thu hồi!');
          handleFinalSubmit(true); // submit as disqualified
        }
      }
    } catch (e) {}
  };

  const handleReEnterFullscreen = () => {
    setAntiCheatModalOpen(false);
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch (e) {}
  };

  // 4. Checking question completion
  const isQuestionCompleted = (index) => {
    const q = questions[index];
    if (!q) return false;
    const ans = answers[q.id];

    if (q.type === 'single_choice' || q.type === 'phonetics' || q.type === 'listening' || q.type === 'reading_comprehension') {
      return !!ans;
    }
    if (q.type === 'sentence_rearrange') {
      return Array.isArray(ans) ? ans.length > 0 : !!ans;
    }
    if (q.type === 'fill_blank') {
      return typeof ans === 'object' && ans !== null ? Object.keys(ans).length > 0 : !!ans;
    }
    if (q.type === 'true_false_matrix') {
      return ans && typeof ans === 'object' && Object.keys(ans).length > 0;
    }
    if (q.type === 'multiple_choice') {
      const userSelected = Array.isArray(ans) ? ans : [];
      return userSelected.length > 0;
    }
    if (q.type === 'drag_drop_categorize') {
      // 2 bên không bằng nhau vẫn hoàn thành bình thường, chỉ cần có kéo thả thẻ
      return ans && typeof ans === 'object' && Object.keys(ans).length > 0;
    }
    if (q.type === 'drag_drop_matching') {
      return ans && typeof ans === 'object' && Object.keys(ans).length > 0;
    }
    return false;
  };

  // 5. Answer Change Handler
  const handleAnswerChange = (questionId, newAnswer) => {
    const updated = { ...answers, [questionId]: newAnswer };
    setAnswers(updated);

    // Immediate LocalStorage persist
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        attemptId,
        answers: updated,
        markedForReview,
        timeRemaining,
        savedAt: Date.now()
      }));
    } catch (e) {}
  };

  // Toggle Mark for review
  const handleToggleMarkForReview = () => {
    setMarkedForReview(prev => {
      if (prev.includes(currentQuestionIndex)) {
        return prev.filter(i => i !== currentQuestionIndex);
      } else {
        return [...prev, currentQuestionIndex];
      }
    });
  };

  // 6. Pre-Submission Check Logic (Section 1.2)
  const handleSubmitClick = () => {
    const incompleteIndices = [];
    questions.forEach((_, idx) => {
      if (!isQuestionCompleted(idx)) {
        incompleteIndices.push(idx);
      }
    });

    if (incompleteIndices.length > 0) {
      // Show Incomplete Modal
      setIncompleteModalOpen(true);
    } else {
      // Show Confirmation Modal
      setSubmitConfirmOpen(true);
    }
  };

  const handleTimeExpired = () => {
    alert('Hết giờ làm bài thi! Hệ thống đang tự động nộp bài của bạn.');
    handleFinalSubmit(false);
  };

  const handleFinalSubmit = async (isDisqualified = false) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      if (timerRef.current) clearInterval(timerRef.current);

      const durationSpent = totalTime - timeRemaining;
      const finalAttemptId = attemptId || attemptIdRef.current || `att_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
      const res = await fetch(`/api/attempts/${finalAttemptId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quizId,
          mode,
          quizTitle: quizInfo?.title || 'Bài kiểm tra',
          questionIds: questions.map(q => q.id),
          studentId: user?.studentId || 'dtc245200060',
          candidateName: user?.fullName || 'Hoàng Duy Mạnh',
          answers,
          durationSpent,
          violationsCount,
          isDisqualified
        })
      });

      const data = await res.json().catch(() => ({ success: true, attemptId: finalAttemptId }));
      if (data.success || data.attemptId) {
        // Clear local storage
        localStorage.removeItem(STORAGE_KEY);
        // Exit fullscreen
        try {
          if (document.fullscreenElement && document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          }
        } catch (e) {}

        onExamSubmitted(finalAttemptId);
      } else {
        console.warn('Submit warning, recovering attempt:', data.message);
        localStorage.removeItem(STORAGE_KEY);
        try {
          if (document.fullscreenElement && document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          }
        } catch (e) {}
        onExamSubmitted(finalAttemptId);
      }
    } catch (err) {
      console.error(err);
      const fallbackId = attemptId || attemptIdRef.current || `att_${Date.now()}`;
      localStorage.removeItem(STORAGE_KEY);
      onExamSubmitted(fallbackId);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm font-bold text-slate-700 mt-4">Đang khởi tạo đề thi & mã hóa bảo mật...</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isMarked = markedForReview.includes(currentQuestionIndex);

  // Incomplete indices for modal
  const incompleteIndices = questions
    .map((_, idx) => idx)
    .filter(idx => !isQuestionCompleted(idx));

  return (
    <div className="min-h-screen bg-[#f4f6f9] flex flex-col justify-between pb-44 sm:pb-32">
      {/* 1.1 Top Header Bar */}
      <ExamHeader
        candidate={{
          name: user?.fullName || 'Hoàng Duy Mạnh',
          studentId: user?.studentId || 'dtc245200060',
          avatar: user?.avatar
        }}
        timeRemaining={timeRemaining}
        totalTime={totalTime}
        onSubmitClick={handleSubmitClick}
        violationsCount={violationsCount}
        isAntiCheatActive={quizInfo?.antiCheatEnabled}
      />

      {/* Main Question Card Area (Full Width, Spacious) */}
      <main className="flex-1 w-full max-w-[98vw] 2xl:max-w-[1720px] mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-6">
        <QuestionCard
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          answer={answers[currentQuestion?.id]}
          onAnswerChange={handleAnswerChange}
          isMarkedForReview={isMarked}
          onToggleMarkForReview={handleToggleMarkForReview}
          onNextQuestion={() => {
            if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex(prev => prev + 1);
            }
          }}
          onPrevQuestion={() => {
            if (currentQuestionIndex > 0) {
              setCurrentQuestionIndex(prev => prev - 1);
            }
          }}
        />
      </main>

      {/* 1.1 Bottom Footer Bar */}
      <ExamFooter
        quizTitle={quizInfo?.title}
        modeBadge={quizInfo?.modeBadge}
        courseName={quizInfo?.courseName || quizInfo?.category}
        totalQuestions={questions.length}
        currentIndex={currentQuestionIndex}
        onSelectQuestion={(idx) => setCurrentQuestionIndex(idx)}
        answers={answers}
        isQuestionCompleted={isQuestionCompleted}
        markedForReview={markedForReview}
        onOpenReviewAnswers={() => setReviewAnswersOpen(true)}
        onSubmitClick={handleSubmitClick}
      />

      {/* Modals */}
      <ReviewAnswersModal
        isOpen={reviewAnswersOpen}
        onClose={() => setReviewAnswersOpen(false)}
        questions={questions}
        answers={answers}
        markedForReview={markedForReview}
        onJumpToQuestion={(idx) => setCurrentQuestionIndex(idx)}
        onSubmitExam={handleSubmitClick}
      />

      <IncompleteModal
        isOpen={incompleteModalOpen}
        onClose={() => setIncompleteModalOpen(false)}
        incompleteQuestionIndices={incompleteIndices}
        onJumpToQuestion={(idx) => setCurrentQuestionIndex(idx)}
        onConfirmSubmit={() => handleFinalSubmit(false)}
      />

      <SubmitConfirmModal
        isOpen={submitConfirmOpen}
        onClose={() => setSubmitConfirmOpen(false)}
        totalQuestions={questions.length}
        onConfirmSubmit={() => handleFinalSubmit(false)}
        isSubmitting={isSubmitting}
      />

      <AntiCheatModal
        isOpen={antiCheatModalOpen}
        violationsCount={violationsCount}
        maxViolations={maxViolations}
        violationReason={violationReason}
        onEnterFullscreen={handleReEnterFullscreen}
      />
    </div>
  );
}

