import React from "react";
import { Link as Linkeador } from 'react-router-dom'

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
                    <Linkeador to= './detailsCity'>
                        <button>Details</button>
                    </Linkeador>
                </div>
            </div>
        </div>
    )

};

export default CardCity;