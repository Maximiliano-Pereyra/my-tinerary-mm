import React from "react";
import { Link as Linkeador } from 'react-router-dom'

function CardCity (props){
let {name} = props
let {photo} = props 
let {id} = props
    return (
        <div className="card">
            <div className="image">
                <img src={photo}/>
            </div>
            <div className="details">
                <div className="center">
                    <h1>{name}</h1>
                    <Linkeador to= {id}>
                        <button className='botonH'><h3>Details</h3></button>
                    </Linkeador>
                </div>
            </div>
        </div>
    )

};

export default CardCity;