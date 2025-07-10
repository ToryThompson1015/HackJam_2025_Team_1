
import React from 'react';
import { Trophy, Award, Star, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';

interface ResultsPageProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ score, totalQuestions, onRestart }) => {
  const maxScore = 1500; // 100+200+300+400+500 per category * 2 categories
  const percentage = (score / maxScore) * 100;
  
  const getBadgeInfo = () => {
    if (percentage >= 90) {
      return {
        title: "Tech Master",
        icon: Trophy,
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/20",
        description: "Outstanding performance! You're a true expert!"
      };
    } else if (percentage >= 75) {
      return {
        title: "Cloud Champion",
        icon: Award,
        color: "text-blue-400",
        bgColor: "bg-blue-400/20",
        description: "Excellent work! You know your stuff!"
      };
    } else if (percentage >= 60) {
      return {
        title: "Cyber Sentinel",
        icon: Star,
        color: "text-green-400",
        bgColor: "bg-green-400/20",
        description: "Good job! Keep learning and growing!"
      };
    } else {
      return {
        title: "Rising Star",
        icon: Star,
        color: "text-purple-400",
        bgColor: "bg-purple-400/20",
        description: "Great start! Practice makes perfect!"
      };
    }
  };

  const badgeInfo = getBadgeInfo();
  const BadgeIcon = badgeInfo.icon;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4">
            Quiz Complete!
          </h1>
          <p className="text-xl text-gray-300">
            Here's how you performed in the Cloud & Cyber Showdown
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 animate-scale-in">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-3 ${badgeInfo.bgColor} rounded-full px-6 py-3 mb-6`}>
            <BadgeIcon className={`w-8 h-8 ${badgeInfo.color}`} />
            <span className="text-white font-bold text-xl">{badgeInfo.title}</span>
          </div>

          {/* Score */}
          <div className="mb-6">
            <div className="text-6xl font-bold text-white mb-2">
              {score}
            </div>
            <div className="text-gray-300 text-lg">
              out of {maxScore} points
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-white text-lg font-semibold mb-4">
            {percentage.toFixed(1)}% Complete
          </div>

          {/* Badge Description */}
          <p className="text-gray-300 text-lg">
            {badgeInfo.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-white">{totalQuestions}</div>
            <div className="text-gray-300 text-sm">Questions</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-blue-400">{Math.round(percentage)}%</div>
            <div className="text-gray-300 text-sm">Accuracy</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-green-400">2</div>
            <div className="text-gray-300 text-sm">Categories</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Play Again
          </Button>
          
          <div className="text-gray-400 text-sm">
            Challenge your friends and share your results!
          </div>
        </div>

        {/* Per Scholas Branding */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Made for Per Scholas Alumni
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
