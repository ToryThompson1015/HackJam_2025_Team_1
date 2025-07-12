
import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'admin' | 'user' | 'mentor';

export interface User {
  username: string;
  role: UserRole;
  progress?: {
    completedQuestions: string[];
    totalScore: number;
    lastSession: string;
  };
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProgress: (completedQuestions: string[], score: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const DEMO_USERS = [
  { username: 'admin', password: 'admin', role: 'admin' as UserRole },
  { username: 'user', password: 'user', role: 'user' as UserRole },
  { username: 'mentor', password: 'mentor', role: 'mentor' as UserRole }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('cloudCyberUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    const foundUser = DEMO_USERS.find(u => u.username === username && u.password === password);
    
    if (foundUser) {
      const savedProgress = localStorage.getItem(`progress_${username}`);
      const progress = savedProgress ? JSON.parse(savedProgress) : {
        completedQuestions: [],
        totalScore: 0,
        lastSession: new Date().toISOString()
      };

      const userWithProgress: User = {
        username: foundUser.username,
        role: foundUser.role,
        progress
      };

      setUser(userWithProgress);
      localStorage.setItem('cloudCyberUser', JSON.stringify(userWithProgress));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cloudCyberUser');
  };

  const updateProgress = (completedQuestions: string[], score: number) => {
    if (user) {
      const updatedProgress = {
        completedQuestions,
        totalScore: score,
        lastSession: new Date().toISOString()
      };

      const updatedUser = { ...user, progress: updatedProgress };
      setUser(updatedUser);
      localStorage.setItem('cloudCyberUser', JSON.stringify(updatedUser));
      localStorage.setItem(`progress_${user.username}`, JSON.stringify(updatedProgress));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProgress }}>
      {children}
    </AuthContext.Provider>
  );
};
