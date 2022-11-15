import React from "react";

function CardShow(props){
    let {titulo} = props
    let {imagen} = props
    let {precio} = props
    let {fecha} = props
   return (
    <div className="detallesDeHotel2">
        <div className="tituloYimagen2">
            <h1>{titulo}</h1>
            <img src={imagen}/>
        </div>
        <div className="capacidadYdescripcion2">
            <p>Price: {precio} USD</p>
            <p>Date: {fecha}</p>
        </div>
    </div>
);
}
export default CardShow;