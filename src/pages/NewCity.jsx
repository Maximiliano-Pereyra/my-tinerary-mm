import React, { useState } from 'react'
import { useRef } from "react";
import axios from 'axios';
import {BASE_URL} from '../api/url'
import { useEffect } from 'react';

export default function NewCity() {
    const idInputElement = useRef();
    const populationInputElement = useRef();
    const nombreCInputElement = useRef();
    const continentInputElement = useRef();
    const userIdInputElement = useRef();

    let [dataU, setDataU] = useState(null)

    let handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          id: idInputElement.current?.value,
          population: populationInputElement.current?.value,
          nombreC: nombreCInputElement.current?.value,
          continent: continentInputElement.current?.value,
          userId: userIdInputElement.current?.value
        };
        setDataU(data)
        event.target.reset()
    }

    useEffect( () => {
      axios.get(`${BASE_URL}/city`)
        .then(response => console.log(response.data.response))
        .catch (err => console.log(err))
      }, [])
  
    useEffect( () => {
      axios.post(`${BASE_URL}/city`, dataU)
        .then(response => console.log(response.data.response))
        .catch (err => console.log(err))
      }, [dataU])


  return (
    <form className='formularioSignIn3' onSubmit={handleSubmit} >

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

        >
        </input>
       
        <input 
        type="text" 
        name='continent' 
        autoComplete='off' 
        placeholder='Continent'
        ref={continentInputElement}

      >
        </input>

        <input 
        type="text" 
        name='population' 
        autoComplete='off' 
        placeholder='Enter population'
        ref={populationInputElement}

        >
        </input>
        
        <input 
        type="text" 
        name='id' 
        autoComplete='off'
        placeholder='Enter City Id' 
        ref={idInputElement}

        >
        </input>

        <input 
        type="text" 
        name='userId' 
        autoComplete='off'
        placeholder='Enter User Id' 
        ref={userIdInputElement}

     >
        </input>
    
        <button id='signIn3' type='submit' onClick={handleSubmit}>Send data</button>
    
        
    </form>
    
  )
}