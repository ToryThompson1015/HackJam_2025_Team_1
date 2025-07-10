
import React, { useState } from 'react';
import LandingPage from '../components/LandingPage';
import GameBoard from '../components/GameBoard';
import QuestionModal from '../components/QuestionModal';
import ResultsPage from '../components/ResultsPage';
import { Question } from '../types/quiz';
import { quizData } from '../data/quizData';

const Index = () => {
  const [gameState, setGameState] = useState<'landing' | 'playing' | 'results'>('landing');
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showModal, setShowModal] = useState(false);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setAnsweredQuestions(new Set());
  };

  const selectQuestion = (question: Question) => {
    if (answeredQuestions.has(question.id)) return;
    setCurrentQuestion(question);
    setShowModal(true);
  };

  const handleAnswer = (selectedAnswer: string, isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + currentQuestion!.points);
    }
    
    setAnsweredQuestions(prev => new Set([...prev, currentQuestion!.id]));
    
    setTimeout(() => {
      setShowModal(false);
      setCurrentQuestion(null);
      
      // Check if all questions are answered
      if (answeredQuestions.size + 1 >= quizData.categories.reduce((total, cat) => total + cat.questions.length, 0)) {
        setTimeout(() => setGameState('results'), 500);
      }
    }, 2000);
  };

  const resetGame = () => {
    setGameState('landing');
    setScore(0);
    setAnsweredQuestions(new Set());
    setCurrentQuestion(null);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {gameState === 'landing' && <LandingPage onStart={startGame} />}
      
      {gameState === 'playing' && (
        <>
          <GameBoard
            categories={quizData.categories}
            answeredQuestions={answeredQuestions}
            onSelectQuestion={selectQuestion}
            score={score}
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
