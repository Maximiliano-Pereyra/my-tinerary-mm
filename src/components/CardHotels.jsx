import React from 'react'
import { Link as Linkeador } from 'react-router-dom'

export default function CardHotels (props) {
    let {photo}=props
    let {name}= props
    let {id}= props
    return (
        <div className="card">
            <div className="image">
                <img src={photo}  alt={`imgen de ${photo}`} />
            </div>
            <div className="details">
                <div className="center">
                    <h1>{name}</h1>
                    <Linkeador to={id}>
                    <button className='botonH'><h3>Details</h3></button>
                    </Linkeador>
                </div>
            </div>
        </div>
    )
}
