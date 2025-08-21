import React from "react";
import Startsteg from "/src/assets/images/startsteg.svg";
import CloudStart from "../../../src/assets/images/cloud-start.svg";
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
