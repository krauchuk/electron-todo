import React, { useEffect, useContext } from 'react'
import { createRoot } from 'react-dom/client'

import Desk from './components/Desk'
import Provider, { Context } from './store/Provider'
import { ipcRenderer } from './utils'
import './global.css'

const App = () => {
  const { selectedTask, addTask, removeTask } = useContext(Context)

  useEffect(() => {
    ipcRenderer.on('add-task', addTask)
  }, [])

  useEffect(() => {
    ipcRenderer.once('remove-task', () => {
      if (selectedTask) removeTask(selectedTask.id)
    })

    return () => {
      ipcRenderer.removeAllListeners('remove-task')
    }
  }, [selectedTask?.id])

  return <Desk />
}

const container = document.body.appendChild(document.createElement('div'))
createRoot(container).render(
  <Provider>
    <App />
  </Provider>,
)
