import styles from "./cardMedia.module.css";
import React from 'react'

const CardMedia = (props) => {
  return (
    <div className={styles.root} aspectratio={props.aspectratio? props.aspectratio: "none"}>
      {props.children}
    </div>
  )
}

export default CardMedia