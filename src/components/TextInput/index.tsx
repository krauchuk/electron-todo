import React, { KeyboardEvent } from 'react'

import { Props } from './types'
import styles from './TextInput.module.css'

const TextInput = ({ value, onChange, autoFocus, maxLength, onPressEnter, onPressEscape }: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    onChange(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onPressEnter) {
      onPressEnter()
    }
    if (e.key === 'Escape' && onPressEscape) {
      onPressEscape()
    }
  }

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={handleOnChange}
      autoFocus={autoFocus}
      maxLength={maxLength}
      onKeyDown={handleKeyDown}
    />
  )
}

export default TextInput
