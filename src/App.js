
import "./App.css";
import Header from "./pages/Header";
import { Routes, Route, Router } from "react-router-dom";
import Home1 from "./pages/Home1";
import CallToAction from "./pages/CallToAction";
import Main from "./layouts/Main";
import Home2 from "./components/Home2";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header></Header>
    <div className="cuerpo-general">
      <SignUp></SignUp>
    </div>
    <div className="footer">
    <Footer></Footer>
    </div>
  </>
  );

import './App.css';
import SignIn from './components/SignIn';

function App() {
  return (
<div className='cuerpo-general'>
    <SignIn />
 </div>
  )

}

export default App;
