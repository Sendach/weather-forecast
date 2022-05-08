import React from 'react'
import styles from '../styles/daycard.module.css'
import IMAGES from '../assets/images/index'
import { Link } from 'react-router-dom'

const DayCard = ({ day, date, maxTemp, minTemp, icon, weather, humidity, windSpeed}) => {
  return (
    <Link className={styles.card} to='/hours'>
      <h1 className={styles.day} >{day}</h1>
      <h4 className={styles.date}>{date}</h4>
      <h1 className={styles.maxTemp}>{maxTemp}°</h1>
      <p className={styles.minTemp}>{minTemp}° min</p>
      <div className={styles.weatherDetails}>
        <div className={styles.wind}>
          <img src={IMAGES.wind} alt='wind'/>
          <h3>{windSpeed} m/s</h3>
        </div>
        <div className={styles.humidity}>
          <img src={IMAGES.humid} alt='humid'/>
          <h3>{humidity}%</h3>
        </div>
      </div>
    </Link>
  )
}

export default DayCard