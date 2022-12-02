import { useRef } from "react";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {BASE_URL} from '../api/url'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";


export default function NewItinerary() {
  
    let [citiesSelect, setCitiesSelect] = useState([]);
   const { idUser, token } = useSelector((state) => state.user);
    const cityIdInputElement = useRef();
    const nameInputElement = useRef();
    const descriptionInputElement = useRef();
    const priceInputElement = useRef();
    const durationInputElement = useRef();
    const userIdInputElement = useRef();
    const photoElement = useRef();
    let info = useRef();
    let navegation = useNavigate();
    

    useEffect(() => {
        axios
          .get(`${BASE_URL}/city`)
          .then((response) => setCitiesSelect(response.data.response));
      }, []);

  async function handleSubmit (event) {
        event.preventDefault();
        const NewIt= {
          cityId: cityIdInputElement.current?.value,
          description: descriptionInputElement.current?.value,
          name: nameInputElement.current?.value,
          photo: photoElement.current?.value,
          price: priceInputElement.current?.value,
          userId: idUser,
          duration: durationInputElement.current?.value
        };
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        try {
          let response = await axios.post(`${BASE_URL}/itinerary`, NewIt, headers);
          console.log(response);
          if (response.data.success){
            Swal.fire({
                icon: "success",
                title: response.data.message,
                showConfirmButton: true,
                iconColor: "#01344f",
                confirmButtonColor: "#01344f",
              }).then((result) => {
                if (result.isConfirmed) {
                  navegation(`/mytineraries`);
                }
              });
            }
          } catch (error) {
            Swal.fire({
              icon: "warning",
              confirmButtonColor: "#01344f",
              iconColor: "#01344f",
              title: error.response.data.message,
              showConfirmButton: true,
            });
          }
        }

  return (
    <form className='formularioSignIn3'  ref={info} onSubmit={handleSubmit} >

        <div className='titulitoH3'>
        <h2>New tinerary information</h2> 
        <img src="./img/logoInfo.png" alt="" />
        </div>
        
        <input 
        type="text" 
        name='nombreH' 
        autoComplete='off'
        placeholder='Name' 
        ref={nameInputElement}

        >
        </input>
        <select
                        ref={cityIdInputElement}
                        className="form-control form-sign"
                        id="cityId"
                      >
                        <option>Select the city</option>
                        {citiesSelect.map((cities) => (
                          <option key={cities._id} value={cities._id}>
                            {cities.name}
                          </option>
                        ))}
        </select>

       <input type="text" name="photo" ref={photoElement} placeholder='Photo url'>
        </input>

        <input 
        type="text" 
        name='price' 
        autoComplete='off' 
        placeholder='Price'
        ref={priceInputElement}

      >
        </input>

        

        <input 
        type="text" 
        name='duration' 
        autoComplete='off' 
        placeholder='Duration'
        ref={durationInputElement}

        >
        </input>
        
        <input 
        type="text" 
        name='description' 
        autoComplete='off' 
        placeholder='Description'
        ref={descriptionInputElement}

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
    
        <button id='signIn3' type='submit' onClick={handleSubmit} required>Create New Tinerary</button>
    </form>
    
  )
}