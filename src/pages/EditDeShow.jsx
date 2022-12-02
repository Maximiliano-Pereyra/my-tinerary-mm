import React from 'react'
import { useRef } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

export default function EditDeShow() {

 
  const nameInputElement = useRef();
  const descriptionInputElement = useRef()
  const photoInputElement = useRef();
  const priceInputElement = useRef();
  const dateInputElement = useRef();
  const hotelIdInputElement = useRef();
  const { idUser } = useSelector((state) => state.user);
 let {id} = useParams();

  let handleSubmit = async (event) => {
   
    event.preventDefault();
    const data = {
      _id: id,
      name: nameInputElement.current.value,
      description: descriptionInputElement.current.value,
      photo: photoInputElement.current.value,
      price: priceInputElement.current.value,
      date: dateInputElement.current.value,
      hotelId: hotelIdInputElement.current.value,
      userId: idUser
    };

    console.log(data);
    try {
      let res = await axios.patch((`http://localhost:8000/api/show/${id}`), data)
      console.log(res)
      if (res.data.success) {
        toast.success(' The show was modificated', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",});
          window.location.href=`http://localhost:3000/shows/prueba`
      } 
    } catch (error) {
      console.log(error.message);
      toast.error('Sorry, the show could not be modificated!, pleas enter information to all fields', {
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

  let deleteF = async (event) => {
   
    event.preventDefault();
    const data = {_id: id, };

    console.log(data);
    try {
      let res = await axios.delete((`http://localhost:8000/api/show/${id}`), data)
      console.log(res);
      if (res.data.success) {
        toast.success(' The show was deleted', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",});
          window.location.href=`http://localhost:3000/shows/prueba`
      }
        
    } catch (error) {
      console.log(error.message);
      toast.error('Sorry, the show could not be deleted!', {
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
        <h2>New information</h2>
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
        placeholder='Enter description'
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
        name='price'
        autoComplete='off'
        placeholder='Enter price'
        ref={priceInputElement}>
      </input>

      <input
        type="text"
        name='date'
        autoComplete='off'
        placeholder='Enter date'
        ref={dateInputElement}>
      </input>

      <input
        type="text"
        name='hotelId'
        autoComplete='off'
        placeholder='Enter hotel Id'
        ref={hotelIdInputElement}>
      </input>

      <button id='signIn2' type='submit' onClick={handleSubmit}>Send data</button>
      <ToastContainer />

      <button id='signIn2' type='submit' onClick={deleteF}>Delete Hotel</button>
      <ToastContainer />

    </form>
  )
}
