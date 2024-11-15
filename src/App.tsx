import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import TaskList from './components/TaskList';
import Statistics from './components/Statistics';
import CategorySelect from './components/CategorySelect';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { Task, Category } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Work');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    setTasks([
      ...tasks,
      {
        id: String(Date.now()),
        text: newTask,
        completed: false,
        category: selectedCategory
      }
    ]);
    setNewTask('');
  };

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto p-6">
          <Header />
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
            <div className="space-y-4 mb-6">
              <CategorySelect
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
              <form onSubmit={addTask} className="flex gap-4">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new task..."
                  className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <PlusCircle size={20} />
                  Add Task
                </button>
              </form>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <TaskList
                tasks={tasks}
                onToggle={(id: number) => toggleTask(id.toString())}
                onDelete={(id: number) => deleteTask(id.toString())}
              />
              <Statistics tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;