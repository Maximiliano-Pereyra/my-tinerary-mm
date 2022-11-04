import React from 'react'
import BotonCiudades from './BotonCiudades'
import BotonHoteles from './BotonHoteles'
import BotonScroll from './BotonScroll'

export default function ContenedorBotones() { 
  return (
    <div className='contenedorDeBotones'>
        <BotonCiudades/>
        <BotonHoteles/>
        <BotonScroll/>
    </div>
  )
}
