import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'London'],
    answer: 'Paris',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Picasso', 'Van Gogh', 'Da Vinci', 'Rembrandt'],
    answer: 'Da Vinci',
  },
];

export default function TriviaGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {showResults ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Your Score: {score}/{questions.length}</h2>
          <button onClick={() => window.location.reload()} className="bg-blue-500 px-4 py-2 text-white rounded">
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-2">{questions[currentQuestion].question}</h3>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
