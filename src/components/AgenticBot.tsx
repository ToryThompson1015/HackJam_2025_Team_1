
import React, { useState } from 'react';
import { Bot, MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';

interface AgenticBotProps {
  onHint?: (hint: string) => void;
}

const AgenticBot: React.FC<AgenticBotProps> = ({ onHint }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Hi! I'm your AI quiz assistant. I can help you with hints and encouragement!"
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = [
    "Great job! Keep going strong! 💪",
    "Remember to read each question carefully.",
    "Take your time - accuracy is more important than speed.",
    "You're doing amazing! Every question is a learning opportunity.",
    "Hint: Think about the fundamentals of the topic.",
    "Consider the most common practices in this field.",
    "Break down complex problems into smaller parts.",
    "You've got this! Trust your knowledge.",
  ];

  const addBotMessage = (message: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, message]);
      setIsTyping(false);
    }, 1000);
  };

  const handleGetHint = () => {
    const randomHint = botResponses[Math.floor(Math.random() * botResponses.length)];
    addBotMessage(randomHint);
    if (onHint) {
      onHint(randomHint);
    }
  };

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
          <div className="p-4 border-t border-gray-200/50">
            <Button
              onClick={handleGetHint}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Get Hint
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AgenticBot;
