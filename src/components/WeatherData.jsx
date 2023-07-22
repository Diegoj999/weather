import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndDetails from "./TemperatureAndDetails";
import Forecast from "./Forecast";
import { WEATHER_DEFAULT, apiForecast, apiWeather } from "../apiConstants.js";
import useMultiplyFetch from "../hooks/useMultiplyFetch";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

const WeatherData = ({ query }) => {
  const { loading, data } = useMultiplyFetch( 
    [
      apiWeather(query ? query : WEATHER_DEFAULT),
      apiForecast(query ? query : WEATHER_DEFAULT),
    ],
    query
  );

  if (loading) return <Spinner />;

  if (data[0]?.cod === "404" || data[1]?.cod === "404") {
    return (
      <p className="flex mx-auto text-white mt-5 text-2xl">Sin resultados</p>
    );
  }

  return (
    <>
      <TimeAndLocation data={data[0]} />
      <TemperatureAndDetails data={data[0]} />
      <Forecast dataForecast={data[1]} />
    </>
  );
};

export default WeatherData;

WeatherData.propTypes = {
  query: PropTypes.string.isRequired,
};
