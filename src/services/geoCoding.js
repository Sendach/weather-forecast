import config from '../utils/config'
import axios from 'axios'
const baseUrl = `http://api.openweathermap.org`


const getLatLon = async (city, limit) => {
  const response = await axios.get(`${baseUrl}/geo/1.0/direct?q=${city}&limit=${limit}&appid=${config.OW_API}`)
  return response.data
}

export default { getLatLon }