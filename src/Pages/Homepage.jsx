import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import DayCard from '../components/DayCard'
import IMAGES from '../assets/images/index'
import commonStyles from '../styles/common.module.css'
import appStyles from '../styles/app.module.css'
import Countries from '../components/Countries'
import { getDay, unixToDate } from '../utils/helpers'

const Homepage = ({ countries, selectedCountry, handleCountryChange, weather }) => {
  return (
    <div className={commonStyles} >
      <Header title='5-Day Forecast'/>
      <header className="App-header"></header>
      <Countries countries={countries} handleCountryChange={handleCountryChange}/>
      <h2 className={appStyles.selectedCountry}>{selectedCountry.capital}, {selectedCountry.name.common}</h2>
      <div className={appStyles.weatherCards}>
        <DayCard day={getDay(weather[0].dt)} date={unixToDate(weather[0].dt)} maxTemp={weather[0].temp.max} minTemp={weather[0].temp.min} icon={IMAGES.cloud} weather={weather[0].weather[0].main} humidity={weather[0].humidity} windSpeed={weather[0].wind_speed}/>
        <DayCard day={getDay(weather[1].dt)} date={unixToDate(weather[1].dt)} maxTemp={weather[1].temp.max} minTemp={weather[1].temp.min} icon={IMAGES.sun} weather={weather[1].weather[0].main} humidity={weather[1].humidity} windSpeed={weather[1].wind_speed}/>
        <DayCard day={getDay(weather[2].dt)} date={unixToDate(weather[2].dt)} maxTemp={weather[2].temp.max} minTemp={weather[2].temp.min} icon={IMAGES.rain} weather={weather[2].weather[0].main} humidity={weather[2].humidity} windSpeed={weather[2].wind_speed}/>
        <DayCard day={getDay(weather[3].dt)} date={unixToDate(weather[3].dt)} maxTemp={weather[3].temp.max} minTemp={weather[3].temp.min} icon={IMAGES.rain} weather={weather[3].weather[0].main} humidity={weather[3].humidity} windSpeed={weather[3].wind_speed}/>
        <DayCard day={getDay(weather[4].dt)} date={unixToDate(weather[4].dt)} maxTemp={weather[4].temp.max} minTemp={weather[4].temp.min} icon={IMAGES.snow} weather={weather[4].weather[0].main} humidity={weather[4].humidity} windSpeed={weather[4].wind_speed}/>
      </div>
        
    </div>
  )
}

export default Homepage