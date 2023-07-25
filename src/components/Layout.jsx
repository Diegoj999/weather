import { Toaster } from "react-hot-toast";
import Inputs from "./Inputs";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { CgDarkMode } from "react-icons/cg";

const Layout = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`h-screen ${
        darkMode ? "bg-gray-800" : "bg-neutral-100"
      } pt-10 md:pt-20`}
    >
      <div
        className={`flex flex-col md:mx-auto md:max-w-screen-md mx-2 mt-0 md:my-0 pt-6 pb-10 px-10 md:px-32 ${
          darkMode ? "bg-neutral-800 border-blue-400" : "bg-neutral-100 shadow shadow-gray-300"
        } rounded-lg border-2 `}
      >
        <div className={`flex justify-center`}>
          <CgDarkMode
            onClick={handleDarkMode}
            size={25}
            className={`${darkMode ? "text-neutral-50" : "text-neutral-800"}`}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Toaster />
        <Inputs />
      </div>
    </div>
  );
};

export default Layout;
