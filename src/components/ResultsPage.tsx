
import React from 'react';
import { Trophy, Award, Star, RotateCcw, Sparkles, Zap } from 'lucide-react';
import { Button } from './ui/button';

interface ResultsPageProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ score, totalQuestions, onRestart }) => {
  const maxScore = 3500; // Updated for 7 categories * 500 max points
  const percentage = (score / maxScore) * 100;
  
  const getBadgeInfo = () => {
    if (percentage >= 90) {
      return {
        title: "🏆 Tech Master",
        icon: Trophy,
        color: "text-yellow-400",
        bgColor: "bg-gradient-to-r from-yellow-400/20 to-orange-400/20",
        description: "Outstanding performance! You're a true expert!"
      };
    } else if (percentage >= 75) {
      return {
        title: "☁️ Cloud Champion",
        icon: Award,
        color: "text-blue-400",
        bgColor: "bg-gradient-to-r from-blue-400/20 to-cyan-400/20",
        description: "Excellent work! You know your stuff!"
      };
    } else if (percentage >= 60) {
      return {
        title: "🛡️ Cyber Sentinel",
        icon: Star,
        color: "text-green-400",
        bgColor: "bg-gradient-to-r from-green-400/20 to-emerald-400/20",
        description: "Good job! Keep learning and growing!"
      };
    } else {
      return {
        title: "⭐ Rising Star",
        icon: Star,
        color: "text-purple-400",
        bgColor: "bg-gradient-to-r from-purple-400/20 to-pink-400/20",
        description: "Great start! Practice makes perfect!"
      };
    }
  };

  const badgeInfo = getBadgeInfo();
  const BadgeIcon = badgeInfo.icon;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-yellow-400 animate-bounce" style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-32 right-32 w-4 h-4 text-blue-400 animate-bounce" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-32 left-32 w-5 h-5 text-green-400 animate-bounce" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-20 right-20 w-4 h-4 text-purple-400 animate-bounce" style={{ animationDelay: '3s' }} />
        <Zap className="absolute top-1/2 left-10 w-6 h-6 text-yellow-500 animate-pulse" />
        <Zap className="absolute top-1/3 right-10 w-5 h-5 text-pink-500 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            🎉 Quiz Complete! 🎉
          </h1>
          <p className="text-xl text-gray-300">
            Here's how you performed in the Cloud & Cyber Showdown
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 animate-scale-in relative overflow-hidden">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
          
          <div className="relative z-10">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-3 ${badgeInfo.bgColor} rounded-full px-6 py-3 mb-6 animate-bounce border-2 border-white/20`}>
              <BadgeIcon className={`w-8 h-8 ${badgeInfo.color} animate-pulse`} />
              <span className="text-white font-bold text-xl">{badgeInfo.title}</span>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
            </div>

            {/* Score */}
            <div className="mb-6">
              <div className="text-6xl font-bold text-white mb-2 animate-pulse bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {score}
              </div>
              <div className="text-gray-300 text-lg">
                out of {maxScore} points
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 h-4 rounded-full transition-all duration-2000 ease-out animate-pulse"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="text-white text-lg font-semibold mb-4 animate-fade-in">
              {percentage.toFixed(1)}% Complete
            </div>

            {/* Badge Description */}
            <p className="text-gray-300 text-lg animate-fade-in">
              {badgeInfo.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 animate-fade-in hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl font-bold text-white animate-pulse">{totalQuestions}</div>
            <div className="text-gray-300 text-sm">Questions</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 animate-fade-in hover:bg-white/10 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl font-bold text-blue-400 animate-pulse">{Math.round(percentage)}%</div>
            <div className="text-gray-300 text-sm">Accuracy</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 animate-fade-in hover:bg-white/10 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl font-bold text-green-400 animate-pulse">7</div>
            <div className="text-gray-300 text-sm">Categories</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce"
          >
            <RotateCcw className="w-5 h-5 mr-2 animate-spin" />
            🚀 Play Again
          </Button>
          
          <div className="text-gray-400 text-sm animate-fade-in">
            ✨ Challenge your friends and share your results! ✨
          </div>
        </div>

        {/* Per Scholas Branding */}
        <div className="mt-8 text-center animate-fade-in">
          <p className="text-gray-400 text-sm">
            💼 Made for Per Scholas Alumni 💼
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
