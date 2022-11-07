import React from "react";
import Footer from "../components/Footer";
import Header from "../pages/Header";
import Scrolltop from "../pages/Scrolltop";
import Home from "../pages/Home"

export default function Main(props){
    return (
    <>
        <Header/>
        <Scrolltop/>
        <div className="cuerpo-general">{props.children}</div>
        <div className="footer"><Footer/></div>

    </>
    );
}