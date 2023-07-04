import React, { useEffect, useState } from 'react'

import { useTaskStore } from '../../store/task'
import { Props } from './types'
import styles from './TaskEditor.module.css'

const TaskEditor = ({ task }: Props) => {
  const { updateTask } = useTaskStore()
  const [content, setContent] = useState(task.content)

  useEffect(() => {
    setContent(task.content)
  }, [task.id])

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    updateTask(task.id, { content: e.target.value })
  }

  return <textarea className={styles.editor} value={content} onChange={onChange} />
}

export default TaskEditor
