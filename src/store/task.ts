import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { TaskState } from '../types/task'

export const useTaskStore = create(
  persist<TaskState>(
    (set, get) => ({
      selectedTask: null,
      tasks: [],
      selectTask: id => set(() => ({ selectedTask: get().tasks.find(task => task.id === id) || null })),
      createTask: () =>
        set(() => ({
          tasks: [
            ...get().tasks,
            {
              id: Date.now(),
              name: 'New task',
              content: '',
              isDone: false,
            },
          ],
        })),
      removeTask: id => set(() => ({ tasks: get().tasks.filter(task => task.id !== id) })),
      updateTask: (id, newData) =>
        set(() => ({ tasks: get().tasks.map(task => (task.id === id ? { ...task, ...newData } : task)) })),
    }),
    {
      name: 'task-storage',
    },
  ),
)
