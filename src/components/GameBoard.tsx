
import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { Category, Question } from '../types/quiz';
import { User } from '../contexts/AuthContext';
import AgenticBot from './AgenticBot';

interface GameBoardProps {
  categories: Category[];
  answeredQuestions: Set<string>;
  onSelectQuestion: (question: Question) => void;
  score: number;
  user: User | null;
  onDashboard?: () => void;
  onBackToLanding: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  categories,
  answeredQuestions,
  onSelectQuestion,
  score,
  user,
  onDashboard,
  onBackToLanding
}) => {
  return (
    <div className="container mx-auto p-4">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button
            onClick={user ? onDashboard : onBackToLanding}
            variant="outline"
            className="border-gray-400 text-gray-300 hover:bg-gray-400/10 hover:text-gray-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {user ? 'Dashboard' : 'Back'}
          </Button>
          <h1 className="text-4xl font-bold text-white text-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cloud & Cyber Showdown
            </span>
          </h1>
        </div>
        
        <div className="text-right">
          <div className="text-3xl font-bold text-yellow-400 mb-2 flex items-center">
            <Trophy className="w-8 h-8 mr-2" />
            Score: {score}
          </div>
          {user && (
            <div className="text-white text-sm">
              Welcome, <span className="font-semibold text-blue-300">{user.username}</span>
            </div>
          )}
        </div>
      </div>

      {/* Game Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 max-w-7xl mx-auto">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-200"
          >
            <h2 className="text-lg font-bold text-center text-white mb-4 min-h-[3rem] flex items-center justify-center">
              {category.name}
            </h2>
            <div className="space-y-2">
              {category.questions.map((question) => {
                const isAnswered = answeredQuestions.has(question.id);
                return (
                  <button
                    key={question.id}
                    onClick={() => onSelectQuestion(question)}
                    disabled={isAnswered}
                    className={`w-full p-3 rounded font-semibold text-lg transition-all duration-200 relative ${
                      isAnswered
                        ? 'bg-green-600 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 shadow-lg'
                    }`}
                  >
                    {/* Money box glow effect for unanswered questions */}
                    {!isAnswered && (
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-green-400/10 rounded"></div>
                    )}
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center">
                      {isAnswered ? (
                        <span className="flex items-center">
                          ✅ <span className="ml-1">Earned!</span>
                        </span>
                      ) : (
                        <span className="flex items-center">
                          💰 <span className="ml-1">${question.points}</span>
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Agentic Bot */}
      <AgenticBot 
        score={score}
        answeredQuestions={answeredQuestions.size}
        totalQuestions={categories.reduce((total, cat) => total + cat.questions.length, 0)}
      />
    </div>
  );
};

export default GameBoard;
