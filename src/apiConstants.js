
const apiKey = import.meta.env.VITE_API_KEY;

export const WEATHER_DEFAULT = "Buenos%20Aires";
export const apiWeather = (city) => `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=3d903356f57d9397bbb908197298d953`;
export const apiForecast = (city) =>  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;