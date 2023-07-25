import Layout from "./components/Layout";
import { DarkModeProvider } from "./context/darkModeContext";
function App() {
  return (
    <DarkModeProvider>
      <Layout />
    </DarkModeProvider>
  );
}

export default App;
