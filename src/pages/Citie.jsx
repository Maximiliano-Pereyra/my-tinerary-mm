import "../App.css";
import React from "react";
import CardCitie from "../pages/CardCitie";
import dataCities from '../dataCities';

function Citie (){
    
    return(
    <div className="cuerpo-general">
       <CardCitie titulo={dataCities[0].name} imagen={dataCities[0].photo} continente={dataCities[0].continent} poblacion={dataCities[0].population} ></CardCitie>
       </div>
    );
}
export default Citie;