import React from 'react'
import { useWeatherContext } from '../contexts/WeatherContext'
import Hourly from './Hourly'

function HourlyCast() {
  const {futureWeather} = useWeatherContext()

  return (
    <div className='flex overflow-x-scroll hide-scrollbar'>
      <Hourly
       futureWeather = {futureWeather[0]}/>
      <Hourly
      weatherToggle = {true}
       futureWeather = {futureWeather[1]}
       />
    </div>
  )
}

export default HourlyCast