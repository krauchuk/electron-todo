import React from 'react'
import clsx from 'clsx'

import { Props } from './types'
import styles from './Button.module.css'

const Button = ({ onClick, text = 'Click', children, className }: Props) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children || text}
    </button>
  )
}

export default Button
