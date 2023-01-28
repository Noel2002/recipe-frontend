import React from 'react';
import styles from './instruction.module.css';
import CardMedia from '../../../../components/Cards/Card/CardMedia/CardMedia';

const Instruction = () => {
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles["number-box"]}`}>
        1
      </div>
      <div className={`${styles["instr-desc-box"]}`}>
         <p>
          Lorem ipsum dolor sit amet. Et molestiae voluptatibus aut laudantium error At earum ipsa. Qui consequuntur molestiae aut rerum perferendis aut iste eius qui dolore voluptas qui quia distinctio hic minus nobis sit quia tempora. A molestiae facilis et soluta vitae a reiciendis architecto hic repellat molestiae id praesentium amet id sapiente deserunt. Id atque nostrum et repellendus neque ea dolorem velit non aperiam rerum.
        </p>
        <CardMedia aspectratio="common">
          <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" />
        </CardMedia>
      </div>
     
    </div>
  )
}

export default Instruction