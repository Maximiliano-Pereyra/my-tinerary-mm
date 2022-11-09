import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./layouts/Main";
import PginasDeCards from "./components/PginasDeCards";
import Cities from "./pages/Cities";
import SingIn from "./components/SignIn";
import SignUp from "./pages/SignUp";
import NuevoHotel from "./components/NuevoHotel";
import NewCity from "./pages/NewCity";
import DetailsCity from "./pages/DetailsCity";
import DetailsHotels from "./components/DetailsHotels";
import NotFound from "./pages/NotFound";

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
        <Route path="city/:id" element={<DetailsCity />} />
        <Route path="/hotels/detailsHotels" element={<DetailsHotels />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </Main>
  );
}
export default App;
