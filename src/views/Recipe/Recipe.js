import React from 'react';
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

const Recipe = () => {
  return (
    <>
        <div className={`container mini-section`}>
            <NavigationBar theme='dark'/>
        </div>
        
        <Section>
            <div className={styles["recipe-header"]}>
                <ArticleTitle align="center">
                    Garlic Butter Chicken with Spinach and Bacon
                </ArticleTitle>
            </div>
            
            <div className={`${styles["recipe-wrapper"]}`}>
                <div className={`${styles["main"]}`}>
                    <CardMedia aspectratio="common">
                        <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" />
                    </CardMedia>
                    <p>
                        Lorem ipsum dolor sit amet. Et molestiae voluptatibus aut laudantium error At earum ipsa. Qui consequuntur molestiae aut rerum perferendis aut iste eius qui dolore voluptas qui quia distinctio hic minus nobis sit quia tempora. A molestiae facilis et soluta vitae a reiciendis architecto hic repellat molestiae id praesentium amet id sapiente deserunt. Id atque nostrum et repellendus neque ea dolorem velit non aperiam rerum.
                        <br /><br />Sit dolorem odio qui reiciendis similique vel placeat similique hic voluptas omnis aut possimus voluptates. Aut iure assumenda et veritatis enim qui consequatur sapiente aut quia voluptate vel voluptas tenetur est dolor beatae. Ad maiores dignissimos rem consequatur minima quo quasi dignissimos non quos adipisci et doloribus dolorem vel quia suscipit. Est vero ipsam ea quis harum hic ipsa enim.
                    </p>
                    <Ingridients />
                    <Instructions />
                </div>
                <div className={`${styles['aside']}`}>
                    <div className={`${styles["chef-box"]}`}>
                        <center>
                            <div className={`${styles['avatar-holder']}`}>
                                <img src="https://res.cloudinary.com/nowo-ltd/image/upload/v1619865701/ARTISTA/back1_itcz7c.jpg" />
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
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                </div>
            </div>
        </Section>
        <Footer />
    </>
    
  )
}

export default Recipe