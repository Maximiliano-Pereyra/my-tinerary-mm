import React from "react";

function CardCitie(props){
    let {titulo} = props
    let {imagen} = props
    let {continente} = props
    let {poblacion} = props
   return (
    <div className="cardsdetcity">
        <div className="subcarddet">
            <h1>City: {titulo}</h1>
            <img className="imgdet" src={imagen}/>
        </div>
        <div className="detailsdet">
            <p>Continent: {continente}</p>
            <p>Population: {poblacion}</p>
            <button>Comments</button>
        </div>
        
    </div>
);
}
export default CardCitie;