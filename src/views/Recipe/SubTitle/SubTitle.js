import React from 'react';
import styles from './subTitle.module.css'

const SubTitle = (props) => {

    return (
        <div className={`${styles.root} ${styles["txt-"+props.align]}`}>
            {props.children}
        </div>
    )
}

export default SubTitle