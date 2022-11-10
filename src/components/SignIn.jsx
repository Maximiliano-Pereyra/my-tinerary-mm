import React, { useState } from 'react'
import dataUsers from '../dataUsers'
import { useRef } from "react";
import { Link as Linkeador } from 'react-router-dom';

export default function SignIn() {
    const emailInputElement = useRef();
    const passwordInputElement = useRef();

    let handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          email: emailInputElement.current?.value,
          password: passwordInputElement.current?.value
        };
        
        localStorage.setItem('user-registered', JSON.stringify(data))
    }

    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    const correos = dataUsers.map(usuario=>usuario.email)
    /* console.log(correos); */
    const contraseñas = dataUsers.map(usuario=>usuario.pasword)
    /* console.log(contraseñas); */

    let login = (email, password) => {
        if (correos.includes(email) && contraseñas.includes(password)){
            alert('Login correcto')
        }else{
            alert('Datos incorrectos')
        }
    }

    const validate =(email, password) =>{
        if(!correos.includes(email)) return 'Email invalido';
        if(!contraseñas.includes(password)) return 'Contraseña invalida'
    }

    let errorMensage = validate(email, password);

console.log(email);
console.log(password);
  return (
    <form className='formularioSignIn'
        onSubmit={ev=>{
            ev.preventDefault();
            login(email,password)
        }}
    >
        <h2>Sign In</h2>
        <input 
        type="text" 
        name='email' 
        autoComplete='off'
        placeholder='Ingrese el email' 
        ref={emailInputElement}
        value={email}
        onChange={ev => setEmail(ev.target.value)}>
        </input>
        

        <input 
        type="text" 
        name='password' 
        autoComplete='off' 
        placeholder='Ingrese la password'
        ref={passwordInputElement}
        value={password}
        onChange={ev => setPassword(ev.target.value)}>
        </input>

        <button id='signIn' type='submit' onClick={handleSubmit} disabled={errorMensage}>Sign In</button>
        <button id='googleb' type='submit' ><a href="https://www.google.com.ar/"><img src="./img/inicioG.png" alt="google" /></a></button>

       <div className='contenedorU'>
        <h3>If you don't have a count, go to sign up</h3>
       <Linkeador to='/signUp'><button>Sing Up</button></Linkeador>
       </div>
        
    </form>
    
  )
}
