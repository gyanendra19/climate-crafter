import React, { useEffect } from 'react'
import { RiDropLine, RiEyeFill } from '@remixicon/react'
import { useWeatherContext } from '../contexts/WeatherContext'

function Weather({
}) {

const {fahrenheitToCelsius, allWeather, address, futureWeather, dayOrNight} = useWeatherContext()
  return (
    <>
      <div className='w-full h-48 flex items-center justify-center max-md:h-64 max-md:mt-12'>

      <div className={`absolute flex flex-wrap text-3xl top-44 left-12 max-md:top-56 max-md:left-32 max-md:text-2xl ${(dayOrNight(allWeather) >= 19 || dayOrNight(allWeather) < 6) ? 'text-white/75' : 'text-black/75'}`}>{address.split(',')[0].toUpperCase()} ,</div>

      <div className={`absolute flex flex-wrap text-3xl top-52 left-12 max-md:left-32 max-md:top-60 max-md:mt-2 max-md:text-2xl ${(dayOrNight(allWeather) >= 19 || dayOrNight(allWeather) < 6) ? 'text-white/75' : 'text-black/75'}`}>{address.split(',')[1]?.toUpperCase()}</div>

        <div className='w-6/12 bg-white/25 h-full rounded-2xl flex relative max-lg:w-11/12'>
          <div className='mt-3'>
            {(allWeather.conditions === 'Clear' && (dayOrNight(allWeather) >= 19 || dayOrNight(allWeather) < 6) ) ?
            <img className='h-36 mr-3 mt-1 cloud-size max-md:h-20 max-md:ml-4' src="/img/moon.png" alt="/" />
            :
            allWeather.conditions === 'Clear' ? 
            <img className='h-40 mr-6 sun-spin max-md:h-20' src="/img/Designer.png" alt="/" />
            :
            allWeather.conditions?.split(',').includes('Rain') 
            ?
            <img className='h-52 absolute cloud-size max-md:h-20' src="/img/rain.png" alt="/" />
            :
            <img className='h-32 mr-6 mt-2 cloud-size max-md:h-20' src="/img/cloud.png" alt="/" />
            }
          </div>

          <div className='mt-10 absolute left-40 max-md:mt-8 max-md:left-24 max-md:flex'>
            <div className='flex'>
              <h1 className='text-6xl text-black/75 max-md:text-5xl'>{fahrenheitToCelsius(allWeather.temp).toFixed(1)}°</h1>
              <span className='text-4xl mt-5 ml--1 text-black/75 max-md:text-3xl'>c</span>
            </div>

            <div className='mt-2 text-xl text-black/85 max-md:mt-0'>
              <p className='font-medium'>{allWeather.conditions}</p>
              <span className='block mt-1 font-medium max-md:absolute max-md:right-20 max-md:top-11 max-md:text-sm max-md:w-24'>{fahrenheitToCelsius(futureWeather[0]?.tempmin).toFixed(1)}° / {fahrenheitToCelsius(futureWeather[0]?.tempmax).toFixed(1)}°</span>
            </div>
          </div>

          <div className='grid-cols-2 grid absolute right-7 mt-3 gap-x-5 gap-2 max-md:mt-28 max-md:gap-1 max-md:right-5'>
            <div className='w-36 bg-white/35 h-20 rounded-xl grid grid-cols-2 items-center justify-center gap-2 max-md:w-36 max-md:h-16'>
              <div className='flex flex-col justify-center items-center mb-9'>
                <img className='h-11 w-11 max-md:h-8 max-md:w-8' src="/img/sunrise.png" alt="" />
                <img className='h-8 w-8 max-md:h-6 max-md:w-6' src="/img/sunset.png" alt="" />
              </div>

              <div className='flex flex-col justify-center items-start mb-6'>
                <p className='font-semibold'>{allWeather.sunrise?.split(':').splice(0, 2).join(':')}</p>
                <p className='font-semibold'>{allWeather.sunset?.split(':').splice(0, 2).join(':')}</p>
              </div>
            </div>

            <div className='w-36 bg-white/35 h-20 rounded-xl max-md:w-36 max-md:h-16'>
              <div className='flex ml-6 mt-3 font-semibold'>
                <RiDropLine
                  className='mt-1'
                  size={15}
                />
                <p className='ml-2'>Humidity</p>
              </div>
              <h1 className='ml-12 mt-1 text-xl font-semibold max-md:text-lg max-md:mt-0'>{allWeather.humidity}%</h1>
            </div>

            <div className='w-36 bg-white/35 h-20 rounded-xl max-md:w-36 max-md:h-16'>
              <div className='flex ml-6 mt-3 font-semibold'>
                <RiEyeFill
                  className='mt-1'
                  size={18}
                />
                <p className='text-md ml-2'>Visibility</p>               
              </div>
                <div className='flex gap-1'>
                <h1 className='ml-14 mt-1 text-xl font-semibold max-md:text-lg max-md:mt-0'>{Math.ceil(allWeather.visibility)}</h1>
                <span className='mt-2 font-semibold max-md:text-sm max-md:mt-1'>km</span>
                </div>
            </div>

            <div className='w-36 bg-white/35 h-20 rounded-xl max-md:w-36 max-md:h-16'>
            <p className='text-md ml-6 mt-2 font-semibold'>Air Pressure</p>
            <div className='flex gap-1 mt-1 max-md:mt-0'>
                <h1 className='ml-8 text-xl font-semibold max-md:text-lg max-md:ml-10'>{Math.ceil(allWeather.pressure)}</h1>
                <span className='text-md mt-1 font-semibold max-md:text-sm max-md:mt-1'>hPa</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather