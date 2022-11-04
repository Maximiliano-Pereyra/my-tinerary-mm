import React, { useEffect, useState }  from 'react'
import cities from '../dataCities'
import ImagenYCiudad from '../components/ImagenYCiudad'
import dataHotels from '../dataHotels'
import FlechaA from '../components/FlechaA'
import FlechaP from '../components/FlehcaP'

export default function Carrusel() {

/* ------------------------------CARRUSEL DE CIUDADES------------------------------------------ */

   let [indice, setIndiceAcambiar] = useState(0) 
   let [indiceA, setIndiceAcambiarA] = useState(1) 
 
    let posterior = () =>{  
      if(indice+1<cities.length-1){
       setIndiceAcambiar(indice+1)
      }else{
        setIndiceAcambiar(0)
      }
      clearInterval(id)

      if(indiceA+1<cities.length-1){
        setIndiceAcambiarA(indiceA+1)
       }else{
         setIndiceAcambiarA(0)
       }
       clearInterval(idA)
    }
    let anterior = () =>{   
      if(indice>0){
       setIndiceAcambiar(indice-1)
      }else{
        setIndiceAcambiar(cities.length-1)
      }
      clearInterval(id)

      if(indiceA>0){
        setIndiceAcambiarA(indiceA-1)
       }else{
         setIndiceAcambiarA(cities.length-1)
       }
       clearInterval(idA)
    }
    /* ------------------------------CARRUSEL DE HOLES------------------------------------------ */

    let[indice2, setIndiceAcambiar2] = useState(0)
    let[indice2A, setIndiceAcambiar2A] = useState(1)
    let posterior2 = () =>{   
      if(indice2<dataHotels.length-1){
       setIndiceAcambiar2(indice2+1)
      }else{
        setIndiceAcambiar2(0)
      }
      clearInterval(id2)
      if(indice2A<dataHotels.length-1){
        setIndiceAcambiar2A(indice2A+1)
       }else{
         setIndiceAcambiar2A(0)
       }
       clearInterval(idA2)
    }
    let anterior2 = () =>{   
      if(indice2>0){
       setIndiceAcambiar2(indice2-1)
      }else{
        setIndiceAcambiar2(dataHotels.length-1)
      }
      clearInterval(id2)
      if(indice2A>0){
        setIndiceAcambiar2A(indice2A-1)
       }else{
         setIndiceAcambiar2A(dataHotels.length-1)
       }
       clearInterval(idA2)
    }

    /* ------------------------------CARRUSEL AUTOMATICO CIUDADES------------------------------------------ */
    let [id,setid]= useState(0)
    
    useEffect(
        () =>{ 
        let idAutomatico =setInterval(
            ()=>{
                posterior()
            },
            3000)
            setid(idAutomatico)
            return clearInterval(id)
        },
        [indice]
    )

    let [idA,setidA]= useState(1)
    
    useEffect(
        () =>{ 
        let idAutomaticoA =setInterval(
            ()=>{
                anterior()
            },
            3000)
            setidA(idAutomaticoA)
            return clearInterval(idA)
        },
        [indiceA]
    )

    /* ------------------------------CARRUSEL AUTOMATICO HOTELES------------------------------------------ */

    let [id2,setid2]= useState(0)
    
    useEffect(
        () =>{ 
        let idAutomatico2 =setInterval(
            ()=>{
                posterior2()
            },
            3000)
            setid2(idAutomatico2)
            return clearInterval(id2)
        },
        [indice2]
    )

    let [idA2,setidA2]= useState(1)
    
    useEffect(
        () =>{ 
        let idAutomaticoA2 =setInterval(
            ()=>{
                anterior2()
            },
            3000)
            setidA2(idAutomaticoA2)
            return clearInterval(idA2)
        },
        [indice2A]
    )
    return(
    <>
    <h2 className='subtitulosHome2'>CIUDADES</h2>
        <FlechaA onClick={anterior}/>
        <ImagenYCiudad img={cities[indice].photo} ciudad={cities[indice].name} />
        <ImagenYCiudad img={cities[indiceA].photo } ciudad={cities[indiceA].name} />
        <FlechaP onClick={posterior}/>
    <h2 className='subtitulosHome2'>HOTELES</h2>
        <FlechaA onClick={anterior2}/>
        <ImagenYCiudad img={dataHotels[indice2].photo} ciudad={dataHotels[indice2].name} />
        <ImagenYCiudad img={dataHotels[indice2A].photo} ciudad={dataHotels[indice2A].name} />
        <FlechaP onClick={posterior2}/>
    </>
  )
}
