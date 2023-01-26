import React from 'react';
import styles from './styles.module.css';

const Section = (props) => {
  return (
    <div className={`${styles.root} ${props.className}`}>
      <div className={`container section ${styles.wrapper} `}>
        {props.children}
      </div>
    </div>
  )
}

export default Section