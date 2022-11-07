import React from 'react'

export default function CardHotels (props) {
    let {photo}=props
    let {name}= props
    let{description}= props

    return (

        <div class="cardH">
            <div class="imageH">
                <img src={photo}  alt={`imgen de ${photo}`} />
            </div>
            <div class="details">
                <div class="center">
                    <h1>{name}</h1>
                    <div className='botonH'><h3>Details</h3></div>
                </div>
            </div>
        </div>
    )
}
