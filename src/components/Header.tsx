import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Zap } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Zap className="w-8 h-8 text-red-600" />
            <span className="ml-2 text-xl font-bold dark:text-white">AdScale</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-600">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-red-600">About</a>
            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-red-600">Services</a>
            <a href="#process" className="text-gray-600 dark:text-gray-300 hover:text-red-600">Process</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-red-600">Contact</a>
          </div>
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
};