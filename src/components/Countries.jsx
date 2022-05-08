import React from 'react'
import styles from '../styles/countries.module.css'

const Countries = ({ countries, handleCountryChange}) => {
  return (
    <select className={styles.countrySelect} onChange={handleCountryChange}>
      { countries.map((country, index) => { 
          return ( 
            <option key={country.name.common} value={index}>{country.name.common}</option>
          )
        })
      }
    </select>
  )
}

export default Countries