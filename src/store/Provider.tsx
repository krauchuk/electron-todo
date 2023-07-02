import React, { useState, ReactNode, useEffect } from 'react'

import { Task, TaskContext } from '../types/task'

const initTasks = JSON.parse(localStorage.getItem('tasks') || '[]')

export const Context = React.createContext<TaskContext>({} as TaskContext)

const Provider = ({ children }: { children: ReactNode }) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [tasks, setTasks] = useState<Task[]>(initTasks)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () =>
    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        name: 'New task',
        content: '',
        isDone: false,
      },
    ])

  const removeTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
    if (selectedTask?.id === id) {
      setSelectedTask(null)
    }
  }

  const updateTask = (id: number, data: Partial<Task>) =>
    setTasks(prev => prev.map((task: Task) => (task.id === id ? { ...task, ...data } : task)))

  const selectTask = (id: number | null) => setSelectedTask(tasks.find(task => task.id === id) || null)

  return (
    <Context.Provider
      value={{
        selectedTask,
        selectTask,
        tasks,
        addTask,
        removeTask,
        updateTask,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
