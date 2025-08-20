import CategoryButton from "./CategoryButton";
import styles from "./Category.module.css";
import LocationCard from "../LocationCard/LocationCard";
import Button from "../Button/Button";
import { useState } from "react";
import activities from "../../data/activities";
import locations from "../../data/locations";
import ActivityCard from "../ActivityCard/ActivityCard";
import Distance from "../Distance/Distance";

const themes = [
  { name: "Utsikt", id: 1 },
  { name: "Kultur", id: 2 },
  { name: "Grönska", id: 3 },
  { name: "Historia", id: 4 },
  { name: "Vatten", id: 5 },
];

function CategoryBox() {
  const [currentActivity, setCurrentActivity] = useState("");
  const [activitiesArray, setActivitiesArray] = useState(activities);
  const [disabledButton, setDisabledButton] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const [locationArray, setLocationArray] = useState(locations);
  const [currentCategory, setCurrentCategory] = useState();

  function handleClick(e) {
    e.preventDefault();
    getRandomLocation();
    getRandomActivity();
  }

  function getRandomActivity() {
    if (activitiesArray.length == 0) {
      setDisabledButton(true);
      return;
    }
    let number = Math.floor(Math.random() * activitiesArray.length);

    setCurrentActivity(activitiesArray[number].question);
    setActivitiesArray(activitiesArray.filter((_, index) => index !== number));
  }

  function getRandomLocation() {
    if (locationArray.length == 0) {
      setDisabledButton(true);
      return;
    }

    let arrayToUse = locationArray;

    if (currentCategory) {
      arrayToUse = locationArray.filter((item) =>
        item.categories.includes(currentCategory)
      );
    }

    let number = Math.floor(Math.random() * arrayToUse.length);

    setCurrentLocation(arrayToUse[number]);
    const selectedLocation = arrayToUse[number];
    const originalIndex = locationArray.findIndex(
      (item) => item === selectedLocation
    );
    setLocationArray(
      locationArray.filter((_, index) => index !== originalIndex)
    );
  }
  return (
    <>
      {!currentLocation && (
        <div className={styles.outerBox}>
          <div className={styles.headerBox}>
            <h2>Skräddarsy din promenad</h2>
            <p>Välj en eller tryck generera för att slumpa fram</p>
          </div>
          <form className={styles.box}>
            {themes.map((theme) => (
              <CategoryButton
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentCategory(theme.name.toLowerCase());
                }}
                themeName={theme.name}
                key={theme.id}
              />
            ))}
            <Button onClick={(e) => handleClick(e)} disabled={disabledButton}>
              Generera
            </Button>
          </form>
        </div>
      )}

      {currentActivity && <ActivityCard question={currentActivity} />}
      {currentLocation && (
        <>
          <LocationCard
            location={currentLocation}
            resetClick={() => {
              setCurrentLocation("");
              setCurrentActivity("");
              setCurrentCategory("");
            }}
          />
          <Distance
            lat={currentLocation.coordinates.lat}
            lng={currentLocation.coordinates.lng}
          ></Distance>
        </>
      )}
    </>
  );
}

export default CategoryBox;
