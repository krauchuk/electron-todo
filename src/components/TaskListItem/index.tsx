import React, { useContext, useState, useEffect } from 'react'
import clsx from 'clsx'

import { Context } from '../../store/Provider'
import Button from '../Button'
import TrashIcon from '../../icons/TrashIcon'
import PenIcon from '../../icons/PenIcon'
import TextInput from '../TextInput'
import { Props } from './types'
import styles from './TaskListItem.module.css'

const TaskListItem = ({ id, name }: Props) => {
  const { selectTask, selectedTask, removeTask, renameTask } = useContext(Context)
  const [isRenaming, setIsRenaming] = useState(false)
  const [newName, setNewName] = useState(name)

  useEffect(() => {
    if (selectedTask?.id !== id) {
      setIsRenaming(false)
    }
  }, [selectedTask?.id])

  const handleRemoveBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (selectedTask?.id === id) selectTask(null)
    removeTask(id)
  }

  const handleRenameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    selectTask(id)
    setNewName(name)
    setIsRenaming(true)
  }

  const handleRenameInput = () => {
    renameTask(id, newName)
    setIsRenaming(false)
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
          {name}
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
