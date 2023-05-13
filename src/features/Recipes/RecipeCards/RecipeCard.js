import React from 'react'
import Card from '../../../components/Cards/Card/Card'
import CardMedia from '../../../components/Cards/Card/CardMedia/CardMedia'
import CardContent from '../../../components/Cards/Card/CardContent/CardContent'
import CardHeader from '../../../components/Cards/Card/CardHeader/CardHeader'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
  const {recipe} = props;
  return (
    <Link to={`/recipe/${recipe.name}`}>
      <Card>
        {recipe && (
          <>
            <CardMedia aspectratio="square">
                <img src={recipe.cover} alt="card cover"/>
            </CardMedia>
            <CardContent>
                <p className={`tag`}>{recipe.tags.join(" | ")}</p>
                <CardHeader level={3}>
                  {recipe.name}
                </CardHeader>
            </CardContent>
          </>
        )}
      </Card>
    </Link>
  
  )
}

export default RecipeCard