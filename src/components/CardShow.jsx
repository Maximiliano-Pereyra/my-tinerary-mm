import React from "react";

function CardHotel(props){
    console.log(props)
    let {titulo} = props
    let {imagen} = props
    let {precio} = props
    let {fecha} = props
   return (
    <div>
        <div>
            <h1>{titulo}</h1>
            <img src={imagen}/>
        </div>
        <div>
            <p>Price: {precio} USD</p>
            <p>Date: {fecha}</p>
        </div>
    </div>
);
}
export default CardHotel;