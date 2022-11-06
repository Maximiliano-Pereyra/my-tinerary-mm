import React from 'react'

export default function CardHotels (props) {
    let {photo}=props
    let {name}= props
    let{description}= props

    return (

        <div class="card">
            <div class="image">
                <img src={photo}  alt={`imgen de ${photo}`} />
            </div>
            <div class="details">
                <div class="center">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
