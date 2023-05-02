import React, { useEffect, useState } from 'react'
import MainRecipe from './MainRecipe';
import AsideRecipes from './AsideRecipes'
import styles from './breakfastRecipes.module.css'
import Title from '../../../components/Title/Title';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '../../../firebase/config';

const BreakFastRecipes = (props) => {
  const [recipes, setRecipes] = useState([])
  // const mainRecipe = recipes[0];
  // const sideRecipes = recipes.slice(1,5);

  useEffect( ()=>{
    const fetchRecipes = async ()=>{
      const q = query(collection(db, "recipes"), where("category", "==", "breakfast"));
      const snap = await getDocs(q);
      const docs=[]
      snap.forEach( doc => {
        console.log(doc.data());
        docs.push(doc.data())
      });
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
        <AsideRecipes recipes={recipes}/>
      </div>)}
    </div>
  )   
}

export default BreakFastRecipes;