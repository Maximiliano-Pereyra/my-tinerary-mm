import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Scrolltop from "../components/Scrolltop";

export default function Main(props){
    return (
    <>
        <Header/>
        <Scrolltop/>
        <div className="cuerpo-general">{props.children}</div>
        <Footer/>

    </>
    )
    }