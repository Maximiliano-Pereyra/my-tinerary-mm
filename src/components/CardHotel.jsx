import React from "react";

function CardHotel(props){
    console.log(props)
    let {titulo} = props
    let {imagen} = props
    let {capacidad} = props
    let {descripcion} = props
   return (
    <div>
        <div>
            <h1>{titulo}</h1>
            <img src={imagen}/>
        </div>
        <div>
            <p>Capacity: {capacidad}</p>
            <p>Description: {descripcion}</p>
        </div>
        <button>Comments</button>
    </div>
);
}
export default CardHotel;