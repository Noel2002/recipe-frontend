import React from 'react';
import styles from './instructions.module.css';
import SubTitle from '../SubTitle/SubTitle';
import Instruction from './Instruction/Instruction';

const Instructions = () => {
  return (
    <div className={`${styles.root}`}>
        <SubTitle>
            Instructions
        </SubTitle>
        <Instruction />
        <Instruction />
        <Instruction />
    </div>
  )
}

export default Instructions