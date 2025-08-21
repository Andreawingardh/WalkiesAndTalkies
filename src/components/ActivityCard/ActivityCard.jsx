import React, {useState} from "react";
import styles from "./ActivityCard.module.css";
import Button from '../Button/Button';
import activities from '/src/data/activities';
import CloudActivity from "/src/assets/images/cloud-activity.svg";
import Refresh from "/src/assets/images/refresh.svg";

function ActivityCard({ question, ...props }) {
const [currentActivity, setCurrentActivity] = useState("");
const [activitiesArray, setActivitiesArray] = useState(activities);
const [disabledButton, setDisabledButton] = useState(false)

  function getRandomActivity() {
    if (activitiesArray.length == 0) {
      setDisabledButton(true)
      return;
    }
  let number = Math.floor(Math.random()*activitiesArray.length);

    setCurrentActivity(activitiesArray[number].question);
    setActivitiesArray(activitiesArray.filter((_, index) => index !== number));

  }

  return (
    <div className={styles.cloudWrapper}>


    <img className={styles.cloud} src={CloudActivity} {...props}/>
      <div className={styles.textbox}>
      <p> {!currentActivity && question}</p>
      <p>{!disabledButton ? currentActivity : "tyvärr slut på frågor"}</p>
      </div>
      <Button className={styles.button} onClick={getRandomActivity} disabled={disabledButton}>
        <img className={styles.refresh} src={Refresh}/>
      </Button> 
    </div>
  );
}

export default ActivityCard;
