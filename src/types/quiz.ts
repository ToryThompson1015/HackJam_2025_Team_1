
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  points: number;
  category: string;
}

export interface Category {
  name: string;
  questions: Question[];
}

export interface QuizData {
  categories: Category[];
}
