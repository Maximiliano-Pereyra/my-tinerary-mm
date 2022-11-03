import React, { useState } from 'react'
import Logo from '../components/Logo'
import InicioU from '../components/InicioU'
import Empresa from '../components/Empresa'
import cities from '../dataCities'
import ImagenYCiudad from '../components/ImagenYCiudad'
import dataHotels from '../dataHotels'
import FlechaA from '../components/FlechaA'
import FlechaP from '../components/FlehcaP'

export default function Home2() {
  let [indice, setIndiceAcambiar] = useState(0)
  let posterior = () =>{   
    if(indice<dataHotels.length-1){
     setIndiceAcambiar(++indice)
      console.log('hola'); 
    }else{
      setIndiceAcambiar(0)
    }
  }
  let anterior = () =>{   
    if(indice>0){
     setIndiceAcambiar(indice-1)
      console.log('hola'); 
    }else{
      setIndiceAcambiar(dataHotels.length-1)
    }
  }
  return (
    <div>
      <div className='barra-de-arriba-Home2'>
        <Logo></Logo>
        <Empresa></Empresa>
        <InicioU></InicioU>
      </div>
      <div className='cuerpo-general'>
        <h2 className='subtitulosHome2'>CIUDADES</h2>
          <FlechaA onClick={anterior}/>
          <ImagenYCiudad img={cities[indice].photo} ciudad={cities[indice].name} />
          <ImagenYCiudad img={cities[indice].photo} ciudad={cities[indice].name} />
          <FlechaP onClick={posterior}/>
        <h2 className='subtitulosHome2'>HOTELES</h2>
          <FlechaA onClick={anterior}/>
          <ImagenYCiudad img={dataHotels[indice].photo} ciudad={dataHotels[indice].name} />
          <ImagenYCiudad img={dataHotels[indice].photo} ciudad={dataHotels[indice].name} />
          <FlechaP onClick={posterior}/>
      </div>
      <div className='footer'>Footer</div>
    </div>
  )
}
