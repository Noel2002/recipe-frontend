import styles from "./cardContent.module.css";

import React from 'react'

const CardContent = (props) => {
  return (
    <div className={`${styles.root} mt-20`}>
        {props.children}
    </div>
  )
}

export default CardContent;