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

import HotelesDeUsuario from "./pages/HotelesDeUsuario";
import EditorDeHotel from "./pages/EditorDeHotels";
import MyShows from "./pages/MyShows";
import EditDeShow from "./pages/EditDeShow";
import RuteProtect from "./components/RuteProtect";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import userActions from "./redux/actions/userActions";
import MyProfile from "./pages/MyProfile";

function App() {
let user = useSelector((store)=>store.user);
let dispatch = useDispatch();
let {reEnter} = userActions;

useEffect(()=>{
  let token= JSON.parse(localStorage.getItem("token"));
  if (token){
    dispatch(reEnter(token.token.user));
  } 
},[]);

  return (

      <Main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/hotels" element={<PginasDeCards />} />
        <Route path="/city" element={<Cities />} />
        <Route path="/signIn" element={<SingIn />} />
        <Route
          element={
            <RuteProtect
              isAllowed={user.role === "admin"}
              redirect="/signin"
            />
          }
        ></Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/newCity" element={<NewCity />} />
        <Route path="/newHotel" element={<NuevoHotel />} />
        <Route path="/hotels/prueba" element={<HotelesDeUsuario/>} />
        <Route path="/hotels/prueba/:id/edit" element={<EditorDeHotel/>} />
        <Route
          element={
            <RuteProtect
              isAllowed={user.role === "user"}
            />
          }
        ></Route>
        <Route path="/shows/prueba" element={<MyShows/>} />
        <Route path="/shows/prueba/:id/edit" element={<EditDeShow/>} />
        <Route path="/city/:id" element={<DetailsCity />} />
        <Route path="/hotels/:id" element={<DetailsHotels />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/mycity" element={<MyCities/>}/>
        <Route path="/cityedit/:id" element={<CityEdit/>} />
        <Route path="/mytineraries" element={<MyTineraries/>}/>
        <Route path="/tineraryedit/:id" element={<TineraryEdit/>} />

      </Routes>
      </Main>
  );
}

export default App;
