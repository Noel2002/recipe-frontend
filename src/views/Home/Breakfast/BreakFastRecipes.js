import React, { useEffect, useState } from 'react'
import MainRecipe from './MainRecipe';
import AsideRecipes from './AsideRecipes'
import styles from './breakfastRecipes.module.css'
import Title from '../../../components/Title/Title';
import { getRecipesByCategory } from '../../../firebase/services/recipeService';

const BreakFastRecipes = (props) => {
  const [recipes, setRecipes] = useState([])
  // const mainRecipe = recipes[0];
  // const sideRecipes = recipes.slice(1,5);

  useEffect( ()=>{
    const fetchRecipes = async ()=>{
      const docs = await getRecipesByCategory("breakfast");
      setRecipes(docs);
    }
    fetchRecipes()
    
  }, []);
  return (
    <div className={`mini-section`}>
      <Title>
        Breakfast Meals
      </Title>
      { recipes.length > 0 && 
      (<div className={`${styles.root}`}>
        <MainRecipe recipe={recipes[0]} />
        <AsideRecipes recipes={recipes.slice(1, 5)}/>
      </div>)}
    </div>
  )   
}

export default BreakFastRecipes;