import axios from 'axios';
import { WEATHER_API_KEY } from './config';
import { City, WeatherData } from './types';
import cities from './sampleCityList.json';


export async function getWeather(city: string): Promise<WeatherData | null> {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const minTemp = data.main.temp_min;
    const maxTemp = data.main.temp_max;
    const humidity = data.main.humidity;
    const visibility = data.visibility;
    const weatherData: WeatherData = {
      temp,
      minTemp,
      maxTemp,
      humidity,
      description: desc,
      visibility
    };

    return weatherData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function getCitiesList(): City[] {
  return cities.filter((city: City) => city.country === 'IN').sort((a, b) => a.name.localeCompare(b.name));
}