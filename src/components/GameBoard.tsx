
import React from 'react';
import { Category, Question } from '../types/quiz';
import { Trophy, Home, User } from 'lucide-react';
import { Button } from './ui/button';
import { User as UserType } from '../contexts/AuthContext';

interface GameBoardProps {
  categories: Category[];
  answeredQuestions: Set<string>;
  onSelectQuestion: (question: Question) => void;
  score: number;
  user?: UserType | null;
  onDashboard?: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  categories,
  answeredQuestions,
  onSelectQuestion,
  score,
  user,
  onDashboard
}) => {
  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-bold text-white">Cloud & Cyber Showdown</h1>
            {user && (
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                <User className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm">{user.username}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  user.role === 'admin' ? 'bg-red-500/20 text-red-300' :
                  user.role === 'mentor' ? 'bg-purple-500/20 text-purple-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {user.role}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            {user && onDashboard && (
              <Button
                onClick={onDashboard}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            )}
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">{score} points</span>
            </div>
          </div>
        </div>
      </div>

      {/* Game Board */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {categories.map((category, categoryIndex) => (
            <div key={category.name} className="space-y-4">
              {/* Category Header */}
              <div className="bg-blue-600 text-white text-center py-4 rounded-lg font-bold text-xl">
                {category.name}
              </div>
              
              {/* Question Tiles */}
              <div className="space-y-3">
                {category.questions.map((question) => {
                  const isAnswered = answeredQuestions.has(question.id);
                  
                  return (
                    <button
                      key={question.id}
                      onClick={() => onSelectQuestion(question)}
                      disabled={isAnswered}
                      className={`
                        w-full h-20 text-2xl font-bold rounded-lg transition-all duration-300
                        ${isAnswered 
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                          : 'bg-blue-800 hover:bg-blue-700 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                        }
                      `}
                    >
                      {isAnswered ? '✓' : `$${question.points}`}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-white">
              Questions Answered: {answeredQuestions.size} / {categories.reduce((total, cat) => total + cat.questions.length, 0)}
            </p>
            <div className="w-64 bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ 
                  width: `${(answeredQuestions.size / categories.reduce((total, cat) => total + cat.questions.length, 0)) * 100}%` 
                }}
              />
            </div>
            {user && (
              <p className="text-gray-300 text-sm mt-2">
                Progress is automatically saved
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
