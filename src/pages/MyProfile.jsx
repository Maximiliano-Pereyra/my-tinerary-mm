import React from 'react'

export default function MyProfile() {
  return (
    <div className='profile-user'>
        <img src="./img/logo.png" alt="imagen de usurio" />
        <h4>Nombre de usuario</h4>
        <h4>Apellido de usuario</h4>
        <h5>Email de usuario</h5>
        <button>Edit my profile</button>
    </div>
  )
}
