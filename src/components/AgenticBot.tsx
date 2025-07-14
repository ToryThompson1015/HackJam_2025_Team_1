
import React, { useState, useEffect } from 'react';
import { Bot, MessageCircle, X, Brain, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface AgenticBotProps {
  onHint?: (hint: string) => void;
  score?: number;
  totalQuestions?: number;
  answeredQuestions?: number;
  currentCategory?: string;
  recentAnswers?: { correct: boolean; category: string }[];
}

const AgenticBot: React.FC<AgenticBotProps> = ({ 
  onHint, 
  score = 0, 
  totalQuestions = 0, 
  answeredQuestions = 0, 
  currentCategory = "", 
  recentAnswers = [] 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Hi! I'm your virtual mentor. I'm here to guide your learning journey and help you excel! 🎓"
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [mentorMode, setMentorMode] = useState<'encouragement' | 'strategy' | 'progress'>('encouragement');

  const getMentorResponse = () => {
    const accuracy = answeredQuestions > 0 ? (score / (answeredQuestions * 100)) * 100 : 0;
    const recentCorrect = recentAnswers.slice(-3).filter(a => a.correct).length;
    const recentTotal = recentAnswers.slice(-3).length;

    // Progress-based responses
    if (mentorMode === 'progress') {
      if (answeredQuestions === 0) {
        return "Ready to start your learning journey? Remember, every expert was once a beginner. Let's tackle this together! 🚀";
      }
      if (accuracy >= 80) {
        return `Excellent work! You're maintaining ${accuracy.toFixed(0)}% accuracy. Your understanding is clearly strong. Keep this momentum! 🌟`;
      }
      if (accuracy >= 60) {
        return `Good progress at ${accuracy.toFixed(0)}% accuracy. You're on the right track. Focus on the fundamentals and you'll improve! 📈`;
      }
      return `Don't worry about the ${accuracy.toFixed(0)}% accuracy. Learning is a process. Each mistake teaches us something valuable. Let's focus on understanding! 💪`;
    }

    // Strategy-based responses
    if (mentorMode === 'strategy') {
      const categoryTips = {
        'Cloud Computing': 'Focus on service models (IaaS, PaaS, SaaS) and deployment types. Think about real-world scenarios.',
        'DevOps': 'Remember the CI/CD pipeline stages and automation principles. Consider how tools integrate together.',
        'Cybersecurity': 'Think about the CIA triad: Confidentiality, Integrity, Availability. Consider threats and countermeasures.',
        'Networking': 'Visualize the OSI model layers and how data flows. Think about protocols and their purposes.',
        'Containers': 'Remember containerization vs virtualization differences. Think about orchestration and scaling.',
        'Monitoring': 'Focus on metrics, logs, and traces. Consider what to monitor and how to respond to alerts.',
        'Infrastructure': 'Think about scalability, reliability, and cost optimization. Consider infrastructure as code principles.'
      };
      
      if (currentCategory && categoryTips[currentCategory as keyof typeof categoryTips]) {
        return `💡 ${currentCategory} Strategy: ${categoryTips[currentCategory as keyof typeof categoryTips]}`;
      }
      
      if (recentTotal >= 2 && recentCorrect === 0) {
        return "Try a different approach: Read each option carefully, eliminate obviously wrong answers, then choose the best remaining option. 🎯";
      }
      
      return "Study tip: Connect new concepts to what you already know. Create mental models and practice explaining concepts in your own words. 🧠";
    }

    // Encouragement-based responses
    if (recentTotal >= 3 && recentCorrect >= 2) {
      return "You're on fire! 🔥 Your recent answers show great understanding. Trust your knowledge and keep going!";
    }
    
    if (recentTotal >= 2 && recentCorrect === 0) {
      return "Every challenge is a chance to grow! 🌱 Take a breath, review the fundamentals, and approach this systematically.";
    }
    
    if (answeredQuestions >= 5 && accuracy >= 70) {
      return "Your consistent performance shows real mastery! 🏆 You're building solid expertise in this field.";
    }
    
    const encouragementResponses = [
      "Remember: You're not just memorizing - you're building expertise that will serve your career! 🎯",
      "Each question you answer correctly builds your confidence. You're getting stronger! 💪",
      "Learning is like building muscle - consistency beats intensity. Keep going! 🏋️‍♂️",
      "Your curiosity and persistence are your greatest assets. Trust the process! 🌟",
      "Think like a professional solving real problems. What would you do in the workplace? 💼",
      "Break complex problems into smaller parts. You've got the skills to figure this out! 🔍"
    ];
    
    return encouragementResponses[Math.floor(Math.random() * encouragementResponses.length)];
  };

  const addBotMessage = (message: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, message]);
      setIsTyping(false);
    }, 1500);
  };

  const handleMentorAdvice = (mode: 'encouragement' | 'strategy' | 'progress') => {
    setMentorMode(mode);
    const advice = getMentorResponse();
    addBotMessage(advice);
    if (onHint) {
      onHint(advice);
    }
  };

  // Auto-mentor based on performance
  useEffect(() => {
    if (recentAnswers.length > 0) {
      const lastAnswer = recentAnswers[recentAnswers.length - 1];
      const recentCorrect = recentAnswers.slice(-3).filter(a => a.correct).length;
      const recentTotal = recentAnswers.slice(-3).length;
      
      // Auto-encourage after 3 wrong in a row
      if (recentTotal >= 3 && recentCorrect === 0) {
        setTimeout(() => {
          addBotMessage("I notice you're facing some challenges. Remember, this is how we learn and grow! Let me help you with a strategy. 🤝");
        }, 2000);
      }
      
      // Auto-celebrate good streaks
      if (recentTotal >= 3 && recentCorrect === 3) {
        setTimeout(() => {
          addBotMessage("Amazing streak! 🎉 You're really mastering these concepts. Your hard work is paying off!");
        }, 1000);
      }
    }
  }, [recentAnswers]);

  return (
    <>
      {/* Bot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </Button>
      </div>

      {/* Bot Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 z-40 animate-scale-in">
          {/* Header */}
          <div className="flex items-center space-x-3 p-4 border-b border-gray-200/50 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-t-2xl">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Quiz Assistant</h3>
              <p className="text-xs text-gray-600">AI-powered helper</p>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 max-h-60 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border-l-4 border-blue-400"
              >
                <p className="text-sm text-gray-700">{message}</p>
              </div>
            ))}
            {isTyping && (
              <div className="bg-gray-100 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="p-4 border-t border-gray-200/50 space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <Button
                onClick={() => handleMentorAdvice('encouragement')}
                size="sm"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-xs"
              >
                <MessageCircle className="w-3 h-3 mr-1" />
                Encourage
              </Button>
              <Button
                onClick={() => handleMentorAdvice('strategy')}
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs"
              >
                <Brain className="w-3 h-3 mr-1" />
                Strategy
              </Button>
              <Button
                onClick={() => handleMentorAdvice('progress')}
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xs"
              >
                <TrendingUp className="w-3 h-3 mr-1" />
                Progress
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgenticBot;
