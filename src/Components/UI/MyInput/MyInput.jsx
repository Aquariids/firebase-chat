import React from 'react';
import styles from './MyInput.module.css'
const MyInput = ({...props}) => {
    return (
        <>
            <input {...props} type= 'text'
                rows={1}
                placeholder='Введите текст'
                className={styles.input} />
        </>
    );
};

export default MyInput;