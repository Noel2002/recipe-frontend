import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import ViewRecipe from "./pages/ViewRecipe.js";
import ScrollTop from "./components/ScrollTop/ScrollTop.js";
import ContactsPage from "./pages/ContactsPage.js";
import VegetarianPage from "./pages/VegetarianPage.js";
import DrinksPage from "./pages/DrinksPage.js";
import DinnerPage from "./pages/DinnerPage.js";
import LunchPage from "./pages/LunchPage.js";
import BreakFastPage from "./pages/BreakFastPage.js";
import VideoPage from "./pages/VideoPage.js";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/recipe" element={<ViewRecipe />} />
        <Route path="/breakfast" element={<BreakFastPage />} />
        <Route path="/lunch" element={<LunchPage />} />
        <Route path="/dinner" element={<DinnerPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/vegetarian" element={<VegetarianPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/contacts" element={<ContactsPage />} />



      </Routes>
    </BrowserRouter>
      
  
  );
}

export default App;
