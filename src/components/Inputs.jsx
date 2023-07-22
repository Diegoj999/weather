import { UilSearch, UilQuestionCircle } from "@iconscout/react-unicons";
import WeatherData from "./WeatherData";
import { useState } from "react";
import { toast } from "react-hot-toast";

function Inputs() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.currentTarget.city.value;
    setQuery(city);
  };

  const questionBotton = () => {
    const toastStyle = {
      animation: "toastFadeIn 0.3s, toastFadeOut 0.3s 3.7s",
    };
  
    toast.custom(
      (t) => (
        <div
          className={`bg-gray-800 text-black border-2 border-gray-300 p-4 rounded-md shadow-md`}
          onClick={() => toast.dismiss(t.id)}
          style={toastStyle}
        >
          <p className="text-white">
            {`Si tu ciudad existe en más países, especifica el país con este formato: "Ciudad, País"`}
          </p>
        </div>
      ),
      {
        position: "bottom-center",
        duration: 2800,
      }
    );
  };

  return (
    <div className="flex flex-col my-6 ">
      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row md:w-3/4 items-center justify-center space-x-4"
      >
        <input
          type="text"
          name="city"
          placeholder="Buscar Ciudad..."
          className="font-light p-2 w-full shadow-xl focus:outline-none bg-gray-300 text-gray-900 rounded"
        />
        <button type="submit">
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </button>
        <UilQuestionCircle
          size={35}
          onClick={questionBotton}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </form>
      <WeatherData query={query} />
    </div>
  );
}

export default Inputs;
