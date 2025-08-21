import "./App.css";
import CategoryBox from "./components/Category/CategoryBox";
import StartPage from "./components/StartPage/StartPage";
import { useEffect, useState } from "react";

function App() {
  const [showStartPage, setShowStartPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartPage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showStartPage ? <StartPage /> : <CategoryBox />}</>;
}

export default App;
