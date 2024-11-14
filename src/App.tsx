import React, { useState } from 'react';
import { PlusCircle, ListTodo, BarChart3, Trash2, CheckCircle2, Circle } from 'lucide-react';
import TaskList from './components/TaskList';
import Statistics from './components/Statistics';
import CategorySelect from './components/CategorySelect';
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
        id: Date.now(),
        text: newTask,
        completed: false,
        category: selectedCategory,
        createdAt: new Date()
      }
    ]);
    setNewTask('');
  };

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            <ListTodo className="inline-block mr-2 mb-1" />
            Elegant Tasks
          </h1>
          <p className="text-gray-600">Organize your day with style</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
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
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
            <Statistics tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;