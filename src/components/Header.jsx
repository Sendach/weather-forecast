import React from 'react'
import styles from '../styles/header.module.css'

const Header = ( { title }) => {
  return (
    <div>
      <h1 className={styles.header}>{title}</h1>
    </div>
  )
}

export default Header