import Section from "./components/Section/Section.js";
import Footer from "./features/Footer/Footer.js";
import BreakFastRecipes from "./views/Home/Breakfast/BreakFastRecipes.js";
import ChefWord from "./views/Home/ChefWord/ChefWord.js";
import FeaturedVideo from "./views/Home/FeaturedVideo/FeaturedVideo.js";
import Header from "./views/Home/Header/Header.js";
import LatestRecipes from "./views/Home/Latest/LatestRecipes.js";
import SpecialRecipes from "./views/Home/SpecialRecipes/SpecialRecipes.js";

function App() {
  return (
    <>
      {/* <Recipe /> */}
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
      
  
  );
}

export default App;
