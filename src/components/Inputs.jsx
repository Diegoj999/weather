import { UilSearch, UilQuestionCircle } from "@iconscout/react-unicons";
import WeatherData from "./WeatherData";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { DarkModeContext } from "../context/darkModeContext";

function Inputs() {
  const [query, setQuery] = useState("");

  const { darkMode } = useContext(DarkModeContext);

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
          className={`bg-gray-600 text-black  p-4 rounded-md shadow-md`}
          onClick={() => toast.dismiss(t.id)}
          style={toastStyle}
        >
          <p className="text-gray-200">
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
        className="flex md:flex-row md:w-3/4 items-center justify-center focus:none space-x-4"
      >
        <input
          type="text"
          name="city"
          placeholder="Buscar Ciudad..."
          autoComplete="off"
          className={`font-light p-2 w-full  focus:outline-none ${darkMode ? " bg-gray-200 text-neutral-900" : "border-2 border-blue-300 text-neutral-900" } rounded`}
        />
        <button type="submit">
          <UilSearch
            size={25}
            className={`${darkMode ? " text-neutral-200" : "text-neutral-900" } cursor-pointer transition ease-out hover:scale-125`}
          />
        </button>
        <UilQuestionCircle
          size={35}
          onClick={questionBotton}
          className={`${darkMode ? " text-neutral-200" : "text-neutral-900" } cursor-pointer transition ease-out hover:scale-125`}
        />
      </form>
      <WeatherData query={query} />
    </div>
  );
}

export default Inputs;
