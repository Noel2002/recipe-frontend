import React from 'react';
import styles from "./title.module.css";

const Title = (props) => {
  return (
    <div className={styles.root}>
        <div className={styles.line}><div></div></div>
        <div className={styles.title}>{props.children}</div>
        <div className={styles.line}><div></div></div>
    </div>
  )
}

export default Title;