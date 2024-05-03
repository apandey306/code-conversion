export interface City {
    name: string;
    id: number;
    country: string;
  }
  
export interface WeatherData {
     temp: number;
     minTemp: number;
     maxTemp: number;
     humidity: number;
     description: string;
     visibility: number;
  }