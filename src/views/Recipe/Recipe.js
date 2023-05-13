import React, { useEffect, useState } from 'react';
import styles from './recipe.module.css';
import Section from '../../components/Section/Section';
import ArticleTitle from './ArticleTitle/ArticleTitle';
import CardMedia from '../../components/Cards/Card/CardMedia/CardMedia';
import Ingridients from './Ingridients/Ingridients';
import Instructions from './Instructions/Instructions';
import RecipeCard from '../../features/Recipes/RecipeCards/RecipeCard';
import Title from '../../components/Title/Title';
import Footer from '../../features/Footer/Footer';
import NavigationBar from '../../features/NavigationBar/NavigationBar';
import { breakfast } from '../../data/dummyRecipes';
import { getRecipeByName } from '../../firebase/services/recipeService';
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const [recipe, setRecipe] = useState();
    const {name} = useParams()
    useEffect( ()=>{
        const fetchRecipe = async ()=>{
          const doc = await getRecipeByName(name);
          setRecipe(doc);
        }
        fetchRecipe()
        
    }, [name]);

  return recipe ? (

    <>
        <div className={`container mini-section`}>
            <NavigationBar theme='dark'/>
        </div>
        
        <Section>
            <div className={styles["recipe-header"]}>
                <ArticleTitle align="center">
                    {recipe.name}
                </ArticleTitle>
            </div>
            
            <div className={`${styles["recipe-wrapper"]}`}>
                <div className={`${styles["main"]}`}>
                    <CardMedia aspectratio="common">
                        <img src={recipe.cover} alt={"Recipe cover image"}/>
                    </CardMedia>
                    <p>
                       {recipe.description}
                    </p>
                    <Ingridients ingridients={recipe.ingridients} />
                    <Instructions instructions={recipe.steps}/>
                </div>
                <div className={`${styles['aside']}`}>
                    <div className={`${styles["chef-box"]}`}>
                        <center>
                            <div className={`${styles['avatar-holder']}`}>
                                <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" alt="card cover"/>
                            </div>
                        </center>
                        <div className={`${styles['bio-box']}`}>
                            <p className={`${styles["chef-name"]}`}>
                                Chef. AMANDA Jane
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet. Ab cumque minima et maxime magnam ut ipsam sunt. Ut accusamus tempora ea sint corrupti sit voluptas omnis. Ut perspiciatis nemo est dolorum fugit eos totam fugiat.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles["rec-wrapper"]}`}>
                        <Title>
                            recommendations
                        </Title>
                        <div className={`${styles["rec-cards-wrapper"]}`}>
                            {
                                breakfast.slice(0,4).map((recipe) =>(
                                    <RecipeCard recipe={recipe} />
                                ))
                            }
                        </div>
                        

                    </div>
                </div>
            </div>
        </Section>
        <Footer />
    </>
    
  ):
  (
    <></>
  )
}

export default Recipe