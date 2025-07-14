
import React from 'react';
import { ArrowLeft, Sparkles, Trophy } from 'lucide-react';
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
    <div className="container mx-auto p-4 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-500/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header with back button */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center space-x-4">
          <Button
            onClick={user ? onDashboard : onBackToLanding}
            variant="outline"
            className="border-gray-400 text-gray-300 hover:bg-gray-400/10 hover:text-gray-200 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {user ? 'Dashboard' : 'Back'}
          </Button>
          <h1 className="text-4xl font-bold text-white text-center animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cloud & Cyber Showdown
            </span>
          </h1>
        </div>
        
        <div className="text-right">
          <div className="text-3xl font-bold text-yellow-400 mb-2 animate-pulse flex items-center">
            <Trophy className="w-8 h-8 mr-2 animate-bounce" />
            Score: {score}
            <Sparkles className="w-6 h-6 ml-2 animate-spin" />
          </div>
          {user && (
            <div className="text-white text-sm animate-fade-in">
              Welcome, <span className="font-semibold text-blue-300">{user.username}</span>
            </div>
          )}
        </div>
      </div>

      {/* Game Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 max-w-7xl mx-auto relative z-10">
        {categories.map((category, categoryIndex) => (
          <div 
            key={category.name} 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in hover:bg-white/20 transition-all duration-300"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h2 className="text-lg font-bold text-center text-white mb-4 min-h-[3rem] flex items-center justify-center animate-pulse">
              {category.name}
            </h2>
            <div className="space-y-2">
              {category.questions.map((question, questionIndex) => {
                const isAnswered = answeredQuestions.has(question.id);
                return (
                  <button
                    key={question.id}
                    onClick={() => onSelectQuestion(question)}
                    disabled={isAnswered}
                    className={`w-full p-3 rounded font-semibold text-lg transition-all duration-300 transform relative overflow-hidden ${
                      isAnswered
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white cursor-not-allowed animate-pulse'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce'
                    }`}
                    style={{ animationDelay: `${questionIndex * 0.1}s` }}
                  >
                    {/* Money box glow effect */}
                    {!isAnswered && (
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 animate-pulse"></div>
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
                    
                    {/* Shimmer effect for unanswered questions */}
                    {!isAnswered && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Agentic Bot */}
      <AgenticBot />
    </div>
  );
};

export default GameBoard;
