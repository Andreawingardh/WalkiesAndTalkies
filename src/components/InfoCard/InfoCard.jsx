import React, { useState } from "react";
import styles from "./InfoCard.module.css";
import bgWave from "/src/assets/images/startwave.svg";
import bgWaveSmall from "../../../src/assets/images/startwave-small.svg"

function InfoCard({ showTitle }) {
  return (
    <>
      {showTitle ? (
        <div
          className={styles.infoHeader}
          style={{ backgroundImage: `url(${bgWave})` }}
        >
          <h1>TankeStigen</h1>
        </div>
      ) : (
        <div
          className={styles.infoHeaderSmall}
          style={{ backgroundImage: `url(${bgWaveSmall})` }}
        ></div>
      )}
    </>
  );
}

export default InfoCard;
