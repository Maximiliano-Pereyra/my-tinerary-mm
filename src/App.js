
import './App.css';
import NotFound from './layouts/NotFound';

function App() {
  return (
   <NotFound />
  )
=======
import "./App.css";
import Header from "./pages/Header";
import { Routes, Route, Router } from "react-router-dom";
import Home1 from "./pages/Home1";
import CallToAction from "./pages/CallToAction";
import Main from "./layouts/Main";
import Home2 from "./components/Home2";

function App() {
  return (
    <>
      <Main></Main>
    </>
  );

}

export default App;
