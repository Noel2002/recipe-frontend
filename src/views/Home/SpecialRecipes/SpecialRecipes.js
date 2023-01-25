import React from 'react'
import Section from '../../../components/Section/Section'
import RecipeCard from '../../../features/Recipes/RecipeCards/RecipeCard'
import styles from './specialRecipes.module.css'
import Title from '../../../components/Title/Title'
const SpecialRecipes = () => {
  return (
    <Section>
      <Title>Special Drinks</Title>
        <div className={`${styles.root}`}>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    </Section>
  )
}

export default SpecialRecipes