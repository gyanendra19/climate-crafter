import { useState } from 'react'
import './App.css'
import Search from './components/Search';
import { WeatherContext } from './contexts/WeatherContext'

function App() {
  const [allWeather, setAllWeather] = useState({})
  const [futureWeather, setFutureWeather] = useState([])
  const [address, setAddress] = useState('')
  const [error, setError]= useState(false)
  const [errorMsg, setErrorMsg]= useState('')
  const [Loading, setLoading] = useState(false)

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const day = (dateTime) => {
    const presentDay = new Date(dateTime * 1000).getDay()
    for (let i = 0; i <= weekDays.length; i++) {
      if (weekDays.indexOf(weekDays[i]) === presentDay) {
        return weekDays[i]
      }
    }
  }

  function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
  }

  const dayOrNight = (data) => {
    return Number(data.datetime?.split(':')[0])
  }

console.log(errorMsg)
      return (
      <>
        <WeatherContext.Provider value={{ allWeather, setAllWeather, futureWeather, setFutureWeather, day, fahrenheitToCelsius, address, setAddress, dayOrNight,error, setError, errorMsg, setErrorMsg,Loading, setLoading }}>
          <div className='w-full h-screen'>
            {dayOrNight(allWeather) >= 19 || dayOrNight(allWeather) < 6 ?
              <img className='w-full absolute -z-10 max-lg:hidden' src="/src/img/night-sky.jpg" alt="" />
              :
              <img className='w-full morning absolute -z-10 max-lg:hidden' src="/src/img/morning.jpg" alt="" />
            }
            <img className='w-full night absolute -z-10 hidden max-lg:block' src="/src/img/mobile-sky.jpg" alt="" />
            <img className='absolute h-28 left-3 max-lg:h-16 max-lg:left-0' src="/src/img/logo.png" alt="" />
            <Search />
          </div>
        </WeatherContext.Provider>
      </>
      )
}

      export default App
