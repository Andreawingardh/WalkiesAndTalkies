import React, {useState} from 'react';
import styles from './InfoCard.module.css';
import bgWave from "../../assets/images/starwave.svg";

function InfoCard({showTitle}) {
    return (
        <>
            <div className={styles.infoHeader} style={{ backgroundImage: `url(${bgWave})` }}>
                {showTitle ? (
                    <h1>TankeStigen</h1>
                ) : null}
            </div>
        </>
    )
};

export default InfoCard;