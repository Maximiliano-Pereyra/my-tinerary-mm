
import './App.css';
import InputHotels from './components/InputHotels';
import PginaDeCards from './components/PginasDeCards';


function App() {
  return (
<div className='cuerpo-general'>
  <InputHotels/>
    <PginaDeCards/>
</div> 
  )
import "./App.css";
import Header from "./pages/Header";
import { Routes, Route, Router } from "react-router-dom";
import Home1 from "./pages/Home1";
import CallToAction from "./pages/CallToAction";
import Main from "./layouts/Main";
import Home2 from "./components/Home2";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import CardCity from "./pages/CardCity";
import dataCities from "./dataCities";
import CityCard from "./pages/CityCard";
import ChecksInputs from "./pages/ChecksInputs";
import ContainerSearch from "./pages/ContainerSearch";
import InputSearch from "./pages/InputSearch";
import Search from "./pages/Search";
import NuevaCiudad from "./pages/NuevaCiudad";

function App() {
  return <ContainerSearch></ContainerSearch>;
}

export default App;
