import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { RiSearch2Line } from "@remixicon/react";
import { useWeatherContext } from '../contexts/WeatherContext';


function SearchInput() {
    const [city, setCity] = useState('Goa')
    const [country, setCountry] = useState('India')
    const [toggle, setToggle] = useState(false)
    const { setAllWeather, setFutureWeather,setAddress, setError, setErrorMsg, setLoading} = useWeatherContext()
  
    useEffect(() => {
      ; (async () => {
        try{
            setError(false)
            setLoading(true)
            const response = await axios({
              method: 'GET',
              url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?key=B63DUQNK7PUR8YMBJ7342RM4F`
            })
            setAllWeather(response.data.currentConditions)
            setFutureWeather(response.data.days)
            setAddress(response.data.address)
            setLoading(false)
        }catch(err){
            setError(true)
            setErrorMsg(err.response?.data || 'No internet Connection, Try Again!')
            setLoading(false)
        }
      })()
    }, [toggle])
  
    return (
      <>
        <div className='flex h-32 gap-4 items-center justify-center max-lg:flex-col max-lg:h-60'>
          <input
            type="text"
            className='w-48 h-12 rounded-2xl p-4 bg-white/25 focus:outline-none text-black uppercase'
            placeholder='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className='w-48 h-12 rounded-2xl p-4 bg-white/25 focus:outline-none  text-black uppercase'
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
  
          <div
            onClick={() => setToggle(prev => !prev)}
            className='bg-white/25 w-12 h-12 rounded-full cursor-pointer flex items-center justify-center'
          >
            <RiSearch2Line
              color='white'
            />
          </div>
        </div>
      </>
    )
}

export default SearchInput