import { useContext } from "react";
import { getDateDay, getDateHour } from "../helper/dates";
import PropTypes from "prop-types";
import { DarkModeContext } from "../context/darkModeContext";

const TimeAndLocation = ({data}) => {

  const {name, sys} = data;
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div>
      <div className="flex items-center mt-3">
        <p className={`${darkMode ? "text-gray-200" : "text-neutral-800"} font-extralight `}>
            {getDateDay()} | Hora Local: {getDateHour()}
        </p>
      </div>

      <div className="flex items-center my-3">
        <p className={`${darkMode ? "text-gray-200" : "text-neutral-900"} text-2xl font-medium`}>{name}, {sys.country}</p>
      </div>

    </div>
  );
};

export default TimeAndLocation;

TimeAndLocation.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
