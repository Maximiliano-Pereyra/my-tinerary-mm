import "../App.css";
import React from "react";
import CardHotel from "../components/CardHotel";
import dataHotels from '../dataHotels';

function Citie (){
    
    return(
    
       <CardHotel titulo={dataHotels[0].name} imagen={dataHotels[0].photo} capacidad={dataHotels[0].capacity} descripcion={dataHotels[0].description} ></CardHotel>
      
    );
}
export default Citie;