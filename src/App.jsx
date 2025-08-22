import "./App.css";
import CategoryBox from "./components/Category/CategoryBox";
import StartPage from "./components/StartPage/StartPage";
import { useEffect, useState } from "react";
import { getUserLocation } from "./components/Distance/Distance";

function App() {
  const [showStartPage, setShowStartPage] = useState(true);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await getUserLocation();
      } catch (error) {
      } finally {
        await sleep(1500);  
        setShowStartPage(false);
      }
    };

    initializeApp();

  }, []);

  return <>{showStartPage ? <StartPage /> : <CategoryBox />}</>;
}

export default App;
