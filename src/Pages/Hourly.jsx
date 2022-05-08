import React from 'react'
import WeatherTable from '../components/WeatherTable'
import Header from '../components/Header'

export const Hourly = ({ selectedCountry }) => {
  const title=`Hourly Forecast of ${selectedCountry.name.common}`
  return (
    <div>
      <Header title={title}/>
      <WeatherTable />
    </div>
  );
}

export default Hourly;