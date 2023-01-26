import React from 'react'
import styles from './mainRecipe.module.css'
import Card from '../../../components/Cards/Card/Card'
import CardMedia from '../../../components/Cards/Card/CardMedia/CardMedia'
import CardContent from '../../../components/Cards/Card/CardContent/CardContent'
import CardHeader from '../../../components/Cards/Card/CardHeader/CardHeader'
const MainRecipe = () => {
  return (
    <Card>
        <CardMedia aspectratio="common">
            <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" />
        </CardMedia>
        <CardContent>
          <p className={`tag`}>breakfast | chinese</p>
          <CardHeader level={1}>
            Hong Kong Soy Sauce Pan-Fried Noodles
          </CardHeader>
          <p className={`paragraph mt-10`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates recusandae tenetur nam doloribus quas laborum rem molestias! Porro, enim eveniet!
          </p>
        </CardContent>
        <button className={`${styles.btn}`}>
            Read more
        </button>
    </Card>
  )
}

export default MainRecipe