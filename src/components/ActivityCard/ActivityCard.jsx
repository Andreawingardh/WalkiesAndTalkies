import React, {useState}from "react";
import styles from "./ActivityCard.module.css";
import Button from '../Button/Button';
import activities from '../../data/activities';

function ActivityCard({ question, ...props }) {
const [currentActivity, setCurrentActivity] = useState("");

  function getRandomActivity() {
    setCurrentActivity(activities[Math.floor(Math.random()*activities.length)].question);
  }

  return (
    <div className={styles.normal} {...props}>
      <h1>Question</h1>
      <p>{question}</p>
      <Button onClick={getRandomActivity}>Frågor</Button>
      <p>{currentActivity}</p>
    </div>
  );
}

export default ActivityCard;
