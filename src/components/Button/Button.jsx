import React, {useState} from 'react';
import styles from './Button.module.css'

function Button({children}) { 
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(true);
    }
    return (
    <button 
    className={styles.button} 
    disabled={isDisabled} 
    onClick={handleClick}
>
    {children}
</button>
)
}


export default Button;
