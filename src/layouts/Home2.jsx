import React from 'react'
import Logo from '../components/Logo'
import InicioU from '../components/InicioU'
import Empresa from '../components/Empresa'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'

export default function Home2() {

  return (
    <div>
      <div className='barra-de-arriba-Home2'>
        <Logo></Logo>
        <Empresa></Empresa>
        <InicioU></InicioU>
      </div>
      <div className='cuerpo-general'>
        <Carrusel/>
      </div>
      <div className='footer'><Footer/></div>
    </div>
  )
}
