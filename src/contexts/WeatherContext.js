import React, { useContext } from "react";

export const WeatherContext = React.createContext()

export const useWeatherContext = () => {
  return useContext(WeatherContext)
}