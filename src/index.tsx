import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import { useTaskStore } from './store/task'
import Desk from './components/Desk'
import { ipcRenderer } from './utils'
import './global.css'

const App = () => {
  const { createTask, removeTask, selectedTask, selectTask } = useTaskStore()

  useEffect(() => {
    ipcRenderer.on('add-task', createTask)
  }, [])

  useEffect(() => {
    ipcRenderer.once('remove-task', () => {
      if (selectedTask) {
        removeTask(selectedTask.id)
        selectTask(null)
      }
    })

    return () => {
      ipcRenderer.removeAllListeners('remove-task')
    }
  }, [selectedTask?.id])

  useEffect(() => {
    if (selectedTask) {
      ipcRenderer.send('show-remove-btn', selectedTask.name)
    } else {
      ipcRenderer.send('hide-remove-btn')
    }
  }, [selectedTask])

  return <Desk />
}

createRoot(document.body).render(<App />)
