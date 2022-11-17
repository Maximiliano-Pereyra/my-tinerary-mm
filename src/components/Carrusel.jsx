import React, { useEffect, useState }  from 'react'
import cities from '../dataCities'
import ImagenYCiudad from '../components/ImagenYCiudad'
import dataHotels from '../dataHotels'
import FlechaA from '../components/FlechaA'
import FlechaP from '../components/FlehcaP'
import { Link as Linkeador } from 'react-router-dom'

export default function Carrusel() {

/* ------------------------------CARRUSEL DE CIUDADES------------------------------------------ */

   let [indiceCiudad, setIndiceCiudad] = useState(0) 
   let [indiceCiudad2, setIndiceCiudad2] = useState(1) 
 
    let posterior = () =>{  
      if(indiceCiudad+1<cities.length-1){
       setIndiceCiudad(indiceCiudad+1)
      }else{
        setIndiceCiudad(0)
      }
      clearInterval(idHotels)

      if(indiceCiudad2+1<cities.length-1){
        setIndiceCiudad2(indiceCiudad2+1)
       }else{
         setIndiceCiudad2(0)
       }
       clearInterval(idHotels2)
    }
    let anterior = () =>{   
      if(indiceCiudad>0){
       setIndiceCiudad(indiceCiudad-1)
      }else{
        setIndiceCiudad(cities.length-1)
      }
      clearInterval(idHotels)

      if(indiceCiudad2>0){
        setIndiceCiudad2(indiceCiudad2-1)
       }else{
         setIndiceCiudad2(cities.length-1)
       }
       clearInterval(idHotels2)
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
    let [idCiudad,setIdCiudad]= useState(0)
    
    useEffect(
        () =>{ 
        let idCiudadAutomatico =setInterval(
            ()=>{
                posterior()
            },
            3000)
            setIdCiudad(idCiudadAutomatico)
            return clearInterval(idCiudad)
        },
        [indiceCiudad]
    )

    let [idCiudad2,setIdCiudad2]= useState(1)
    
    useEffect(
        () =>{ 
        let idCiudadAutomatico2 =setInterval(
            ()=>{
                anterior()
            },
            3000)
            setIdCiudad2(idCiudadAutomatico2)
            return clearInterval(idCiudad2)
        },
        [indiceCiudad2]
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
        <ImagenYCiudad img={cities[indiceCiudad].photo} ciudad={cities[indiceCiudad].name} />
        <ImagenYCiudad img={cities[indiceCiudad2].photo } ciudad={cities[indiceCiudad2].name} />
        <FlechaP onClick={posterior}/>
    <Linkeador to='/hotels' ><h2 className='subtitulosHome2'>HOTELS</h2></Linkeador>
        <FlechaA onClick={anterior2}/>
        <ImagenYCiudad img={dataHotels[indiceHotels].photo} ciudad={dataHotels[indiceHotels].name} />
        <ImagenYCiudad img={dataHotels[indiceHotels2].photo} ciudad={dataHotels[indiceHotels2].name} />
        <FlechaP onClick={posterior2}/>
    </>
  )
}
