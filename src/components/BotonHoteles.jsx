import React from 'react'
import { Link as Linkeador } from 'react-router-dom'

export default function BotonHoteles() {
  return (
    <Linkeador to='/hotels'>
       <div className='botonFooter'>Hotels</div>
    </Linkeador>
  )
}
