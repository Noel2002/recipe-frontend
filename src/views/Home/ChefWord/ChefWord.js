import React from 'react';
import styles from './chefWord.module.css';
import Section from '../../../components/Section/Section';
import Title from '../../../components/Title/Title';

const ChefWord = () => {
  return (
    <Section className="bg-primary-light">
        <Title>
            Chef's word
        </Title>
        <div className={`${styles.ellipse}`}>
            <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" />
        </div>
        <p className={`${styles.word} paragraph mt-20`}>
            Lorem ipsum dolor sit amet. A laborum enim et internos maiores vel voluptas omnis. Qui error enim qui consequatur expedita et quia quos ut internos officiis aut totam illum eos repellendus harum. Et doloremque libero 33 facere minus ut quos suscipit.
        </p>
        <p className={`${styles["name-tag"]} mt-20`}>
            - Chef. John Doe
        </p>
    </Section>
  )
}

export default ChefWord