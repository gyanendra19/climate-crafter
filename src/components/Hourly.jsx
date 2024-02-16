import React from 'react'
import { useWeatherContext } from '../contexts/WeatherContext'

function Hourly({
    futureWeather,
    weatherToggle
}) {
    const {day, fahrenheitToCelsius, dayOrNight, allWeather } = useWeatherContext()

  return (
    <>
      {futureWeather?.hours.filter(el => (dayOrNight(allWeather) < dayOrNight(el) || weatherToggle) ).map(hour => (
        <div className='min-w-56 h-72 mt-7 ml-7 mb-5 bg-white/30 rounded-md'>
        <div className='h-10 w-full bg-white/30 flex'>
          <h3 className='text-xl ml-3 mt-1'>{hour.datetime.split(':').slice(0, 2).join(':')}</h3>
          <p className='text-md mt-2 ml-2'>{day(hour.datetimeEpoch).slice(0, 3).toUpperCase()}</p>
        </div>

        <div className='w-full h-32 text-black/85'>
          <div className='flex'>
            <h1 className='text-5xl mt-5 ml-2'>{fahrenheitToCelsius(hour.temp).toFixed(1)}</h1>
            <span className='text-3xl mt-5 ml--1'>°</span>
            <span className='text-4xl mt-8 ml--1'>c</span>
            {(hour.conditions === 'Clear' && (dayOrNight(hour) >= 19 || dayOrNight(hour) < 6)) ?
              <img className='h-16 ml-4 mt-3 cloud-size' src="/src/img/moon.png" alt="/" />
              :
              hour.conditions === 'Clear' ?
                <img className='h-16 mt-2 ml-2 sun-spin' src="/src/img/Designer.png" alt="/" />
                :
                hour.conditions?.split(',').includes('Rain')
                  ?
                  <img className='h-16 mt-2 ml-2 cloud-size' src="/src/img/rain.png" alt="/" />
                  :
                  <img className='h-16 mt-2 cloud-size' src="/src/img/cloud.png" alt="/" />
            }
          </div>

          <p className='ml-5 mb-2 text-black/95 text-sm'>Feels like {fahrenheitToCelsius(hour.feelslike).toFixed(1)}</p>
          <div className='flex justify-center'>
            <p className='text-xl'>{hour.conditions}</p>
          </div>

          <div className='h-8 mt-3 flex justify-between items-center text-black'>
            <p className='ml-4'>Humidity</p>
            <h4 className='mr-4'>{hour.humidity} %</h4>
          </div>
          <div className='h-8 flex justify-between items-center text-black'>
            <p className='ml-4'>Air Pressure</p>
            <h4 className='mr-4'>{hour.pressure} hPa</h4>
          </div>
          <div className='h-8 rounded-md flex justify-between items-center text-black'>
            <p className='ml-4'>Dew Point</p>
            <h4 className='mr-4'>{hour.dew}°</h4>
          </div>
        </div>
      </div>
      ))}
    </>
  )
}

export default Hourly