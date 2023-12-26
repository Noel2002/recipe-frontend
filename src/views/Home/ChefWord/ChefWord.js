import React from 'react';
import styles from './chefWord.module.css';
import Section from '../../../components/Section/Section';
import Title from '../../../components/Title/Title';

const ChefWord = () => {
  return (
    <Section className="bg-primary-light">
        <Title>
            About the chef
        </Title>
        <div className={styles["root"]}>
            <div className={styles["left"]}>
                <h3 className={styles['name-plug']}>Hi, I am Amanda Jones</h3>
                <div className={styles['summary']}>
                    <p>Welcome to Amanda Jones' recipe website, your go-to 
                        destination for mouthwatering dishes and culinary 
                        inspiration. Amanda is a passionate home cook and 
                        recipe developer with a love for creating delicious 
                        meals that bring people together. With a diverse 
                        collection of recipes spanning various cuisines and 
                        dietary preferences, Amanda's goal is to help you 
                        explore the joy of cooking and expand your culinary 
                        horizons.
                    </p>
                    <p>Amanda's culinary journey began at a young age, watching 
                        her grandmother whip up traditional family recipes with 
                        love and care. Inspired by these cherished memories and 
                        armed with a desire to share her love for cooking, 
                        Amanda started her recipe blog to connect with fellow 
                        food enthusiasts and provide accessible recipes for 
                        home cooks of all skill levels. Whether you're a 
                        seasoned chef or just starting your culinary adventure, 
                        Amanda's recipes are thoughtfully crafted, easy to 
                        follow, and guaranteed to tantalize your taste buds.
                    </p>
                </div>
            </div>
            <div className={styles['right']}>
                <img src='https://res.cloudinary.com/nowo-ltd/image/upload/v1703578398/recipes/istockphoto-1398325952-612x612_gvp0rq.jpg' alt='author profile image' />
            </div>
        </div>
    </Section>
  )
}

export default ChefWord