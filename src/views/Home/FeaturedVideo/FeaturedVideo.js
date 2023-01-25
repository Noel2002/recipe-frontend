import React from 'react'
import Section from '../../../components/Section/Section';
import styles from './featuredVideo.module.css';
import CardMedia from '../../../components/Cards/Card/CardMedia/CardMedia';
import CardHeader from '../../../components/Cards/Card/CardHeader/CardHeader';
import Title from '../../../components/Title/Title';

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
                        src={'https://www.youtube.com/embed/cP8SzRRRbqk'}
                        className={`video`}
                    ></iframe>  
                </div>
              
            </div>
            <div className={`${styles['video-description']}`}>
                <CardHeader level={1}>
                    How to Create a Healthy Plate With Richard Smith
                </CardHeader>
                <p className={`paragraph mt-10`}>
                    Lorem ipsum dolor sit amet. Qui odio placeat qui inventore officiis ea cupiditate dolores. Ea iure suscipit qui perspiciatis quos quo doloribus aperiam
                </p>
                <button className={`${styles.btn} mt-20`}>
                    watch video
                </button>
            </div>
           
        </div>
    </Section>
  )
}

export default FeaturedVideo