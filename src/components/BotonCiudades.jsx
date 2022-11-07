import React from 'react'
import { Link as Linkeador } from 'react-router-dom'

export default function BotonCiudades() {
  return (
    <Linkeador to='/city'>
    <div className='botonFooter'>Cities</div>
    </Linkeador>
  )
}
