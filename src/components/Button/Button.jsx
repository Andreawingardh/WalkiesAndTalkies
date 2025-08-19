import React, {useState} from 'react';
import styles from './Button.module.css'

function Button({children, ...props}) { 
    const [isDisabled, setIsDisabled] = useState(false);

    return (
    <button 
    className={styles.button} 
    disabled={isDisabled} 
    {...props}
>
    {children}
</button>
)
}


export default Button;
