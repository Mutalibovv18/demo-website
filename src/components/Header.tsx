import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Zap } from "lucide-react";
import logo from "./images/bg.png"; // Logo image file (assuming the word "Rise" is part of this image)

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const EveriseLogo: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <div className="flex items-center bg-white dark:bg-gray-900 rounded-full p-2">
      <div className="relative text-3xl font-bold flex items-center">
        {/* First part: eve */}
        <span className="text-[#631b16]">eve</span>
        
        {/* Second part: Rise with dynamic color */}
        <span className={`${isDark ? "text-white" : "text-black"}`}>Rise</span>
      </div>
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            {/* Logo component with adjusted size and dynamic theme */}
            <div className="w-24 h-12 flex items-center">
              <EveriseLogo isDark={isDark} />
            </div>
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

export default EveriseLogo;