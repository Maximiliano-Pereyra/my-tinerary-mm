import React from "react";

function CardCitie(props){
    console.log(props)
    let {titulo} = props
    let {imagen} = props
    let {continente} = props
    let {poblacion} = props
   return (
    <div>
        <div>
            <h1>City: {titulo}</h1>
            <img src={imagen}/>
        </div>
        <div>
            <p>Continent: {continente}</p>
            <p>Population: {poblacion}</p>
        </div>
        <button>Comments</button>
    </div>
);
}
export default CardCitie;