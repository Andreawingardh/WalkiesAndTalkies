import CategoryButton from "./CategoryButton";
import styles from "./Category.module.css";
import LocationCard from "../LocationCard/LocationCard";
import Button from "../Button/Button";
import { useState } from "react";
import activities from "../../data/activities";
import locations from "../../data/locations";
import ActivityCard from "../ActivityCard/ActivityCard";
import Distance from "../Distance/Distance";
import InfoCard from "../InfoCard/InfoCard";

const themes = [
  { name: "Utsikt", imgUrl: "/images/locations/slottsberget.png", id: 1 },
  { name: "Kultur", imgUrl: "/images/locations/konstverk.png", id: 2 },
  { name: "Grönska", imgUrl: "/images/locations/farjenasparken.png", id: 3 },
  { name: "Historia", imgUrl: "/images/locations/aftonstjarnan.png",id: 4 },
  { name: "Vatten", imgUrl: "/images/locations/lindholmsdockan.png", id: 5 },
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
          <InfoCard showTitle={true} />
          <div className={styles.headerBox}>
            <h2>Skräddarsy din promenad</h2>
            <p>Välj en kategori och tryck på ’Promenera’ för att få en slumpad promenad. Du kan också bara trycka på promenera.
              Under promenaden får du en fråga att fundera på.</p>
          </div>
          <form>
            <div className={styles.box}>
            {themes.map((theme) => (
              <CategoryButton
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentCategory(theme.name.toLowerCase());
                }}
                themeName={theme.name}
                imgUrl={theme.imgUrl}
                isSelected={currentCategory === theme.name.toLocaleLowerCase()}
                key={theme.id}
              />
            ))}
            </div>
            <div className={styles.generateBox}>
             <Button className={styles.generateBtn} onClick={(e) => handleClick(e)} disabled={disabledButton}>
              Promenera
            </Button>
            </div>
          </form>
        </div>
      )}

      {currentActivity && (
        <>
          <InfoCard showTitle={false} />
          <ActivityCard question={currentActivity} />{" "}
        </>
      )}
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
        </>
      )}
    </>
  );
}

export default CategoryBox;
