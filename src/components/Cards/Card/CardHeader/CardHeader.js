import styles from "./cardHeader.module.css";
import React from 'react'

const CardHeader = (props) => {
  const level = "level-"+props.level;
  return (
    <div className={`${styles.root} ${styles[level]} mt-10`}>
        {props.children}
    </div>
  )
}

export default CardHeader;