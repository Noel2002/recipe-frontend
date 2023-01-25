import React from 'react'
import Card from '../../../components/Cards/Card/Card'
import CardMedia from '../../../components/Cards/Card/CardMedia/CardMedia'
import CardContent from '../../../components/Cards/Card/CardContent/CardContent'
import CardHeader from '../../../components/Cards/Card/CardHeader/CardHeader'

const RecipeCard = () => {
  return (
    <Card>
        <CardMedia aspectratio="square">
            <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" />
        </CardMedia>
        <CardContent>
            <p className={`tag`}>breakfast | chinese</p>
            <CardHeader level={3}>
                Hong Kong Soy Sauce Pan-Fried Noodles
            </CardHeader>
        </CardContent>
    </Card>
  )
}

export default RecipeCard