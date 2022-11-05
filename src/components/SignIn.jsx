import React, { useState } from 'react'
import dataUsers from '../dataUsers'

export default function SignIn() {
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    const correos = dataUsers.map(usuario=>usuario.email)
    console.log(correos);
    const contraseñas = dataUsers.map(usuario=>usuario.pasword)
    console.log(contraseñas);

    let login = (email, password) => {
        if (correos.includes(email) && contraseñas.includes(password)){
            alert('Login correcto')
        }else{
            alert('Datos incorrectos')
        }
    }

    const validate =(email, password) =>{
        if(!email.includes('@')) return 'Email invalido';
        if(!contraseñas.includes(password)) return 'Contraseña invalida'
    }

    let errorMensage = validate(email, password);

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
        value={email}
        onChange={ev => setEmail(ev.target.value)}>
        </input>
        

        <input 
        type="text" 
        name='password' 
        autoComplete='off' 
        placeholder='Ingrese la password'
        value={password}
        onChange={ev => setPassword(ev.target.value)}>
        </input>
        <button id='signIn' type='submit' disabled={errorMensage}>Sign In</button>
        <button id='googleb' type='submit' ><a href="https://www.google.com.ar/"><img src="./img/inicioG.png" alt="google" /></a></button>
        {/* <p><img src="./img/datosSign.png" alt="" /></p> */}
        
    </form>
  )
}
