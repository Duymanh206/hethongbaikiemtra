import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExplorePage from './pages/ExplorePage';
import QuizDetailPage from './pages/QuizDetailPage';
import ExamTakingPage from './pages/ExamTakingPage';
import ExamResultPage from './pages/ExamResultPage';
import CreateQuizPage from './pages/CreateQuizPage';
import BattleLobbyPage from './pages/BattleLobbyPage';
import HistoryPage from './pages/HistoryPage';
import AnalyticsPage from './pages/AnalyticsPage';
import GuidePage from './pages/GuidePage';
import FeedbackPage from './pages/FeedbackPage';
import LoginPage from './pages/LoginPage';
import AuthModal from './components/AuthModal';
import { AuthProvider, useAuth } from './context/AuthContext';

function MainApp() {
  const { user } = useAuth();

  const [activePage, setActivePage] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('pin') || params.get('battle') || params.get('room')) {
        return 'battle-lobby';
      }
    } catch {}
    return 'explore';
  });

  const [selectedQuizId, setSelectedQuizId] = useState('quiz_cnxhkh_05');
  const [selectedExamMode, setSelectedExamMode] = useState('practice');
  const [selectedTopicIds, setSelectedTopicIds] = useState([]);
  const [lastAttemptId, setLastAttemptId] = useState(null);

  // AUTHENTICATION GATE:
  // If user is not logged in, show the full-screen Login & Register portal
  // The user CANNOT enter the inside interface or do exams until they log in or register!
  if (!user) {
    return <LoginPage />;
  }

  // Navigation handlers
  const handleSelectQuiz = (quizId, mode = 'practice') => {
    setSelectedQuizId(quizId);
    setSelectedExamMode(mode);
    setSelectedTopicIds([]);
    setActivePage('quiz-detail');
  };

  const handleStartExam = (quizId, mode = 'practice', topicIds = []) => {
    setSelectedQuizId(quizId);
    setSelectedExamMode(mode);
    setSelectedTopicIds(topicIds || []);
    setActivePage('exam');
  };

  const handleExamSubmitted = (attemptId) => {
    setLastAttemptId(attemptId);
    setActivePage('exam-result');
  };

  const handleStartBattleForQuiz = (quizId) => {
    setSelectedQuizId(quizId);
    setActivePage('battle-lobby');
  };

  const handleReviewAttempt = (attemptId) => {
    setLastAttemptId(attemptId);
    setActivePage('exam-result');
  };

  const isExamMode = activePage === 'exam';

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 font-sans text-slate-800">
      
      {/* Standard Navbar (Hidden during exam taking mode) */}
      {!isExamMode && (
        <Navbar activePage={activePage} setActivePage={setActivePage} />
      )}

      {/* Main View Router */}
      <div className="flex-1">
        {activePage === 'explore' && (
          <ExplorePage
            onSelectQuiz={handleSelectQuiz}
            onStartExam={handleStartExam}
            onStartBattleForQuiz={handleStartBattleForQuiz}
          />
        )}

        {activePage === 'quiz-detail' && (
          <QuizDetailPage
            quizId={selectedQuizId}
            onStartExam={handleStartExam}
            onStartBattle={handleStartBattleForQuiz}
            onBackToExplore={() => setActivePage('explore')}
          />
        )}

        {activePage === 'exam' && (
          <ExamTakingPage
            quizId={selectedQuizId}
            mode={selectedExamMode}
            selectedTopicIds={selectedTopicIds}
            onExamSubmitted={handleExamSubmitted}
            onCancelExam={() => setActivePage('explore')}
          />
        )}

        {activePage === 'exam-result' && (
          <ExamResultPage
            attemptId={lastAttemptId}
            onRetakeQuiz={handleStartExam}
            onGoToQuizDetail={handleSelectQuiz}
            onGoToExplore={() => setActivePage('explore')}
          />
        )}

        {activePage === 'create' && (
          <CreateQuizPage
            onQuizCreated={(newQuizId) => {
              setSelectedQuizId(newQuizId);
              setActivePage('quiz-detail');
            }}
          />
        )}

        {activePage === 'battle-lobby' && (
          <BattleLobbyPage
            defaultQuizId={selectedQuizId}
            onBackToExplore={() => setActivePage('explore')}
          />
        )}

        {activePage === 'history' && (
          <HistoryPage onReviewAttempt={handleReviewAttempt} />
        )}

        {activePage === 'analytics' && (
          <AnalyticsPage />
        )}

        {activePage === 'guide' && (
          <GuidePage />
        )}

        {activePage === 'feedback' && (
          <FeedbackPage />
        )}
      </div>

      {/* Standard Footer (Hidden during exam taking mode) */}
      {!isExamMode && <Footer />}

      {/* Global Authentication Modal (Login / Register) */}
      <AuthModal />

    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
