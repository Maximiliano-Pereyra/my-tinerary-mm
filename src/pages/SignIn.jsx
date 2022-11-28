import React from 'react'
import { useRef } from "react";
import { Link as Linkeador } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import usersActions from '../redux/actions/userActions';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  
    let email = useRef();
    let dispatch = useDispatch()
    let {enter} = usersActions
    let password = useRef();
    let form = useRef();
    let navegation = useNavigate()

    async function iniciarSesion(event) {
        event.preventDefault();
       

        let datos = {
          email: email.current.value,
          password: password.current.value,
          
        };
        try {
          let res = await dispatch(enter (datos));
          console.log(res.payload);
          if (res.payload.success) {
            Swal.fire({
              icon: "success",
              title: res.payload.res.message,
              showConfirmButton: true,
              iconColor: "#01344f",
              confirmButtonColor: "#01344f",
            }).then((result) => {
              if (result.isConfirmed) {
                navegation("/");
              }
            });
          }else{
            Swal.fire({
              icon: "error",
              confirmButtonColor: "#01344f",
              iconColor: "#01344f",
              title: res.payload.response,
              showConfirmButton: true,
            });
    
          }
        } catch (error) {
          console.log(error);
        }
      }
    

  return (
    <form className='formularioSignIn' ref={form} onSubmit={iniciarSesion} >
        <h2>Sign In</h2>
        <input 
        type="text" 
        name='email' 
        autoComplete='off'
        placeholder='Ingrese el email'
        ref={email}>
        </input>
        

        <input 
        type="text" 
        name='password' 
        autoComplete='off' 
        placeholder='Ingrese la password'
        ref={password}>
        </input>

        <button id='signIn' type='submit' onClick={iniciarSesion} >Sign In</button>
        <button id='googleb' type='submit' ><a href="https://www.google.com.ar/"><img src="./img/inicioG.png" alt="google" /></a></button>

       <div className='contenedorU'>
        <h3>If you don't have a count, go to sign up</h3>
       <Linkeador to='/signUp'><button>Sing Up</button></Linkeador>
       </div>
        
    </form>
    
  )
}
