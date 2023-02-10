import React from 'react';
import styles from './instruction.module.css';
import CardMedia from '../../../../components/Cards/Card/CardMedia/CardMedia';

const Instruction = (props) => {
  const instruction = props.instruction;
  console.log(instruction);

  return (
    <div className={`${styles.root}`}>
      <div className={`${styles["number-box"]}`}>
        1
      </div>
      <div className={`${styles["instr-desc-box"]}`}>
         <p>
            {instruction.description}
        </p>
        <CardMedia aspectratio="common">
          <img src={instruction.cover} />
        </CardMedia>
      </div>
     
    </div>
  )
}

export default Instruction