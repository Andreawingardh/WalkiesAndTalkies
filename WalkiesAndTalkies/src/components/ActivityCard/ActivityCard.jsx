import React from 'react'
import styles from './ActivityCard.module.css'

function QuestionCard({question, ...props}) {


    return (
        <div className={styles.normal} {...props}>
            <h1>Question</h1>
           <p>{question}</p>
        </div>
    )
}

export default QuestionCard