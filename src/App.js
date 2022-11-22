import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./layouts/Main";
import PginasDeCards from "./components/PginasDeCards";
import Cities from "./pages/Cities";
import SingIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NuevoHotel from "./pages/NuevoHotel";
import NewCity from "./pages/NewCity";
import DetailsCity from "./pages/DetailsCity";
import DetailsHotels from "./pages/DetailsHotels";
import NotFound from "./pages/NotFound";
import MyCities from "../src/pages/MyCities.jsx"
import CityEdit from "../src/components/CityEdit"
import MyTineraries from "../src/pages/MyTineraries"
import MyCardTinerary from "./components/MyCardTinerary";
import TineraryEdit from "./components/TineraryEdit"

function App() {
  return (
    
      <Main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/hotels" element={<PginasDeCards />} />
        <Route path="/city" element={<Cities />} />
        <Route path="/signIn" element={<SingIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/newCity" element={<NewCity />} />
        <Route path="/newHotel" element={<NuevoHotel />} />
        <Route path="/city/:id" element={<DetailsCity />} />
        <Route path="/hotels/:id" element={<DetailsHotels />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/mycity" element={<MyCities/>}/>
        <Route path="/cityedit/:id" element={<CityEdit/>} />
        <Route path="/mytineraries" element={<MyTineraries/>}/>
        <Route path="/tineraryedit/:id" element={<TineraryEdit/>} />
      </Routes>
      </Main>   
  );
}
export default App;
