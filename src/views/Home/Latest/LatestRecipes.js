import React from 'react';
import styles from './latestRecipes.module.css';
import Section from "../../../components/Section/Section";
import CardMedia from '../../../components/Cards/Card/CardMedia/CardMedia';
import CardContent from "../../../components/Cards/Card/CardContent/CardContent"
import Card from "../../../components/Cards/Card/Card"
import CardHeader from "../../../components/Cards/Card/CardHeader/CardHeader";
import Title from "../../../components/Title/Title"

const LatestRecipes = () => {
  return (
    <Section >
      <Title>
        latest recipes
      </Title>
      <div className={`${styles.root}`}>
      <Card>
        <CardMedia aspectratio="portrait">
          <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" />
        </CardMedia>
        <CardContent>
          <p className={`tag`}>breakfast | chinese</p>
          <CardHeader level={2}>
            Hong Kong Soy Sauce Pan-Fried Noodles
          </CardHeader>
          <p className={`paragraph mt-10`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates recusandae tenetur nam doloribus quas laborum rem molestias! Porro, enim eveniet!
          </p>
          <p className={`card-name-tag mt-10`}>
            By amanda jane
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardMedia aspectratio="portrait">
          <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" />
        </CardMedia>
        <CardContent>
          <p className={`tag`}>breakfast | chinese</p>
          <CardHeader level={2}>
            Hong Kong Soy Sauce Pan-Fried Noodles
          </CardHeader>
          <p className={`paragraph mt-10`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates recusandae tenetur nam doloribus quas laborum rem molestias! Porro, enim eveniet!
          </p>
          <p className={`card-name-tag mt-10`}>
            By amanda jane
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardMedia aspectratio="portrait">
          <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" />
        </CardMedia>
        <CardContent>
          <p className={`tag`}>breakfast | chinese</p>
          <CardHeader level={2}>
            Hong Kong Soy Sauce Pan-Fried Noodles
          </CardHeader>
          <p className={`paragraph mt-10`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates recusandae tenetur nam doloribus quas laborum rem molestias! Porro, enim eveniet!
          </p>
          <p className={`card-name-tag mt-10`}>
            By amanda jane
          </p>
        </CardContent>
      </Card>
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