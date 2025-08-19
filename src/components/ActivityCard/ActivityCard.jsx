import React, {useState} from "react";
import styles from "./ActivityCard.module.css";
import Button from '../Button/Button';
import activities from '../../data/activities';

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
    <div className={styles.normal} {...props}>
      <h1>Question</h1>
      <p>{question}</p>
      <Button onClick={getRandomActivity} disabled={disabledButton}>Frågor</Button>
      <p>{!disabledButton ? currentActivity : "tyvärr slut på frågor"}</p>
    </div>
  );
}

export default ActivityCard;
