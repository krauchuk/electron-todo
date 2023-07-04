import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { useTaskStore } from '../../store/task'
import Button from '../Button'
import TrashIcon from '../../icons/TrashIcon'
import PenIcon from '../../icons/PenIcon'
import TextInput from '../TextInput'
import Checkbox from '../Checkbox'
import { Props } from './types'
import styles from './TaskListItem.module.css'

const TaskListItem = ({ id, name, isDone }: Props) => {
  const { selectTask, selectedTask, removeTask, updateTask } = useTaskStore()
  const [isRenaming, setIsRenaming] = useState(false)
  const [newName, setNewName] = useState(name)

  useEffect(() => {
    if (selectedTask?.id !== id) {
      setIsRenaming(false)
    }
  }, [selectedTask?.id])

  const handleRemoveBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    removeTask(id)
    selectTask(null)
  }

  const handleRenameBtn = () => {
    setNewName(name)
    setIsRenaming(true)
  }

  const handleRenameInput = () => {
    updateTask(id, { name: newName })
    setIsRenaming(false)
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTask(id, { isDone: e.target.checked })
  }

  return (
    <div
      className={clsx(styles.task, { [styles.isSelected]: (selectedTask || {}).id === id })}
      onClick={() => selectTask(id)}
    >
      {isRenaming && (
        <TextInput
          value={newName}
          onChange={value => setNewName(value)}
          maxLength={15}
          onPressEnter={handleRenameInput}
          onPressEscape={() => setIsRenaming(false)}
          autoFocus
        />
      )}
      {!isRenaming && (
        <>
          <Checkbox defaultValue={isDone} onChange={handleCheckbox} />
          <span className={styles.taskName}>{name}</span>
          <div className={styles.buttons}>
            <Button className={styles.renameBtn} onClick={handleRenameBtn}>
              <PenIcon />
            </Button>
            <Button className={styles.removeBtn} onClick={handleRemoveBtn}>
              <TrashIcon />
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskListItem
