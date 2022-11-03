import React from 'react'

export default function Home1(props) {
    return (
      <div className='h100 w100 flex column'>
     <img className='logo' src="imagenes/4136591.jpg" alt="" />
      <div>{props.children}</div>
      </div>
    )
  }

