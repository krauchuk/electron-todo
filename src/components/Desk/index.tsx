import React, { useContext, useEffect } from 'react'

import Button from '../Button'
import TaskList from '../TaskList'
import TaskEditor from '../TaskEditor'
import { Context } from '../../store/Provider'
import { ipcRenderer } from '../../utils'
import styles from './Desk.module.css'

const Desk = () => {
  const { addTask, selectedTask, tasks } = useContext(Context)

  const handleAddTask = () => {
    addTask({
      id: Date.now(),
      name: 'New task',
      content: '',
    })
  }

  useEffect(() => {
    ipcRenderer.on('add-task', handleAddTask)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.topPanel}>
        <Button text="Add task" onClick={handleAddTask} />
      </div>
      <div className={styles.workspace}>
        <div className={styles.leftPanel}>
          <TaskList tasks={tasks} />
        </div>
        <div className={styles.rightPanel}>{selectedTask && <TaskEditor task={selectedTask} />}</div>
      </div>
      <div className={styles.bottomPanel}>
        <a href="https://github.com/krauchuk/electron-todo" target="_blank">
          Read
        </a>{' '}
        about this app
      </div>
    </div>
  )
}

export default Desk