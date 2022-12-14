import React from 'react'
import { useRef } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function NuevoHotel() {


  const { idUser, token } = useSelector((state) => state.user);
  console.log(idUser);

  const nameInputElement = useRef();
  const photoInputElement = useRef();
  const capacityInputElement = useRef();
  const cityIdInputElement = useRef();

  let handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: nameInputElement.current.value,
      photo: photoInputElement.current.value,
      capacity: capacityInputElement.current.value,
      cityId: cityIdInputElement.current.value,
      userId: idUser
    };

    console.log(data);
    let headers = { headers: { Authorization: ` Bearer ${token} ` } };
    try {
      let res = await axios.post((`http://localhost:8000/api/hotel/`), data,headers)
      console.log(res);
      if (res.data.success) {
        toast.success(' The hotel was created', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",});
          window.location.href=`http://localhost:3000/hotels`
      }else{
        toast.error(res.data.message.join('///'), {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
        
    } catch (error) {
      console.log(error.message);
      toast.error('Sorry, the hotel could not be created!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
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

      <button id='signIn2' type='submit' onClick={handleSubmit}>Send data</button>
      <ToastContainer />

    </form>

  )
}
