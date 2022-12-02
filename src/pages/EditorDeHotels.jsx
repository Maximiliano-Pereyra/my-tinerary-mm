import React from 'react'
import { useRef } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import hotelActions from '../redux/actions/hotelActions';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

export default function EditorDeHotel() {
  const dispatch = useDispatch();
 const {deleteHotels} = hotelActions
  const nameInputElement = useRef();
  const photoInputElement = useRef();
  const capacityInputElement = useRef();
  const cityIdInputElement = useRef();
  const { idUser } = useSelector((state) => state.user);
 let {id} = useParams();

  let handleSubmit = async (event) => {
   
    event.preventDefault();
    const data = {
      _id: id,
      name: nameInputElement.current.value,
      photo: photoInputElement.current.value,
      capacity: capacityInputElement.current.value,
      cityId: cityIdInputElement.current.value,
      userId:idUser
    };

    console.log(data);
    try {
      let res = await axios.patch((`http://localhost:8000/api/hotel/${id}`), data)
      console.log(res);
      if (res.data.success) {
        toast.success(' The hotel was modificate', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",});
          window.location.href=`http://localhost:3000/hotels/${id}`
      }
        
    } catch (error) {
      console.log(error.message);
      toast.error('Sorry, the hotel could not be modificated!', {
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
   
    const _id = id;

    if (dispatch(deleteHotels({ hotelId:_id }))) {
      toast.success("The hotel was deleted", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark"
      });
      window.location.href=`http://localhost:3000/hotels`
    }
    window.location.href=`http://localhost:3000/hotels`
   
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

      <button id='signIn2' type='submit' onClick={deleteF}>Delete Hotel</button>
      <ToastContainer />

    </form>

  )
}

/* data.name!=='' &&
       data.photo!=='' &&
       data.capacity!=='' &&
       data.cityId!=='' &&
       data.userId!=='' */

/*        event.preventDefault();
       const data = {_id: id, };
   
       console.log(data);
       try {
         let res = await axios.delete((`http://localhost:8000/api/hotel/${id}`), data)
         console.log(res);
         if (res.data.success) {
           toast.success(' The hotel was deleted', {
             position: "top-center",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "dark",});
             window.location.href=`http://localhost:3000/hotels`
         }
           
       } catch (error) {
         console.log(error.message);
         toast.error('Sorry, the hotel could not be deleted!', {
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
    */