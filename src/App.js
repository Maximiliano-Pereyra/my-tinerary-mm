import "./App.css";
import Main from "./layouts/Main";
import Navbar from "./pages/Navbar";
import {Routes,Route, Router} from 'react-router-dom';
import Home1 from "./layouts/Home1";
import CallToAction from "./pages/CallToAction";
    /*< Main />*/

function App() {
  return (
    <>
    <Home1>
      <Navbar></Navbar>
      <CallToAction></CallToAction>
    </Home1>
    </>
  );
}

export default App;
