import React from 'react';
import styles from './instructions.module.css';
import SubTitle from '../SubTitle/SubTitle';
import Instruction from './Instruction/Instruction';

const Instructions = (props) => {
  const instructions = props.instructions;
  return (
    <div className={`${styles.root}`}>
        <SubTitle>
            Instructions
        </SubTitle>
        {
          instructions.map( (instruction) =>(
            <Instruction instruction={instruction} />
          ))
        }
    </div>
  )
}

export default Instructions