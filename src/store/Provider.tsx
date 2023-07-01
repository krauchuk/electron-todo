import React, { useState, ReactNode } from 'react'

import { Task, TaskContext } from '../types/task'

const initTasks = JSON.parse(localStorage.getItem('tasks') || '[]')

const updateStore = (tasks: Task[]) => localStorage.setItem('tasks', JSON.stringify(tasks))

export const Context = React.createContext<TaskContext>({} as TaskContext)

const Provider = ({ children }: { children: ReactNode }) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [tasks, setTasks] = useState<Task[]>(initTasks)

  const addTask = (task: Task) => {
    const newArray = [...tasks, task]
    setTasks(newArray)
    updateStore(newArray)
  }

  const removeTask = (id: number) => {
    const newArray = tasks.filter(task => task.id !== id)
    setTasks(newArray)
    updateStore(newArray)
  }

  const renameTask = (id: number, name: string) => {
    const newArray = tasks.map((task: Task) => (task.id === id ? { ...task, name } : task))
    setTasks(newArray)
    updateStore(newArray)
  }

  const selectTask = (id: number | null) => setSelectedTask(tasks.find(task => task.id === id) || null)

  return (
    <Context.Provider
      value={{
        selectedTask,
        selectTask,
        tasks,
        addTask,
        removeTask,
        renameTask,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
