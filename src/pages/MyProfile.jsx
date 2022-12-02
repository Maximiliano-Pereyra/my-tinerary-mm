import React from 'react';
import { Link as Linkeador } from 'react-router-dom';
import {  useSelector } from 'react-redux';

export default function MyProfile(props) {

    let user = useSelector((store) => store.user);
    const { photo, name, lastName, email, idUser } = useSelector((state) => state.user);
    console.log(user);

  return (
    <div className='profile-user'>
        <img src={photo} alt="imagen de usuario" />
        <h4>{name}</h4>
        <h4>{lastName}</h4>
        <h5>{email} </h5>
        <Linkeador to = {`/editProfile`}>
        <button>Edit my profile</button>
        </Linkeador>
    </div>
  )
}
