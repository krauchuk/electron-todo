import React from 'react'

import { Props } from './types'
import styles from './Checkbox.module.css'

const Checkbox = ({ defaultValue, onChange }: Props) => {
  return (
    <label className={styles.container}>
      <input className={styles.checkbox} type="checkbox" defaultChecked={defaultValue} onChange={onChange} />
      <span className={styles.checkmark} />
    </label>
  )
}

export default Checkbox
