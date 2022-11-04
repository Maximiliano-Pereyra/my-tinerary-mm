
import React from 'react'
=======
import React from "react";
import Header from "../pages/Header";
import Footer from "../components/Footer"
import Scrolltop from "../pages/Scrolltop";
import Home from "../pages/Home";


export default function Lay05(){
    return (
    <>
    <Scrolltop></Scrolltop>
     <Header></Header>
     <Home></Home>
     <div className="footer">
     <Footer></Footer>
     </div>
    </>
    );
}