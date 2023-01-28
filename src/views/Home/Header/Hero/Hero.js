import React from 'react';
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.root}`}>
        <input type="text" placeholder='Search Recipe' className={`${styles["search-bar"]}`}/>
    </div>
  )
}

export default Hero