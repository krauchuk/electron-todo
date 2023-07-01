import React from 'react'

import { Props } from './types'
import styles from './Button.module.css'

const Button = ({ onClick, text = 'Click' }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
