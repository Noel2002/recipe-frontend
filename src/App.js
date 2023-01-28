import Footer from "./features/Footer/Footer.js";
import NavigationBar from "./features/Footer/NavigationBar/NavigationBar.js";
import BreakFastRecipes from "./views/Home/Breakfast/BreakFastRecipes.js";
import ChefWord from "./views/Home/ChefWord/ChefWord.js";
import FeaturedVideo from "./views/Home/FeaturedVideo/FeaturedVideo.js";
import Header from "./views/Home/Header/Header.js";
import LatestRecipes from "./views/Home/Latest/LatestRecipes.js";
import SpecialRecipes from "./views/Home/SpecialRecipes/SpecialRecipes.js";

function App() {
  return (
    <>
      <Header />
      <LatestRecipes />
      <ChefWord />
      <BreakFastRecipes />
      <FeaturedVideo />
      <SpecialRecipes />
      <Footer />
    </>
      
  
  );
}

export default App;
