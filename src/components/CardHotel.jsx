import React from "react";

function CardHotel(props){
    let {titulo} = props
    let {imagen} = props
    let {capacidad} = props

   return (
    <div className="detallesDeHotel">
        <div className="tituloYimagen">
            <h1>{titulo}</h1>
            <img src={imagen}/>
        </div>
        <div className="detallesDeDetails">
            <p>Capacity: {capacidad}</p>
        </div>
        <button>Comments</button>
    </div>
);
}
export default CardHotel;