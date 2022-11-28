import React from "react";
import Input from "../components/Input";
import { Link as Linkeador} from "react-router-dom";
import { useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {BASE_URL} from "../api/url"

export default function SignUp(){
    const firstNameInputElement = useRef();
    const lastNameInputElement = useRef();
    const photoInputElement = useRef();
    const ageInputElement= useRef();
    const emailInputElement = useRef();
    const passwordInputElement = useRef();
    let form = useRef();

    
async function handleSubmit(event){
  event.preventDefault(); 

    let handleSubmit = {
          name: firstNameInputElement.current.value,
          lastName: lastNameInputElement.current.value,
          photo: photoInputElement.current.value,
          age: ageInputElement.current.value,
          role:'user',
          email: emailInputElement.current.value,
          password: passwordInputElement.current.value
        };
        try {
          let response = await axios.post(`${BASE_URL}/auth/sign-up`, handleSubmit)
        console.log(response)
        if (response.data.success){
          Swal.fire({
            icon: "success",
            title: response.data.message,
            text: `MyTinerary sent a notification to your email ${handleSubmit.email}`,
            showConfirmButton: true,
            iconColor: "#0c6b12",
            confirmButtonColor: "#0c6b12",
          }) 
          form.current.reset();
        }
        }catch (error){
          Swal.fire({
            icon: "error",
            confirmButtonColor: "#9f2703",
            iconColor: "#9f2703",
            showConfirmButton: true,});
        }}
    return (
        <div className="container-signup">

            <h2>If you don't have an account yet, please register:</h2>
            <form className="form-sign" onSubmit={handleSubmit} ref={form}>
            <div className="container-inputs">
            <Input type="text" ref={firstNameInputElement} id='firstName' name='firstName' className='firstName-input'  placeholder="First Name"/>
            <Input type="text" ref={lastNameInputElement} id='lastName' name='lastName' className='lastName-input' placeholder="Last Name"/>
            <Input type="text" ref={photoInputElement} id='photo' name='photo' className='photo-input' placeholder="Photo URL"/>
            <Input type="number" ref={ageInputElement} id='age' name='age' className='age-input' placeholder="Age"/>
            <Input type="text" ref={emailInputElement} id='email' name='email' className='email-input' placeholder="Email" />
            <Input type="text" ref={passwordInputElement} id='password' name='password' className='pasword-input' placeholder="Password" />
            </div>
            <div className="submit-buttons">
            <button type="submit"  className='signu'>Sign Up</button>
            <button type="submit" className="google-acc">Google</button>
            </div>
            </form>            
            <h3>If you have an account, please:</h3>
            <Linkeador to='/signIn'>
              <button type="submit" value='SignIn-redirect' >Sign In</button>
            </Linkeador>
        </div>
    )
}
