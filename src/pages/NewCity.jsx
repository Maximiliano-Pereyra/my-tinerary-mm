import { useRef } from "react";
import axios from 'axios';


export default function NewCity() {
    const populationInputElement = useRef();
    const nombreCInputElement = useRef();
    const continentInputElement = useRef();
    const userIdInputElement = useRef();
    const photoElement = useRef();

    let handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          population: populationInputElement.current?.value,
          name: nombreCInputElement.current?.value,
          photo: photoElement.current?.value,
          continent: continentInputElement.current?.value,
          userId: userIdInputElement.current?.value
        };
        console.log(data);
        axios.post(('http://localhost:8000/api/city'), data )
        .then(respon=>console.log(respon))
        .catch(err=>{console.log(err)})
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
    
        <button id='signIn3' type='submit' onClick={handleSubmit}>Send data</button>
    
        
    </form>
    
  )
}