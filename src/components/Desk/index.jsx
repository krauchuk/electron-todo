import React from 'react'

import styles from './Desk.module.css'

const Desk = () => {
  return (
    <div>
      <div className={styles.topPanel}></div>
      <div className={styles.workspace}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Desk
