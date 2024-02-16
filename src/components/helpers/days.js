import { useWeatherContext } from "../../contexts/WeatherContext"

const {futureWeather} = useWeatherContext()
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday', 'Sunday']

export const day = () => {
    const presentDay = new Date(futureWeather[0]?.datetimeEpoch * 1000).getDay()
    weekDays.forEach((day) => {
        if((weekDays.indexOf(day) + 1) === presentDay) return day
    })
  }