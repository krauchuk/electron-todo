import React, { useContext } from 'react'

import TaskListItem from '../TaskListItem'
import { Context } from '../../store/Provider'
import styles from './TaskList.module.css'

const TaskList = () => {
  const { tasks } = useContext(Context)

  return (
    <div className={styles.container}>
      {tasks.map(task => (
        <TaskListItem key={task.id} id={task.id} name={task.name} />
      ))}
    </div>
  )
}

export default TaskList
