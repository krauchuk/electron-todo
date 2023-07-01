import React from 'react'

import { Props } from './types'
import TaskListItem from '../TaskListItem'

const TaskList = ({ tasks }: Props) => (
  <div>
    {tasks.map(task => (
      <TaskListItem key={task.id} id={task.id} name={task.name} />
    ))}
  </div>
)

export default TaskList
