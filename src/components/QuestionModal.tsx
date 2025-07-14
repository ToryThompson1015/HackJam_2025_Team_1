
import React, { useState } from 'react';
import { Question } from '../types/quiz';
import { X, Check, AlertCircle } from 'lucide-react';
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
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 animate-scale-in relative">
        {/* Subtle strobing border effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-blue-500/50 animate-pulse"></div>
        <div className="absolute inset-1 bg-white rounded-lg"></div>
        
        {/* Content container with higher z-index */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-lg font-semibold">
                {question.category}
              </div>
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-lg font-semibold">
                ${question.points}
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
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
                    w-full text-left p-4 rounded-lg border-2 transition-all duration-200
                    ${selectedAnswer === option
                      ? 'border-blue-500 bg-blue-50 text-blue-800'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                      ${selectedAnswer === option 
                        ? 'border-blue-500 bg-blue-500' 
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
            /* Result Display */
            <div className="space-y-4 mb-6">
              <div className={`
                p-4 rounded-lg flex items-center space-x-3 transition-all duration-300
                ${isCorrect 
                  ? 'bg-green-50 text-green-800 border-2 border-green-200' 
                  : 'bg-red-50 text-red-800 border-2 border-red-200'
                }
              `}>
                {isCorrect ? (
                  <Check className="w-6 h-6 text-green-600" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-600" />
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
              <div className="space-y-2 text-sm">
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
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold transition-all duration-200"
            >
              Submit Answer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
