MT-F2-04
import './App.css';
import Home2 from './layouts/Home2';

function App() {
  return (
   < Home2 />
  )
}

export default App;
=======
MT-F2-04d
=======
import "./App.css";

import Navbar from "./pages/Navbar";
import {Routes,Route, Router} from 'react-router-dom';
import Home1 from "./layouts/Home1";
import CallToAction from "./pages/CallToAction";
  


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
sprint-1
sprint-1
