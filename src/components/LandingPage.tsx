
import React from 'react';
import { Shield, Cloud, Trophy, Users } from 'lucide-react';
import { Button } from './ui/button';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Cloud & Cyber
            <span className="block text-blue-400">Showdown</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Test your AWS and Cybersecurity knowledge in this exciting Jeopardy-style quiz!
          </p>
          <div className="flex items-center justify-center space-x-2 text-blue-300">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">For Per Scholas Alumni</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">AWS Mastery</h3>
            <p className="text-gray-300 text-sm">
              Test your knowledge of Amazon Web Services, from basic concepts to advanced architecture
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Cybersecurity</h3>
            <p className="text-gray-300 text-sm">
              Challenge yourself with questions covering security fundamentals and best practices
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Earn Badges</h3>
            <p className="text-gray-300 text-sm">
              Complete the quiz to earn achievement badges and track your progress
            </p>
          </div>
        </div>

        {/* Game Rules */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
          <h3 className="text-white font-semibold mb-4">How to Play</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="text-left">
              <p className="mb-2">• Choose from 2 categories: AWS & Cybersecurity</p>
              <p className="mb-2">• Each category has 5 questions worth 100-500 points</p>
              <p>• Higher point values = more challenging questions</p>
            </div>
            <div className="text-left">
              <p className="mb-2">• Answer all questions to complete the quiz</p>
              <p className="mb-2">• Get immediate feedback on your answers</p>
              <p>• Earn badges based on your final score</p>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <Button
          onClick={onStart}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
