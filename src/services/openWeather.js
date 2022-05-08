import config from '../utils/config'
import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org'

const getWeather = async (lat, lon) => {
  const response = await axios.get(`${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=metric&appid=${config.OW_API}`)
  return response.data
}

export default { getWeather }