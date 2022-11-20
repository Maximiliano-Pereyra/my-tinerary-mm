import React, { useState } from 'react'
import { useRef } from "react";
import axios from 'axios';
import { BASE_URL } from '../api/url';

export default function NuevoHotel() {

  const nameInputElement = useRef();
  const photoInputElement = useRef();
  const capacityInputElement = useRef();
  const cityIdInputElement = useRef();
  const userIdInputElement = useRef();

  let handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: nameInputElement.current.value,
      photo: photoInputElement.current.value,
      capacity: capacityInputElement.current.value,
      cityId: cityIdInputElement.current.value,
      userId: userIdInputElement.current.value
    };

    console.log(data);
    try {
      let res = axios.post((`http://localhost:8000/api/hotel/`), data)
      console.log(data);
      if (res.data.success) {
        alert('se pudo crear')
      }else{
        alert('no se pudo')
      }
    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <form className='formularioSignIn2'>

      <div className='titulitoH'>
        <h2>New hotel information</h2>
        <img src="./img/datosSign.png" alt="" />
      </div>


      <input
        type="text"
        name='name'
        autoComplete='off'
        placeholder='Hotel name'
        ref={nameInputElement}>
      </input>

      <input
        type="text"
        name='photo'
        autoComplete='off'
        placeholder='URL photo'
        ref={photoInputElement}>
      </input>

      <input
        type="text"
        name='capacity'
        autoComplete='off'
        placeholder='Enter capacity'
        ref={capacityInputElement}>
      </input>

      <input
        type="text"
        name='cityId'
        autoComplete='off'
        placeholder='City Id'
        ref={cityIdInputElement}>
      </input>

      <input
        type="text"
        name='userId'
        autoComplete='off'
        placeholder='Enter User Id'
        ref={userIdInputElement}>
      </input>

      <button id='signIn2' type='submit' onClick={handleSubmit}>Send data</button>

    </form>

  )
}

/* data.name!=='' &&
       data.photo!=='' &&
       data.capacity!=='' &&
       data.cityId!=='' &&
       data.userId!=='' */