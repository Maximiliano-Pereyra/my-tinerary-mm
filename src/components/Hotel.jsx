import "../App.css";
import React from "react";
import CardHotel from "../components/CardHotel";
import dataHotels from '../dataHotels';


function Hotel (){
    
    return(
    
       <CardHotel titulo={dataHotels.name} imagen={dataHotels.photo} capacidad={dataHotels.capacity} descripcion={dataHotels.description} ></CardHotel>
      
    );
}
export default Hotel;