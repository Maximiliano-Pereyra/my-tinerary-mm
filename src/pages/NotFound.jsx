import React from 'react'
import CallToAction from '../pages/CallToAction'

export default function NotFound() {
  return (
    <div className='cuerpo-general'>
        <CallToAction page="Home" rute="/Home"/>
            <div className='c404'>
            <h2>Upss....page not found</h2>
            <img  src="./img/f404.png" alt="error" />
        </div>
    </div>
  )
}
