import React from 'react';
import { Task } from '../types';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  const categories = Array.from(new Set(tasks.map(task => task.category)));

  return (
    <div className="space-y-6">
      {categories.map(category => (
        <div key={category} className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            {category}
          </h3>
          <div className="space-y-2">
            {tasks
              .filter(task => task.category === category)
              .map(task => (
                <div
                  key={task.id}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    task.completed
                      ? 'bg-gray-50 border-gray-200'
                      : 'bg-white border-gray-200'
                  } transition-all duration-200`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onToggle(task.id)}
                      className={`text-${task.completed ? 'green' : 'gray'}-500 hover:text-green-600 transition-colors`}
                    >
                      {task.completed ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>
                    <span
                      className={`${
                        task.completed ? 'text-gray-500 line-through' : 'text-gray-700'
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
      {tasks.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No tasks yet. Add some tasks to get started!
        </div>
      )}
    </div>
  );
};

export default TaskList;