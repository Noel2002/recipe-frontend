import React from 'react';
import styles from './ingridients.module.css'
import SubTitle from '../SubTitle/SubTitle';

const Ingridients = (props) => {
  const ingridients = props.ingridients;
  return (
    <div className={`${styles.root}`}>
        <SubTitle>
            ingridients
        </SubTitle>
        <ul className={`${styles["ingridients-list"]}`}>
          {
            ingridients.map( (ingridient) =>(
              <li>{ingridient}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default Ingridients