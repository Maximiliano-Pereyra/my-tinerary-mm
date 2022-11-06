import React, { useState } from 'react'
import { useRef } from "react";

export default function NuevaCiudad() {
    const idInputElement = useRef();
    const populationInputElement = useRef();
    const nombreCInputElement = useRef();
    const continentInputElement = useRef();
    const userIdInputElement = useRef();

    let handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          id: idInputElement.current?.value,
          population: populationInputElement.current?.value,
          nombreC: nombreCInputElement.current?.value,
          continent: continentInputElement.current?.value,
          userId: userIdInputElement.current?.value
        };
        
        localStorage.setItem('city-registered', JSON.stringify(data))
    }

    let [id,setId] = useState('');
    let [population,setPopulation] = useState('');
    let [nombreC, setNombreC] = useState('');
    let [continent, setContinent] = useState('');
    let [userId, setUserId] = useState('');


  return (
    <form className='formularioSignIn3'>

        <div className='titulitoH3'>
        <h2>New city information</h2> 
        <img src="./img/logoInfo.png" alt="" />
        </div>
        
        <input 
        type="text" 
        name='nombreH' 
        autoComplete='off'
        placeholder='City name' 
        ref={nombreCInputElement}
        value={nombreC}
        onChange={ev => setNombreC(ev.target.value)}>
        </input>
       
        <input 
        type="text" 
        name='continent' 
        autoComplete='off' 
        placeholder='Continent'
        ref={continentInputElement}
        value={continent}
        onChange={ev => setContinent(ev.target.value)}>
        </input>

        <input 
        type="text" 
        name='population' 
        autoComplete='off' 
        placeholder='Enter population'
        ref={populationInputElement}
        value={population}
        onChange={ev => setPopulation(ev.target.value)}>
        </input>
        
        <input 
        type="text" 
        name='id' 
        autoComplete='off'
        placeholder='Enter City Id' 
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
    
        <button id='signIn3' type='submit' onClick={handleSubmit}>Send data</button>
    
        
    </form>
    
  )
}