import { useRef } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BASE_URL} from '../api/url'
import { useSelector } from "react-redux";


export default function NewCity() {
  
    const populationInputElement = useRef();
    const nombreCInputElement = useRef();
    const continentInputElement = useRef();
    const userIdInputElement = useRef();
    const photoElement = useRef();
    const { idUser, token} = useSelector((state) => state.user);

  async function handleSubmit (event) {
        event.preventDefault();
        const data = {
          population: populationInputElement.current?.value,
          name: nombreCInputElement.current?.value,
          photo: photoElement.current?.value,
          continent: continentInputElement.current?.value,
          userId: idUser
        };
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        try {
          let res = await axios.post(`${BASE_URL}/city`, data, headers);
          console.log(res);
          if (res.data.success){
            toast.success("The city was created", {
              position: toast.POSITION.TOP_CENTER,
              theme:"colored"
            });
          } else {
            toast.error(res.data.message, {
              position: toast.POSITION.TOP_CENTER,
              theme:"colored"
            });
          }
        } catch (error) {
          console.log(error);
        }
      }

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

        <input type="text" name="photo" ref={photoElement} placeholder='Photo url'>
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
        name='userId' 
        autoComplete='off'
        placeholder='Enter User Id' 
        ref={userIdInputElement}

     >
        </input>
    
        <button id='signIn3' type='submit' onClick={handleSubmit}>Create</button>
    
        <ToastContainer></ToastContainer>
    </form>
    
  )
}