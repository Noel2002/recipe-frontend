import React from 'react'
import styles from './mainRecipe.module.css'
import Card from '../../../components/Cards/Card/Card'
import CardMedia from '../../../components/Cards/Card/CardMedia/CardMedia'
import CardContent from '../../../components/Cards/Card/CardContent/CardContent'
import CardHeader from '../../../components/Cards/Card/CardHeader/CardHeader'
import { Link } from 'react-router-dom'
const MainRecipe = (props) => {
  const recipe = props.recipe;
  return (
    <Link to={"/recipe"}>
      <Card>
          <CardMedia aspectratio="common">
              <img src={recipe.cover} alt='main-card cover'/>
          </CardMedia>
          <CardContent>
            <p className={`tag`}>{recipe.tags.join(" | ")}</p>
            <CardHeader level={1}>
              {recipe.name}
            </CardHeader>
            <p className={`paragraph mt-10`}>
              {`${recipe.description.slice(0, 200)} . . .`}
            </p>
          </CardContent>
          <button className={`${styles.btn}`}>
              Read more
          </button>
      </Card>
    </Link>
    
  )
}

export default MainRecipe