import React from 'react'
import Header from '../views/Home/Header/Header'
import LatestRecipes from '../views/Home/Latest/LatestRecipes'
import ChefWord from '../views/Home/ChefWord/ChefWord'
import Section from '../components/Section/Section'
import BreakFastRecipes from '../views/Home/Breakfast/BreakFastRecipes'
import SpecialRecipes from '../views/Home/SpecialRecipes/SpecialRecipes'
import FeaturedVideo from '../views/Home/FeaturedVideo/FeaturedVideo'
import Footer from '../features/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <LatestRecipes />
      <ChefWord />
      <Section>
        <BreakFastRecipes />
        <SpecialRecipes />
      </Section>
      
      <FeaturedVideo />
      <Section>
        <SpecialRecipes />
        <BreakFastRecipes />
      </Section>
      
      <Footer />
    </>
  )
}

export default Home