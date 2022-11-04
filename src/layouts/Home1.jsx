import React from 'react'

export default function Home1(props) {
    return (
      <div className='h100 w100 flex column imgback'>
        <img className='logo' src="imagenes/Logotipo.gif" alt="" />
        <div>{props.children}</div>
      </div>
    )
  }

