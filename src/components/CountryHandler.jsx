import React from 'react'

const CountryHandler = () => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState({ name: { common: 'Uruguay'}, capital: 'your mom' })

  useEffect(() => {
    const getCountries = async () => {
      const countries = await axios.get('https://restcountries.com/v3.1/all')
      const ArrOfCountries =[]

      for (const i of countries.data) {
        ArrOfCountries.push(i)
      }

      setCountries(ArrOfCountries)
      setSelectedCountry(ArrOfCountries[0])
    }

    getCountries()
      .catch(console.error())
  }, [])

  const handleCountryChange = (event) => {
    console.log(countries[event.target.value])
    setSelectedCountry(countries[event.target.value])
  }


  return (
    <div>CountryHandler</div>
  )
}

export default CountryHandler