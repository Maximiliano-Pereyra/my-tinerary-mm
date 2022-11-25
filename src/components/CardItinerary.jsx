import React from "react";

function CardItinerary(props){
    console.log(props)
    let {imagen} = props
    let {descripcion} = props
    let {duracion} = props
    let {precio} = props
   return (
    <div className="cardsdetcity">
        <div className="subcarddet">
            <h1>{descripcion}</h1>
            <img className="imgdet" src={imagen}/> 
        </div>
        <div className="detailsdet">
            <p>Duration: {duracion} hs</p>
            <p>Price: {precio} USD</p>
        </div>
    </div>
);
}
export default CardItinerary;