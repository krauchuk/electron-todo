import { create } from 'zustand'

import { TaskState } from '../types/task'

export const useTaskStore = create<TaskState>(set => ({
  selectedTask: null,
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  selectTask: id => set(state => ({ selectedTask: state.tasks.find(task => task.id === id) || null })),
  createTask: () =>
    set(state => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          name: 'New task',
          content: '',
          isDone: false,
        },
      ],
    })),
  removeTask: id => set(state => ({ tasks: state.tasks.filter(task => task.id !== id) })),
  updateTask: (id, newData) =>
    set(state => ({ tasks: state.tasks.map(task => (task.id === id ? { ...task, ...newData } : task)) })),
}))
