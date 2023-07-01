import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../../store/Provider'
import { Props } from './types'
import styles from './TaskEditor.module.css'

const TaskEditor = ({ task }: Props) => {
  const { updateTaskContent } = useContext(Context)
  const [content, setContent] = useState(task.content)

  useEffect(() => {
    setContent(task.content)
  }, [task.id])

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    updateTaskContent(task.id, e.target.value)
  }

  return <textarea className={styles.editor} value={content} onChange={onChange} />
}

export default TaskEditor
