import React from 'react';
import styles from "./asideRecipes.module.css";
import RecipeCard from '../../../features/Recipes/RecipeCards/RecipeCard';


const AsideRecipes = (props) => {
  const recipes = props.recipes;
  return (
    <div className={`${styles.root}`}>
        {
          recipes.map( (recipe) =>(
            <RecipeCard key ={recipe.name} recipe={recipe} />
          ))
        }
    </div>
  )
}

export default AsideRecipes