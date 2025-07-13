
import React, { useState, useEffect } from 'react';
import LandingPage from '../components/LandingPage';
import GameBoard from '../components/GameBoard';
import QuestionModal from '../components/QuestionModal';
import ResultsPage from '../components/ResultsPage';
import Dashboard from '../components/Dashboard';
import { Question } from '../types/quiz';
import { quizData } from '../data/quizData';
import { useAuth } from '../contexts/AuthContext';

const Index = () => {
  const [gameState, setGameState] = useState<'landing' | 'dashboard' | 'playing' | 'results'>('landing');
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { user, updateProgress } = useAuth();

  // Load user progress when user logs in
  useEffect(() => {
    if (user?.progress) {
      setScore(user.progress.totalScore);
      setAnsweredQuestions(new Set(user.progress.completedQuestions));
    }
  }, [user]);

  // Redirect to dashboard if user is logged in
  useEffect(() => {
    if (user && gameState === 'landing') {
      setGameState('dashboard');
    }
  }, [user, gameState]);

  const startGame = () => {
    setGameState('playing');
    // Don't reset score and answered questions if user has progress
    if (!user?.progress?.completedQuestions.length) {
      setScore(0);
      setAnsweredQuestions(new Set());
    }
  };

  const selectQuestion = (question: Question) => {
    if (answeredQuestions.has(question.id)) return;
    setCurrentQuestion(question);
    setShowModal(true);
  };

  const handleAnswer = (selectedAnswer: string, isCorrect: boolean) => {
    let newScore = score;
    if (isCorrect) {
      newScore = score + currentQuestion!.points;
      setScore(newScore);
    }
    
    const newAnsweredQuestions = new Set([...answeredQuestions, currentQuestion!.id]);
    setAnsweredQuestions(newAnsweredQuestions);
    
    // Update progress in auth context
    if (user) {
      updateProgress(Array.from(newAnsweredQuestions), newScore);
    }
    
    setTimeout(() => {
      setShowModal(false);
      setCurrentQuestion(null);
      
      // Check if all questions are answered
      if (newAnsweredQuestions.size >= quizData.categories.reduce((total, cat) => total + cat.questions.length, 0)) {
        setTimeout(() => setGameState('results'), 500);
      }
    }, 2000);
  };

  const resetGame = () => {
    if (user) {
      setGameState('dashboard');
    } else {
      setGameState('landing');
    }
    setScore(0);
    setAnsweredQuestions(new Set());
    setCurrentQuestion(null);
    setShowModal(false);
  };

  const goToDashboard = () => {
    setGameState('dashboard');
  };

  const goToLanding = () => {
    setGameState('landing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {gameState === 'landing' && <LandingPage onStart={startGame} />}
      
      {gameState === 'dashboard' && user && (
        <Dashboard onStartQuiz={startGame} onBackToLanding={goToLanding} />
      )}
      
      {gameState === 'playing' && (
        <>
          <GameBoard
            categories={quizData.categories}
            answeredQuestions={answeredQuestions}
            onSelectQuestion={selectQuestion}
            score={score}
            user={user}
            onDashboard={goToDashboard}
            onBackToLanding={goToLanding}
          />
          
          {showModal && currentQuestion && (
            <QuestionModal
              question={currentQuestion}
              onAnswer={handleAnswer}
              onClose={() => setShowModal(false)}
            />
          )}
        </>
      )}
      
      {gameState === 'results' && (
        <ResultsPage 
          score={score} 
          totalQuestions={quizData.categories.reduce((total, cat) => total + cat.questions.length, 0)}
          onRestart={resetGame}
        />
      )}
    </div>
  );
};

export default Index;
