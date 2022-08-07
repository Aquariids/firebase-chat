import React from 'react';
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div
            style={{ height: window.innerHeight - 50 }} className={styles.loader}>
            <div>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    );
};

export default Loader;