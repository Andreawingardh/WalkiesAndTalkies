import React from "react";
import Startsteg from "../../assets/images/Startsteg.svg";
import CloudStart from "../../assets/images/Cloud-start.svg";
import Seagull from "../../assets/images/Seagull.png";
import styles from "./StartPage.module.css";

function StartPage() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.startsteg} src={Startsteg} />

        <div className={styles.cloudWrapper}>
          <img className={styles.cloud} src={CloudStart} />

          <div className={styles.textbox}>
          <h1>TankeStigen</h1>
          <h3>Lindholmen</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartPage;
