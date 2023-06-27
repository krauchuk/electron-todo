import React, { useState } from 'react'

const initTasks = JSON.parse(localStorage.getItem('tasks') || '[]')

const updateStore = data => localStorage.setItem('tasks', JSON.stringify(data))

export const Context = React.createContext()

const Provider = props => {
  const [selectedTask, setSelectedTask] = useState({})
  const [tasks, setTasks] = useState(initTasks)

  const addTask = task => {
    const newArray = [...tasks, { id: Date.now(), ...task }]
    setTasks(newArray)
    updateStore(newArray)
  }

  const removeTask = index => {
    const newArray = [...tasks]
    newArray.splice(index, 1)
    setTasks(newArray)
    updateStore(newArray)
  }

  const renameTask = (index, name) => {
    const newArray = tasks.map((data, i) => (i === index ? { ...data, name } : data))
    setTasks(newArray)
    updateStore(newArray)
  }

  const selectTask = id => setSelectedTask(tasks.find(task => task.id === id) || null)

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
      {props.children}
    </Context.Provider>
  )
}

export default Provider
