import React from 'react';
import styles from './ingridients.module.css'
import SubTitle from '../SubTitle/SubTitle';

const Ingridients = () => {
  return (
    <div className={`${styles.root}`}>
        <SubTitle>
            ingridients
        </SubTitle>
        <ul className={`${styles["ingridients-list"]}`}>
            <li>8 slices bacon, halved</li>
            <li>7 eggs, divided</li>
            <li>2 tbsp. grated parmesan cheese</li>
            <li>2 tbsp. heavy cream</li>
            <li>1/4 tsp. ground black pepper</li>
            <li>1 17.3-oz. box frozen puff pastry, thawed (2 sheets)</li>
            <li>1 c. shredded white cheddar cheese</li>
            <li>1 tbsp. everything bagel seasoning</li>
        </ul>
    </div>
  )
}

export default Ingridients