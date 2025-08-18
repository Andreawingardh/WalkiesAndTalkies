import React, {useState} from 'react';
import styles from './InfoCard.module.css';

function InfoCard({children}) {
    return <h1 className={styles.title}>{children}</h1>
};

export default InfoCard;