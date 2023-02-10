import React from 'react';
import styles from './latestRecipes.module.css';
import Section from "../../../components/Section/Section";
import CardMedia from '../../../components/Cards/Card/CardMedia/CardMedia';
import CardContent from "../../../components/Cards/Card/CardContent/CardContent"
import Card from "../../../components/Cards/Card/Card"
import CardHeader from "../../../components/Cards/Card/CardHeader/CardHeader";
import Title from "../../../components/Title/Title"
import { latest } from '../../../data/dummyRecipes';

const LatestRecipes = () => {
  const recipes = latest;
  return (
    <Section >
      <Title>
        latest recipes
      </Title>
      <div className={`${styles.root}`}>
        {recipes.map( (recipe)=>(
          <Card>
            <CardMedia aspectratio="portrait">
              <img src={recipe.cover} />
            </CardMedia>
            <CardContent>
              <p className={`tag`}>{recipe.tags.join(" | ")}</p>
              <CardHeader level={2}>
                {recipe.name}
              </CardHeader>
              <p className={`paragraph mt-10`}>
                {`${recipe.description.slice(0, 120)} . . .`}
              </p>
              <p className={`card-name-tag mt-10`}>
                {recipe.owner}
              </p>
            </CardContent>
          </Card>
  
        ))}
    </div>
    <center>
      <button className={`${styles.btn}`}>
        Explore More
      </button>
    </center>
    
    </Section>
  )
}

export default LatestRecipes;