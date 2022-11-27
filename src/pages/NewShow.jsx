import React from 'react'
import { useRef } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function NewShow() {

  const { idUser } = useSelector((state) => state.user);
  const nameInputElement = useRef();
  const photoInputElement = useRef();
  const descriptionInputElement = useRef();
  const priceInputElement = useRef();
  const dateInputElement = useRef();
  const hotelIdInputElement = useRef();

  let handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: nameInputElement.current.value,
      photo: photoInputElement.current.value,
      description:descriptionInputElement.current.value,
      price:priceInputElement.current.value,
      date:dateInputElement.current.value,
      hotelId: hotelIdInputElement.current.value,
      userId: idUser
    };

    console.log(data);
    try {
      let res = await axios.post((`http://localhost:8000/api/show/`), data)
      console.log(res);
      if (res.data.success) {
        toast.success(' The show was created', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",});
          window.location.href=`http://localhost:3000/shows/prueba`
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
      toast.error('Sorry, the show could not be created!', {
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
        <h2>New show information</h2>
        <img src="./img/datosSign.png" alt="" />
      </div>


      <input
        type="text"
        name='name'
        autoComplete='off'
        placeholder='Show name'
        ref={nameInputElement}>
      </input>

      <input
        type="text"
        name='description'
        autoComplete='off'
        placeholder='Description'
        ref={descriptionInputElement}>
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
        name='date'
        autoComplete='off'
        placeholder="Show's date"
        ref={dateInputElement}>
      </input>

      <input
        type="text"
        name='price'
        autoComplete='off'
        placeholder='Enter price'
        ref={priceInputElement}>
      </input>

      <input
        type="text"
        name='hotelId'
        autoComplete='off'
        placeholder='Hotel Id'
        ref={hotelIdInputElement}>
      </input>

      <button id='signIn2' type='submit' onClick={handleSubmit}>Send data</button>
      <ToastContainer />

    </form>

  )
}

