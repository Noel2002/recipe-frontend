import React from 'react'
import Section from '../../../components/Section/Section'
import MainRecipe from './MainRecipe';
import AsideRecipes from './AsideRecipes'
import styles from './breakfastRecipes.module.css'
import Title from '../../../components/Title/Title';

const BreakFastRecipes = (props) => {
  return (
    <Section>
      <Title>
        Breakfast Meals
      </Title>
      <div className={`${styles.root}`}>
        <MainRecipe />
        <AsideRecipes />
      </div>
    </Section>
  )   
}

export default BreakFastRecipes;