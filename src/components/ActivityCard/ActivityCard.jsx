import React, {useState} from "react";
import styles from "./ActivityCard.module.css";
import Button from '../Button/Button';
import activities from '../../data/activities';
import Cloud from "../../assets/images/Cloud.svg";
import Seagull from "../../assets/images/Seagull.png";

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
    <div>
    <img className={styles.cloud} src={Cloud} {...props}/>
    <img className={styles.seagull} src={Seagull}/>
      <h1>Question</h1>
      <p>{question}</p>
      <p>{!disabledButton ? currentActivity : "tyvärr slut på frågor"}</p>
      <Button onClick={getRandomActivity} disabled={disabledButton}>Frågor</Button> 
    </div>
  );
}

export default ActivityCard;
