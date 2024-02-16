import React, { useState } from 'react'
import { useWeatherContext } from '../contexts/WeatherContext'
import HourlyCast from './HourlyCast'
import FutureCast from './FutureCast'

function Forcast() {
  const [border, setBorder] = useState(false)
  const {allWeather, dayOrNight} = useWeatherContext()


  return (
    <div className='w-full h-1/2 '>
      <div className='flex'>
        <button
          className={`w-40 p-2 text-xl mt-3 ml-14 max-md:ml-5 ${border ? '' : `border-b-4 border-solid`} ${(dayOrNight(allWeather) >= 19 || dayOrNight(allWeather) < 6) ? 'text-white/75 border-white' : 'text-black/75 border-black'} transition-all`}
          onClick={() => setBorder(prev => !prev)}
        >HOURLY</button>


        <button
          className={`w-40 p-2 text-xl mt-3 ${(dayOrNight(allWeather) >= 19 || dayOrNight(allWeather) < 6) ? 'text-white/75 border-white' : 'text-black/75 border-black'} text-black/85 ${border ? `border-b-4 border-solid` : ''} transition-all`}
          onClick={() => setBorder(prev => !prev)}
        >NEXT 14 DAYS</button>
      </div>

      {border ? 
      <FutureCast />
      :
      <HourlyCast />
      }
    </div>
  )
}

export default Forcast