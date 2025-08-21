import "./App.css";
import CategoryBox from "./components/Category/CategoryBox";
import StartPage from "./components/StartPage/StartPage";
import { useEffect, useState } from "react";
import { getUserLocation } from "./components/Distance/Distance";

function App() {
  const [showStartPage, setShowStartPage] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await getUserLocation();
        console.log("Location ready!");
      } catch (error) {
        console.error("Failed to get location:", error);
      }
    };

    initializeApp();

    const timer = setTimeout(() => {
      setShowStartPage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showStartPage ? <StartPage /> : <CategoryBox />}</>;
}

export default App;
