import React from 'react';
import { Home, User, Link, LineChart, MessageCircle } from 'lucide-react';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { icon: 'Home', label: 'Home', href: '#' },
  { icon: 'User', label: 'About', href: '#about' },
  { icon: 'Link', label: 'Services', href: '#services' },
  { icon: 'LineChart', label: 'Process', href: '#process' },
  { icon: 'MessageCircle', label: 'Contact', href: '#contact' },
];

const iconMap = {
  Home,
  User,
  Link,
  LineChart,
  MessageCircle,
};

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 md:hidden border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300"
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
