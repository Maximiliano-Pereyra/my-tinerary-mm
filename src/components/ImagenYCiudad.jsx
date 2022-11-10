import React from 'react'

export default function ImagenYCiudad(props) {
    let {ciudad} = props
    let {img} = props
    return (
    <div className='cardHome2'>
        <img src={img} alt={`imgen de ${img}`} />
        <h3>{ciudad}</h3>    
    </div>
  )
}
