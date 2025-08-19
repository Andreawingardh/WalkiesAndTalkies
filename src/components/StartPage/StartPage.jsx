import React from "react";
import Startsteg from "../../assets/images/Startsteg.svg";
import Cloud from "../../assets/images/Cloud.svg";
import Seagull from "../../assets/images/Seagull.png";
import styles from "./StartPage.module.css";

function StartPage() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.startsteg} src={Startsteg} />

        <div className={styles.cloudWrapper}>
          <img className={styles.cloud} src={Cloud} />
          <img className={styles.seagull} src={Seagull} />
          <div className={styles.textbox}>
          <h1>TankeStigen</h1>
          <h2>Lindholmen</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartPage;
