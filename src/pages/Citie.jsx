import "../App.css";
import React from "react";
import CardCitie from "../pages/CardCitie";
import dataCities from '../dataCities';

function Citie (){
    
    return(
    <>
       <CardCitie titulo={dataCities[0].name} imagen={dataCities[0].photo} continente={dataCities[0].continent} poblacion={dataCities[0].population} ></CardCitie>
    </>
    );
}
export default Citie;