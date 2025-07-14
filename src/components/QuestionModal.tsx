
import React, { useState } from 'react';
import { Question } from '../types/quiz';
import { X, Check, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface QuestionModalProps {
  question: Question;
  onAnswer: (selectedAnswer: string, isCorrect: boolean) => void;
  onClose: () => void;
}

const QuestionModal: React.FC<QuestionModalProps> = ({ question, onAnswer, onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    const correct = selectedAnswer === question.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(selectedAnswer, correct);
    }, 100);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 animate-scale-in relative overflow-hidden">
        {/* Animated background sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-4 right-12 w-4 h-4 text-blue-400 animate-bounce" style={{ animationDelay: '0s' }} />
          <Sparkles className="absolute top-12 left-8 w-3 h-3 text-purple-400 animate-bounce" style={{ animationDelay: '1s' }} />
          <Sparkles className="absolute bottom-8 right-16 w-3 h-3 text-green-400 animate-bounce" style={{ animationDelay: '2s' }} />
        </div>

        {/* Strobing border effect */}
        <div className="absolute inset-0 rounded-xl border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-50"></div>
        <div className="absolute inset-1 bg-white rounded-lg"></div>
        
        {/* Content container with higher z-index */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-lg font-semibold animate-pulse">
                {question.category}
              </div>
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-lg font-semibold animate-bounce">
                ${question.points}
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-fade-in">
            {question.text}
          </h2>

          {/* Answer Options */}
          {!showResult ? (
            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswer(option)}
                  className={`
                    w-full text-left p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 animate-fade-in
                    ${selectedAnswer === option
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 shadow-lg animate-pulse'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:shadow-md'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                      ${selectedAnswer === option 
                        ? 'border-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 animate-spin' 
                        : 'border-gray-300'
                      }
                    `}>
                      {selectedAnswer === option && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* Result Display with enhanced animations */
            <div className="space-y-4 mb-6">
              <div className={`
                p-4 rounded-lg flex items-center space-x-3 transition-all duration-500 animate-scale-in
                ${isCorrect 
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border-2 border-green-200 animate-pulse' 
                  : 'bg-gradient-to-r from-red-50 to-pink-50 text-red-800 border-2 border-red-200 animate-pulse'
                }
              `}>
                {isCorrect ? (
                  <Check className="w-6 h-6 text-green-600 animate-bounce" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-600 animate-bounce" />
                )}
                <div>
                  <div className="font-bold text-lg">
                    {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
                  </div>
                  <div className="text-sm">
                    {isCorrect 
                      ? `You earned ${question.points} points! 🌟` 
                      : `The correct answer was: ${question.correctAnswer}`
                    }
                  </div>
                </div>
              </div>
              
              {/* Show selected vs correct answer */}
              <div className="space-y-2 text-sm animate-fade-in">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Your answer:</span>
                  <span className={`font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedAnswer}
                  </span>
                </div>
                {!isCorrect && (
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Correct answer:</span>
                    <span className="text-green-600 font-semibold">{question.correctAnswer}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Submit Button */}
          {!showResult && (
            <Button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 animate-pulse"
            >
              ✨ Submit Answer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
