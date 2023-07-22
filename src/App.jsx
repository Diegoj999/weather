import Inputs from "./components/Inputs";
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
      <div className="flex flex-col md:mx-auto md:max-w-screen-md mt-4 md:my-20 pt-6 pb-10 px-10 md:px-32 bg-gray-800 rounded-lg">
        <Toaster/>
        <Inputs />
      </div>
    </>
  );
}

export default App;
