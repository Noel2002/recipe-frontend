import React from 'react';
import { getRecipesByCategory } from '../firebase/services/recipeService';

const useFetchRecipesByCategory = (category) => {
    const [recipes, setRecipes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const recipes = await getRecipesByCategory(category);
                setRecipes(recipes);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchRecipes();
    }, []);
    
    return { recipes, loading, error };
}

export default useFetchRecipesByCategory;