import React from "react";

function CardShow(props){
    let {titulo} = props
    let {imagen} = props
    let {precio} = props
    let {fecha} = props
   return (
    <div className="detallesDeShow">
        <div className="tituloEImagenDeShow">
            <h1>{titulo}</h1>
            <img src={imagen}/>
        </div>
        <div className="suplementoDeShow">
            <p>Price: {precio} USD</p>
            <p>Date: {fecha}</p>
        </div>
    </div>
);
}
export default CardShow;