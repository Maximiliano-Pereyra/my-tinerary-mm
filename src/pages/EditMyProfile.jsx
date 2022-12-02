import React from 'react'
import { useRef } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';


import 'react-toastify/dist/ReactToastify.css';

export default function EditMyPerfil() {

    const {idUser, role } = useSelector((state) => state.user);
    const nameInputElement = useRef();
    const lastNameInputElement = useRef()
    const photoInputElement = useRef();
    const emailInputElement = useRef();
    const ageInputElement = useRef();
    const passwordInputElement = useRef();
    let id  =idUser

    let handleSubmit = async (event) => {

        event.preventDefault();
        const data = {
            name: nameInputElement.current.value,
            lastName: lastNameInputElement.current.value,
            photo: photoInputElement.current.value,
            email: emailInputElement.current.value,
            role: role,
            age: ageInputElement.current.value,
            password: passwordInputElement.current.value
        }

        console.log(data);
        try {
            let res = await axios.patch((`http://localhost:8000/api/auth/${id}`), data)
            console.log(res);
            if (res.data.success) {
                Swal.fire({
                    icon: "question",
                    title: "Would do you like change your profile?",
                    showConfirmButton: true,
                    iconColor: "#01344f",
                    confirmButtonColor: "#01344f",
                    confirmButtonText: 'Yes',
                    showCancelButton: true,
                });
                
            }

        } catch (error) {
            console.log(error.message);
            toast.error('The profile could not be modificated, please enter all fields!', {
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
                <h2>New User's information</h2>
                <img src="./img/datosSign.png" alt="foto de datos" />
            </div>

            <input
                type="text"
                name='name'
                autoComplete='off'
                placeholder='Name'
                ref={nameInputElement}>
            </input>

            <input
                type="text"
                name='last-name'
                autoComplete='off'
                placeholder='Last Name'
                ref={lastNameInputElement}>
            </input>

            <input
                type="text"
                name='age'
                autoComplete='off'
                placeholder='Enter age'
                ref={ageInputElement}>
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
                name='email'
                autoComplete='off'
                placeholder='Enter email'
                ref={emailInputElement}>
            </input>

            <input
                type="text"
                name='password'
                autoComplete='off'
                placeholder='Enter new password'
                ref={passwordInputElement}>
            </input>

            <button id='signIn2' type='submit' onClick={handleSubmit}>Send data</button>
            <ToastContainer />

        </form>
    )
}
