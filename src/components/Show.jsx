import "../App.css";
import React from "react";
import CardShow from "../components/CardShow";
import dataShows from '../dataShows';

function Citie (){
    
    return(
    <div className="cuerpo-general">
       <CardShow titulo={dataShows[0].name} imagen={dataShows[0].photo} precio={dataShows[0].price} fecha={dataShows[0].date} ></CardShow>
       </div>
    );
}
export default Citie;