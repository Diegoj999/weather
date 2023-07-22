import { getWeatherStats } from "../helper/temps";
import { BsFillSunFill } from "react-icons/bs";
import { PiWindFill } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import PropTypes from 'prop-types';

const TemperatureAndDetails = ({ data }) => {
  const weatherData = getWeatherStats(data.weather[0].main)

  return (
    <div className="">
      <div className="flex">
      {<img src={weatherData.icon} width={70} />}
        <p className="text-white text-2xl md:text-3xl pt-6 mt-4 md:pt-2 mx-3">
          {data.main.temp.toFixed()}°C
        </p>
      </div>
      <div className="flex py-2">
        <p className="font-medium  text-2xl pt-2 mx-2 md:text-2xl mr-4 text-gray-400">
          {weatherData?.translation}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mr-4 gap-2 text-white py-3">
        <div>
          <div className="flex my-1 md:my-0 md:mx-1">
            <BsFillSunFill className="mx-1 mt-1" size={15} />
            <span className="pb-1">
              S. Termica: {data.main.feels_like.toFixed()} °C
            </span>
            <p className="ml-4 hidden md:block">|</p>
          </div>
        </div>

        <div>
          <div className="flex my-1 md:my-0 md:mx-1">
            <PiWindFill className="mx-1 mt-1" size={18} />
            <span>
              Viento: {Math.floor(data.wind.speed)} km/s
            </span>
            <p className="ml-4 hidden md:block">|</p>
          </div>
        </div>
        <div>
          <div className="flex my-1 md:my-0 md:mx-1">
            <WiHumidity className="ml-1 mt-1" size={18} />
            <span >Humedad: {data.main.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

TemperatureAndDetails.propTypes = {
  data: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TemperatureAndDetails;
