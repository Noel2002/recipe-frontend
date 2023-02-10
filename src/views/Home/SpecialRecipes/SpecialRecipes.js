import React from 'react'
import Section from '../../../components/Section/Section'
import RecipeCard from '../../../features/Recipes/RecipeCards/RecipeCard'
import styles from './specialRecipes.module.css'
import Title from '../../../components/Title/Title'
import { drinks } from '../../../data/dummyRecipes'
const SpecialRecipes = () => {
  const recipes = drinks.slice(0,4);
  return (
    <div className={`mini-section`}>
      <Title>Special Drinks</Title>
        <div className={`${styles.root}`}>
          {
            recipes.map( (recipe)=>(
              <RecipeCard recipe={recipe}/>
            ))
          }
        </div>
    </div>
  )
}

export default SpecialRecipes