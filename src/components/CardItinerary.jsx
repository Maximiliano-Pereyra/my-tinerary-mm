import React from "react";
import Reaction from "./Reaction";


function CardItinerary(props){
    console.log(props)
    let {photo} = props
    let {description} = props
    let {duration} = props
    let {price} = props
    let {id} = props

    
   return (
    <div className="cardsdetcity">
        <div className="subcarddet">
            <h1>{description}</h1>
            <img className="imgdet" src={photo}/> 
        </div>
        <div className="detailsdet">
            <p>Duration: {duration} hs</p>
            <p>Price: {price} USD</p>
            <Reaction eventId={id} type="itineraryId"></Reaction>
        </div>
    </div>
);
}
export default CardItinerary;