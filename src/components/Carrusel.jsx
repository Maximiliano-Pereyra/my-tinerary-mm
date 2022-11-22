import React, { useEffect, useState }  from 'react'
import cities from '../dataCities'
import ImagenYCiudad from '../components/ImagenYCiudad'
import dataHotels from '../dataHotels'
import FlechaA from '../components/FlechaA'
import FlechaP from '../components/FlehcaP'
import { Link as Linkeador } from 'react-router-dom'

export default function Carrusel() {

/* ------------------------------CARRUSEL DE CIUDADES------------------------------------------ */

   let [indiceCity, setIndiceCity] = useState(0) 
   let [indiceCity2, setIndiceCity2] = useState(1) 
 
    let posterior = () =>{  
      if(indiceCity+1<cities.length-1){
       setIndiceCity(indiceCity+1)
      }else{
        setIndiceCity(0)
      }
      clearInterval(idHotels)

      if(indiceCity2+1<cities.length-1){
        setIndiceCity2(indiceCity2+1)
       }else{
         setIndiceCity2(0)
       }
       clearInterval(idCity2)
    }
    let anterior = () =>{   
      if(indiceCity>0){
       setIndiceCity(indiceCity-1)
      }else{
        setIndiceCity(cities.length-1)
      }
      clearInterval(idCity)

      if(indiceCity2>0){
        setIndiceCity2(indiceCity2-1)
       }else{
         setIndiceCity2(cities.length-1)
       }
       clearInterval(idCity2)
    }
    /* ------------------------------CARRUSEL DE HOTELES------------------------------------------ */

    let[indiceHotels, setIndiceHotels] = useState(0)
    let[indiceHotels2, setIndiceHotels2] = useState(1)
    let posterior2 = () =>{   
      if(indiceHotels<dataHotels.length-1){
       setIndiceHotels(indiceHotels+1)
      }else{
        setIndiceHotels(0)
      }
      clearInterval(idHotels)
      if(indiceHotels2<dataHotels.length-1){
        setIndiceHotels2(indiceHotels2+1)
       }else{
         setIndiceHotels2(0)
       }
       clearInterval(idHotels2)
    }
    let anterior2 = () =>{   
      if(indiceHotels>0){
       setIndiceHotels(indiceHotels-1)
      }else{
        setIndiceHotels(dataHotels.length-1)
      }
      clearInterval(idHotels)
      if(indiceHotels2>0){
        setIndiceHotels2(indiceHotels2-1)
       }else{
         setIndiceHotels2(dataHotels.length-1)
       }
       clearInterval(idHotels2)
    }

    /* ------------------------------CARRUSEL AUTOMATICO CIUDADES------------------------------------------ */
    let [idCity,setIdCity]= useState(0)
    
    useEffect(
        () =>{ 
        let idCityAutomatico =setInterval(
            ()=>{
                posterior()
            },
            3000)
            setIdCity(idCityAutomatico)
            return clearInterval(idCity)
        },
        [indiceCity]
    )

    let [idCity2,setIdCity2]= useState(1)
    
    useEffect(
        () =>{ 
        let idCityAutomatico2 =setInterval(
            ()=>{
                anterior()
            },
            3000)
            setIdCity2(idCityAutomatico2)
            return clearInterval(idCity2)
        },
        [indiceCity2]
    )

    /* ------------------------------CARRUSEL AUTOMATICO HOTELES------------------------------------------ */

    let [idHotels,setIdHotels]= useState(0)
    
    useEffect(
        () =>{ 
        let idAutomaticoHotels =setInterval(
            ()=>{
                posterior2()
            },
            3000)
            setIdHotels(idAutomaticoHotels)
            return clearInterval(idHotels)
        },
        [indiceHotels]
    )

    let [idHotels2,setIdHotels2]= useState(1)
    
    useEffect(
        () =>{ 
        let idAutomaticoHotels2 =setInterval(
            ()=>{
                anterior2()
            },
            3000)
            setIdHotels2(idAutomaticoHotels2)
            return clearInterval(idHotels2)
        },
        [indiceHotels2]
    )
    return(
    <>
    
    <Linkeador to='/city' ><h2 className='subtitulosHome2'>CITIES</h2></Linkeador>
        <FlechaA onClick={anterior}/>
        <ImagenYCiudad img={cities[indiceCity].photo} ciudad={cities[indiceCity].name} />
        <ImagenYCiudad img={cities[indiceCity2].photo } ciudad={cities[indiceCity2].name} />
        <FlechaP onClick={posterior}/>
    <Linkeador to='/hotels' ><h2 className='subtitulosHome2'>HOTELS</h2></Linkeador>
        <FlechaA onClick={anterior2}/>
        <ImagenYCiudad img={dataHotels[indiceHotels].photo} ciudad={dataHotels[indiceHotels].name} />
        <ImagenYCiudad img={dataHotels[indiceHotels2].photo} ciudad={dataHotels[indiceHotels2].name} />
        <FlechaP onClick={posterior2}/>
    </>
  )
}
