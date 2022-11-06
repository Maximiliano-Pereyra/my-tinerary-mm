import React, { useState } from 'react'
import { useRef } from "react";

export default function NuevoHotel() {
    const idInputElement = useRef();
    const capacityInputElement = useRef();
    const nombreHInputElement = useRef();
    const ubicacionInputElement = useRef();
    const descripcionInputElement = useRef();
    const userIdInputElement = useRef();

    let handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          id: idInputElement.current?.value,
          capacity: capacityInputElement.current?.value,
          nombreH: nombreHInputElement.current?.value,
          ubicacion: ubicacionInputElement.current?.value,
          descripcion: descripcionInputElement.current?.value,
          userId: userIdInputElement.current?.value
        };
        
        localStorage.setItem('hotel-registered', JSON.stringify(data))
    }

    let [id,setId] = useState('');
    let [capacity,setCapacity] = useState('');
    let [nombreH, setNombre] = useState('');
    let [ubicacion, setUbicacion] = useState('');
    let [descripcion, setDescripcion] = useState('');
    let [userId, setUserId] = useState('');


  return (
    <form className='formularioSignIn2'>

        <div className='titulitoH'>
        <h2>New hotel information</h2> 
        <img src="./img/datosSign.png" alt="" />
        </div>

        
        <input 
        type="text" 
        name='nombreH' 
        autoComplete='off'
        placeholder='Hotel name' 
        ref={nombreHInputElement}
        value={nombreH}
        onChange={ev => setNombre(ev.target.value)}>
        </input>
       
        

        <input 
        type="text" 
        name='ubicacion' 
        autoComplete='off' 
        placeholder='Location'
        ref={ubicacionInputElement}
        value={ubicacion}
        onChange={ev => setUbicacion(ev.target.value)}>
        </input>

        <input 
        type="text" 
        name='descripcion' 
        autoComplete='off' 
        placeholder='Description'
        ref={descripcionInputElement}
        value={descripcion}
        onChange={ev => setDescripcion(ev.target.value)}>
        </input>

        <input 
        type="text" 
        name='capacity' 
        autoComplete='off' 
        placeholder='Enter capacity'
        ref={capacityInputElement}
        value={capacity}
        onChange={ev => setCapacity(ev.target.value)}>
        </input>
        
        <input 
        type="text" 
        name='id' 
        autoComplete='off'
        placeholder='Enter Hotel Id' 
        ref={idInputElement}
        value={id}
        onChange={ev => setId(ev.target.value)}>
        </input>

        <input 
        type="text" 
        name='userId' 
        autoComplete='off'
        placeholder='Enter User Id' 
        ref={userIdInputElement}
        value={userId}
        onChange={ev => setUserId(ev.target.value)}>
        </input>
    
        <button id='signIn2' type='submit' onClick={handleSubmit}>Send data</button>
    
        
    </form>
    
  )
}

