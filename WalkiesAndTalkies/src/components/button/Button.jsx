import React, {useState} from 'react';
import styles from './Button.module.css'

function Button() { 
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(true);

    return (
    <button 
    className={styles.button} 
    disabled={isDisabled} 
    onClick={handleClick}
>
    knapp
</button>
)
}
}

export default Button;
