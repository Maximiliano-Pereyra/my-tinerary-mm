
import React from "react";

function CardCity (props){
let {name} = props
let {photo} = props 
let {continent} = props
    return (
        <div className="card">
            <div className="image">
                <img src={photo}/>
            </div>
            <div className="details">
                <div className="center">
                    <h1>{name}</h1>
                    <p>{continent}</p>
                    <button>Details</button>
                </div>
            </div>
        </div>
    )

};

export default CardCity;