import React from 'react'
import MainRecipe from './MainRecipe';
import AsideRecipes from './AsideRecipes'
import styles from './breakfastRecipes.module.css'
import Title from '../../../components/Title/Title';
import { breakfast } from '../../../data/dummyRecipes';

const BreakFastRecipes = (props) => {
  const recipes = breakfast;
  const mainRecipe = recipes[0];
  const sideRecipes = recipes.slice(1,5);
  // console.log(sideRecipes);
  return (
    <div className={`mini-section`}>
      <Title>
        Breakfast Meals
      </Title>
      <div className={`${styles.root}`}>
        <MainRecipe recipe={mainRecipe} />
        <AsideRecipes recipes={sideRecipes}/>
      </div>
    </div>
  )   
}

export default BreakFastRecipes;