import React from "react";

function CardItinerary(props){
    console.log(props)
    let {imagen} = props
    let {descripcion} = props
    let {duracion} = props
    let {precio} = props
   return (
    <div>
        <div>
            <h1>{descripcion}</h1>
            <img src={imagen}/>
        </div>
        <div>
            <p>Duration: {duracion} hs</p>
            <p>Price: {precio} USD</p>
        </div>
    </div>
);
}
export default CardItinerary;