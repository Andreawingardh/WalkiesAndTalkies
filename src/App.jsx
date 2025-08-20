import "./App.css";
import LocationCard from "./components/LocationCard/LocationCard";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import activites from "./data/activities";
import locations from "./data/locations";
import MapsButton from "./components/maps_button/MapsButton";
import Button from "./components/Button/Button";
import CategoryBox from "./components/Category/CategoryBox";
import StartPage from "./components/StartPage/StartPage";
import Distance from "./components/Distance/Distance";
import { useEffect, useState } from "react";

function App() {
  const [showStartPage, setShowStartPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartPage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showStartPage ? <StartPage /> : <CategoryBox />}</>;

}

export default App;
