import React from 'react'
import PageWrapper from '../components/hoc/PageWrapper'
import useFetchRecipesByCategory from '../hooks/useFetchRecipesByCategory'
import MainRecipe from '../views/Home/Breakfast/MainRecipe';
import RecipeCard from '../features/Recipes/RecipeCards/RecipeCard';

const LunchPage = () => {
  // Note: The category 'breakfast' is used here, but you can change it to 'lunch' or any other category as needed.
  const {recipes, loading, error} = useFetchRecipesByCategory('lunch');
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  if (recipes.length === 0) {
    return <div>No recipes found</div>
  }

  const mainRecipe = recipes[0];
  console.log('LunchPage recipes:', recipes);
  
  return (
    <PageWrapper>
      <MainRecipe recipe={mainRecipe} />
      <div className=' grid grid-cols-2 md:grid-cols-3  gap-4'>
        {
          recipes.slice(1).map((recipe) => (
            <RecipeCard key={recipe.name} recipe={recipe} />
          ))
        }
      </div>
    </PageWrapper>
  )
}
export default LunchPage