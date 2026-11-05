import React, { useState } from 'react';
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
import AuthModal from './components/AuthModal';
import { AuthProvider } from './context/AuthContext';

function MainApp() {
  const [activePage, setActivePage] = useState('explore');
  const [selectedQuizId, setSelectedQuizId] = useState('quiz_cnxhkh_05');
  const [lastAttemptId, setLastAttemptId] = useState(null);

  // Navigation handlers
  const handleSelectQuiz = (quizId) => {
    setSelectedQuizId(quizId);
    setActivePage('quiz-detail');
  };

  const handleStartExam = (quizId) => {
    setSelectedQuizId(quizId);
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

