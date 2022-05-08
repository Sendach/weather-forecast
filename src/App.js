
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import g from './utils/config'
import Homepage from './Pages/Homepage'
import Hourly from './Pages/Hourly'
import {unixToDate} from './utils/helpers'
import geoService from './services/geoCoding'
import weatherService from './services/openWeather'

const getGeoOfCity = async (city) => {
  const geoCity = await geoService.getLatLon(city, 1)
  return geoCity
}

const getWeather = async (lat, lon) => {
  const weather = await weatherService.getWeather(lat, lon)
  return weather
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState({ name: { common: 'Uruguay'} })
  const [dailyWeather, setDailyWeather] = useState([{dt: 23213123, weather: [{main: 'Cloudy'}], temp: { max: 2}}, {dt: 23213123, weather: [{main: 'Cloudy'}], temp: { max: 2}}, {dt: 23213123, weather: [{main: 'Cloudy'}], temp: { max: 2}}, {dt: 23213123, weather: [{main: 'Cloudy'}], temp: { max: 2}}, {dt: 23213123, weather: [{main: 'Cloudy'}], temp: { max: 2}}])

  useEffect(() => {
    const getCountries = async () => {
      const countries = await axios.get('https://restcountries.com/v3.1/all')
      const ArrOfCountries =[]
      for (const i of countries.data) {
        ArrOfCountries.push(i)
      }

      setCountries(ArrOfCountries)
      setSelectedCountry(ArrOfCountries[0])      

      // init value
      const geoLocation = await getGeoOfCity(countries.data[0].capital)
      const cityWeather = await getWeather(geoLocation[0].lat, geoLocation[0].lon)
      setDailyWeather(cityWeather.daily)
    
    }

    getCountries()
      .catch(console.error())

  }, [])

  const handleCountryChange = async (event) => {
    setSelectedCountry(countries[event.target.value])
    const geoLocation = await getGeoOfCity(countries[event.target.value].capital)
    const cityWeather = await getWeather(geoLocation[0].lat, geoLocation[0].lon)
    setDailyWeather(cityWeather.daily)
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage countries={countries} selectedCountry={selectedCountry} handleCountryChange={handleCountryChange} weather={dailyWeather}/>}/>
        <Route path='/hours' element={<Hourly selectedCountry={selectedCountry}/>}/>
      </Routes>
    </Router>
  )
}

export default App;
