import React, { useEffect, useState } from 'react'
import Weather from './Weather'
import Forcast from './Forcast';
import SearchInput from './SearchInput';
import { useWeatherContext } from '../contexts/WeatherContext';

function Search() {
  const {error, errorMsg, Loading, setLoading} = useWeatherContext()
  return (
    <>
    {Loading ?
    <>
    <SearchInput />
    <div className='absolute left-1/2 top-2/4 w-12 h-12 border-t-gray-500 animate-spin border-4 border-white/80 border-solid rounded-full '></div> 
    </>
    :
    error ? 
    <>
    <SearchInput />
    <div className='flex w-full h-1/2 justify-center items-center'>
      <h1 className='text-2xl bg-white/25 w-5/12 flex items-center justify-center h-28 rounded-2xl p-4 max-lg:h-64 max-lg:w-7/12'>
        {errorMsg}
      </h1>
    </div>
    </>
    :
    <>
    <SearchInput />
    <Weather/>
    <Forcast/>
    </>
  }
    </>
  )
}

export default Search

