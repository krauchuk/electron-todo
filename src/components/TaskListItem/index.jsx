import React, { useContext } from 'react'
import clsx from 'clsx'

import { Context } from '../../store/Provider'
import styles from './TaskListItem.module.css'

const TaskListItem = ({ id, name }) => {
  const { selectTask, selectedTask } = useContext(Context)

  const handleOnClick = () => selectTask(id)

  return (
    <div className={clsx(styles.task, { [styles.isSelected]: selectedTask.id === id })} onClick={handleOnClick}>
      {name}
    </div>
  )
}

export default TaskListItem
