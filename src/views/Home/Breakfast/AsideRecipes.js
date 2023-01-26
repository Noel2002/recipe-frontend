import React from 'react';
import styles from "./asideRecipes.module.css";
import RecipeCard from '../../../features/Recipes/RecipeCards/RecipeCard';


const AsideRecipes = () => {
  return (
    <div className={`${styles.root}`}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
    </div>
  )
}

export default AsideRecipes