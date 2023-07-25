import { useContext } from "react";
import { getDataFromList } from "../helper/temps";
import PropTypes from "prop-types";
import { DarkModeContext } from "../context/darkModeContext";

const Forecast = ({ dataForecast }) => {
  const { list } = dataForecast;

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div className="flex items-center justify-start mt-6 mb-4">
        <p
          className={`${
            darkMode ? "text-gray-200" : "text-neutral-900"
          } font-medium uppercase`}
        >
          Clima hoy
        </p>
      </div>
      <hr className="my-2 border-gray-600 opacity-50" />

      <div className="flex flex-row items-center justify-between ">
        {getDataFromList(list).map((element, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${
                darkMode ? "text-gray-200" : "text-neutral-900"
              }`}
            >
              <p>{element.hour}</p>
              <img src={element.icon} width={60} />
              {/* Utiliza la variable Icon para renderizar el componente de icono */}
              <p className="font-medium">{element.temp.toFixed()}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Forecast.propTypes = {
  dataForecast: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt_txt: PropTypes.string.isRequired,
        main: PropTypes.shape({
          temp: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            main: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Forecast;
