import Sun from "../assets/sun.png";
import Cloud from "../assets/cloudy.png";
import Drizzle from "../assets/drizzle.png"
import Snow from "../assets/snow.png"
import Storm from "../assets/storm.png"
import Fog from "../assets/fog.png"
import Smoke from "../assets/co2.png"
import Dust from "../assets/dust.png"
import Tornado from "../assets/tornado.png"



export function getDataFromList(list) {
  return list.slice(0, 5).map((item) => {
    const dateTime = item.dt_txt;
    const temp = item.main.temp;
    const weather = item.weather[0].main;
    const hour = dateTime.split(" ")[1].slice(0,5);
    const { icon } = getWeatherStats(weather);
    return { temp, hour, weather, icon };
  });
}

export function getWeatherStats(weather) {
  const weatherStats = {
    Clear: { translation: 'Despejado', icon: Sun },
    Clouds: { translation: 'Nublado', icon: Cloud },
    Rain: { translation: 'Lluvioso', icon: Drizzle },
    Drizzle: { translation: 'Llovizna', icon: Drizzle },
    Thunderstorm: { translation: 'Tormenta', icon: Storm },
    Snow: { translation: 'Nevadas', icon: Snow },
    Mist: { translation: 'Niebla', icon: Fog },
    Fog: { translation: 'Niebla', icon: Fog },
    Haze: { translation: 'Neblina', icon: Fog },
    Smoke: { translation: 'Humo', icon: Smoke },
    Dust: { translation: 'Polvo', icon: Dust },
    Sand: { translation: 'Arena', icon: Dust },
    Ash: { translation: 'Ceniza', icon: Dust },
    Squall: { translation: 'Chubasco', icon: Drizzle },
    Tornado: { translation: 'Tornado', icon: Tornado }
  };

  return weatherStats[weather] || { translation: 'Otro', icon: null };
}

