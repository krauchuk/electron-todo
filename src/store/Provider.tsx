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

  const addTask = (task: Task) => setTasks(prev => [...prev, task])

  const removeTask = (id: number) => setTasks(prev => prev.filter(task => task.id !== id))

  const renameTask = (id: number, name: string) =>
    setTasks(prev => prev.map((task: Task) => (task.id === id ? { ...task, name } : task)))

  const selectTask = (id: number | null) => setSelectedTask(tasks.find(task => task.id === id) || null)

  const updateTaskContent = (id: number, content: string) =>
    setTasks(prev => prev.map((task: Task) => (task.id === id ? { ...task, content } : task)))

  return (
    <Context.Provider
      value={{
        selectedTask,
        selectTask,
        tasks,
        addTask,
        removeTask,
        renameTask,
        updateTaskContent,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
