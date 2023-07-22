import { getDateDay, getDateHour } from "../helper/dates";
import PropTypes from "prop-types";

const TimeAndLocation = ({data}) => {

  const {name, sys} = data;

  return (
    <div>
      <div className="flex items-center mt-3">
        <p className="text-white font-extralight ">
            {getDateDay()} | Hora Local: {getDateHour()}
        </p>
      </div>

      <div className="flex items-center my-3">
        <p className="text-white text-2xl font-medium">{name}, {sys.country}</p>
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
