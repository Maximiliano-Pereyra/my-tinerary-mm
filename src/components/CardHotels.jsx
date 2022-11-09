import React from 'react'
import { Link as Linkeador } from 'react-router-dom'

export default function CardHotels (props) {
    let {photo}=props
    let {name}= props
    let {id}= props
    return (
     
        <div class="cardH">
            <div class="imageH">
                <img src={photo}  alt={`imgen de ${photo}`} />
            </div>
            <div class="details">
                <div class="center">
                    <h1>{name}</h1>
                    <Linkeador to={id}>
                        <div className='botonH'><h3>Details</h3></div>
                    </Linkeador>
                </div>
            </div>
        </div>
    )
}
