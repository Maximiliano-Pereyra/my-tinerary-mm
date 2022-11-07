
import './App.css';
import{Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Main from './layouts/Main';
import PginasDeCards from './components/PginasDeCards';
import Cities from './pages/Cities';
import SingIn from './components/SignIn';
import SignUp from './pages/SignUp';
import NuevoHotel from './components/NuevoHotel'
import NuevaCiudad from './pages/NuevaCiudad'


function App() {
  return (
  
     <Main>
    <Routes>
    
    <Route path='/index' element={<Home/>} />
    <Route path='/hotels' element={<PginasDeCards/>}/>
    <Route path='/city' element={<Cities/>}/>
    <Route path='/signIn' element={<SingIn/>} />
    <Route path='/signUp' element={<SignUp/>} />
    <Route path='/newCity' element={<NuevaCiudad/>} />
    <Route path='/newHotel' element={<NuevoHotel/>} />

import "./App.css";
import Header from "./components/Header";
import { Routes, Route, Router } from "react-router-dom";
import CallToAction from "./components/CallToAction";
import Main from "./layouts/Main";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import CardCity from "./components/CardCity";
import dataCities from "./dataCities";
import Cities from "./pages/Cities";
import ChecksInputs from "./pages/ChecksInputs";
import ContainerSearch from "./pages/ContainerSearch";
import InputSearch from "./pages/InputSearch";
import NewCity from "./pages/NewCity";
import CardCitie from "./pages/CardCitie";
import Citie from "./pages/Citie";
import Itinerary from "./pages/Itinerary";
import Hotel from "./components/Hotel";
import Show from "./components/Show"

function App() {
  return (
    <div className="cuerpo-general">
      <Hotel></Hotel>
      <Show></Show>
    </div>
  );
}


    </Routes>
    </Main>
    
  )
  }
export default App;
