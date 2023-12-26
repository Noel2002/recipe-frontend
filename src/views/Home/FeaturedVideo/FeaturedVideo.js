import React from 'react'
import Section from '../../../components/Section/Section';
import styles from './featuredVideo.module.css';
import CardMedia from '../../../components/Cards/Card/CardMedia/CardMedia';
import CardHeader from '../../../components/Cards/Card/CardHeader/CardHeader';
import Title from '../../../components/Title/Title';
import { Link } from 'react-router-dom';

const FeaturedVideo = () => {
  return (
    <Section className="bg-primary-light">
        <Title>
            featured video
        </Title>
        <div className={styles.root}>
            <div className={`${styles["video-wrapper"]}`}>
                <div className={`video-holder`}>
                    <iframe
                        src={'https://www.youtube.com/embed/pQrchxj2gC8'}
                        className={`video`}
                    ></iframe>  
                </div>
              
            </div>
            <div className={`${styles['video-description']}`}>
                <CardHeader level={1}>
                    How to Create a Healthy Plate With Richard Smith
                </CardHeader>
                <p className={`paragraph mt-10`}>
                    In this informative video, nutritionist and wellness expert 
                    Richard Smith shares his valuable insights on creating a 
                    healthy plate. Join him as he guides you through the 
                    process of selecting the right combination of foods to 
                    optimize your health. 
                </p>
                <Link to='https://www.youtube.com/watch?v=pQrchxj2gC8' target='_blank'>
                    <button className={`${styles.btn} mt-20`}>
                        watch video
                    </button>
                </Link>
            </div>
           
        </div>
    </Section>
  )
}

export default FeaturedVideo