import "./App.css";
import Header from "./pages/Header";
import { Routes, Route, Router } from "react-router-dom";
import Home1 from "./layouts/Home1";
import CallToAction from "./pages/CallToAction";

function App() {
  return (
    <>
    <Header></Header>
      <Home1>
       <CallToAction></CallToAction>
      </Home1>
    </>
  );
}

export default App;
