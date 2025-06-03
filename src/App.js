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
import CreateRecipe from "./pages/CreateRecipe.js";
import StringFormatter from "./pages/StringFormatter.js";
import CreatePage from "./pages/CreatePage.js";


function App() {
  console.log("App name:", process.env.REACT_APP_NAME);
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/recipe/:name" element={<ViewRecipe />} />
        <Route path="/breakfast" element={<BreakFastPage />} />
        <Route path="/lunch" element={<LunchPage />} />
        <Route path="/dinner" element={<DinnerPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/vegetarian" element={<VegetarianPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/formatter" element={<StringFormatter />} />
        <Route path="/new" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
      
  
  );
}

export default App;
