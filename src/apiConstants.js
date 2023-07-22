
const apiKey = import.meta.env.VITE_API_KEY;

export const WEATHER_DEFAULT = "Buenos%20Aires";
export const apiWeather = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
export const apiForecast = (city) =>  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;