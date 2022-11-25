import React from 'react'
import { Link as Linkeador } from 'react-router-dom'

export default function CardHotels (props) {
    let {photo}=props
    let {name}= props
    let {id}= props
    return (
     
        <div class="card">
            <div class="image">
                <img src={photo}  alt={`imgen de ${photo}`} />
            </div>
            <div class="details">
                <div class="center">
                    <h1>{name}</h1>
                    <Linkeador to= {`${id}/edit`} >
                        <div className='botonH'><h3>Edit</h3></div>
                    </Linkeador>
                </div>
            </div>
        </div>
    )
}
