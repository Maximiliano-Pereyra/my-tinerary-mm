import "../App.css";
import React from "react";
import CardItinerary from "./CardItinerary";
import dataActivities from '../dataActivities';

function IntineraryCity (){
    
    return(
    <>
       <CardItinerary  imagen={dataActivities[0].photo[0]} descripcion={dataActivities[0].description} duracion={dataActivities[0].duration} precio={dataActivities[0].price}></CardItinerary>
       <CardItinerary  imagen={dataActivities[1].photo[1]} descripcion={dataActivities[1].description} duracion={dataActivities[1].duration} precio={dataActivities[1].price}></CardItinerary>
    </>
    );
}
export default IntineraryCity;

//este no se usa