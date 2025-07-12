
import React from 'react';
import { Trophy, Award, Star, Crown, Shield, Zap, Brain, Code, Database, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface BadgeData {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  requirement: string;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  color: string;
}

const BadgeShowcase: React.FC = () => {
  const badges: BadgeData[] = [
    // AWS Badges
    {
      id: 'aws-novice',
      name: 'Cloud Novice',
      description: 'Complete your first AWS question',
      icon: <Shield className="w-6 h-6" />,
      requirement: 'Answer 1 AWS question correctly',
      category: 'AWS',
      rarity: 'common',
      color: 'bg-blue-500'
    },
    {
      id: 'aws-expert',
      name: 'Cloud Architect',
      description: 'Master AWS fundamentals',
      icon: <Crown className="w-6 h-6" />,
      requirement: 'Answer all AWS questions correctly',
      category: 'AWS',
      rarity: 'epic',
      color: 'bg-purple-500'
    },
    
    // Cybersecurity Badges
    {
      id: 'cyber-guardian',
      name: 'Cyber Guardian',
      description: 'Protect the digital realm',
      icon: <Lock className="w-6 h-6" />,
      requirement: 'Answer 3 Cybersecurity questions correctly',
      category: 'Cybersecurity',
      rarity: 'rare',
      color: 'bg-red-500'
    },
    {
      id: 'security-expert',
      name: 'Security Sentinel',
      description: 'Ultimate cybersecurity knowledge',
      icon: <Shield className="w-6 h-6" />,
      requirement: 'Perfect score in Cybersecurity',
      category: 'Cybersecurity',
      rarity: 'legendary',
      color: 'bg-red-600'
    },
    
    // Programming Badges
    {
      id: 'python-starter',
      name: 'Python Apprentice',
      description: 'Begin your Python journey',
      icon: <Code className="w-6 h-6" />,
      requirement: 'Answer 2 Python questions correctly',
      category: 'Python',
      rarity: 'common',
      color: 'bg-green-500'
    },
    {
      id: 'java-master',
      name: 'Java Virtuoso',
      description: 'Master the art of Java',
      icon: <Trophy className="w-6 h-6" />,
      requirement: 'Perfect score in Java',
      category: 'Java',
      rarity: 'epic',
      color: 'bg-orange-500'
    },
    
    // AI Badges
    {
      id: 'ai-pioneer',
      name: 'AI Pioneer',
      description: 'Explore artificial intelligence',
      icon: <Brain className="w-6 h-6" />,
      requirement: 'Answer 3 AI questions correctly',
      category: 'AI',
      rarity: 'rare',
      color: 'bg-indigo-500'
    },
    {
      id: 'ml-expert',
      name: 'Machine Learning Sage',
      description: 'AI mastery achieved',
      icon: <Zap className="w-6 h-6" />,
      requirement: 'Perfect score in AI',
      category: 'AI',
      rarity: 'legendary',
      color: 'bg-indigo-600'
    },
    
    // Data Engineering Badges
    {
      id: 'data-builder',
      name: 'Data Pipeline Builder',
      description: 'Construct data workflows',
      icon: <Database className="w-6 h-6" />,
      requirement: 'Answer 2 Data Engineering questions correctly',
      category: 'Data Engineering',
      rarity: 'common',
      color: 'bg-teal-500'
    },
    {
      id: 'data-architect',
      name: 'Data Architect',
      description: 'Design scalable data systems',
      icon: <Award className="w-6 h-6" />,
      requirement: 'Perfect score in Data Engineering',
      category: 'Data Engineering',
      rarity: 'epic',
      color: 'bg-teal-600'
    },
    
    // Crypto Badges
    {
      id: 'crypto-enthusiast',
      name: 'Crypto Explorer',
      description: 'Discover blockchain technology',
      icon: <Star className="w-6 h-6" />,
      requirement: 'Answer 3 Crypto questions correctly',
      category: 'Crypto',
      rarity: 'rare',
      color: 'bg-yellow-500'
    },
    {
      id: 'blockchain-master',
      name: 'Blockchain Sage',
      description: 'Master decentralized systems',
      icon: <Crown className="w-6 h-6" />,
      requirement: 'Perfect score in Crypto',
      category: 'Crypto',
      rarity: 'legendary',
      color: 'bg-yellow-600'
    },
    
    // Achievement Badges
    {
      id: 'perfectionist',
      name: 'Perfectionist',
      description: 'Achieve 100% in any category',
      icon: <Trophy className="w-6 h-6" />,
      requirement: 'Perfect score in any category',
      category: 'Achievement',
      rarity: 'epic',
      color: 'bg-gold-500'
    },
    {
      id: 'scholar',
      name: 'Tech Scholar',
      description: 'Complete all categories',
      icon: <Award className="w-6 h-6" />,
      requirement: 'Answer questions in all 7 categories',
      category: 'Achievement',
      rarity: 'legendary',
      color: 'bg-purple-600'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400 bg-gray-50';
      case 'rare': return 'border-blue-400 bg-blue-50';
      case 'epic': return 'border-purple-400 bg-purple-50';
      case 'legendary': return 'border-yellow-400 bg-yellow-50';
      default: return 'border-gray-400 bg-gray-50';
    }
  };

  const categories = ['AWS', 'Cybersecurity', 'Python', 'Java', 'AI', 'Data Engineering', 'Crypto', 'Achievement'];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Available Badges</h2>
        <p className="text-gray-300">Earn these badges by demonstrating your expertise across different technology domains</p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
            {category} Badges
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {badges.filter(badge => badge.category === category).map(badge => (
              <Card key={badge.id} className={`${getRarityColor(badge.rarity)} border-2 hover:scale-105 transition-transform duration-200`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`${badge.color} text-white p-2 rounded-full`}>
                      {badge.icon}
                    </div>
                    <Badge variant="outline" className={`capitalize ${
                      badge.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
                      badge.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                      badge.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {badge.rarity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2">{badge.name}</CardTitle>
                  <p className="text-gray-600 text-sm mb-3">{badge.description}</p>
                  <div className="bg-gray-100 p-2 rounded text-xs">
                    <strong>Requirement:</strong> {badge.requirement}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BadgeShowcase;
