import React from 'react';
import { Category } from '../types';
import { Briefcase, Home, Book, Heart, Coffee } from 'lucide-react';

interface CategorySelectProps {
  selectedCategory: Category;
  onSelect: (category: Category) => void;
}

const categories: { value: Category; icon: React.ReactNode }[] = [
  { value: 'Work', icon: <Briefcase className="w-4 h-4" /> },
  { value: 'Personal', icon: <Home className="w-4 h-4" /> },
  { value: 'Study', icon: <Book className="w-4 h-4" /> },
  { value: 'Health', icon: <Heart className="w-4 h-4" /> },
  { value: 'Leisure', icon: <Coffee className="w-4 h-4" /> },
];

const CategorySelect: React.FC<CategorySelectProps> = ({ selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(({ value, icon }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
            selectedCategory === value
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {icon}
          <span className="text-sm font-medium">{value}</span>
        </button>
      ))}
    </div>
  );
};

export default CategorySelect;