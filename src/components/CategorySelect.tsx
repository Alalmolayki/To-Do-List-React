import React from 'react';
import { Category } from '../types';
import { Briefcase, Home, Book, Coffee } from 'lucide-react';

interface CategorySelectProps {
  selectedCategory: Category;
  onSelect: (category: Category) => void;
}

const categories: { value: Category; icon: React.ReactNode; color: string }[] = [
  { value: 'Work', icon: <Briefcase className="w-4 h-4" />, color: 'text-blue-600 dark:text-blue-400' },
  { value: 'Personal', icon: <Home className="w-4 h-4" />, color: 'text-green-600 dark:text-green-400' },
  { value: 'Study', icon: <Book className="w-4 h-4" />, color: 'text-purple-600 dark:text-purple-400' },
  { value: 'Leisure', icon: <Coffee className="w-4 h-4" />, color: 'text-yellow-600 dark:text-yellow-400' },
];

const CategorySelect: React.FC<CategorySelectProps> = ({ selectedCategory, onSelect }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map(({ value, icon, color }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-all
            ${selectedCategory === value
              ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md scale-105'
              : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 shadow-sm'
            }
          `}
        >
          <span className={selectedCategory === value ? 'text-white' : color}>
            {icon}
          </span>
          <span className="text-sm font-medium whitespace-nowrap">
            {value}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategorySelect;