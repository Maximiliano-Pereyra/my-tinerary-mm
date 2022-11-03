import React from 'react'

export default function flechaA(props) {
  let {onClick} = props
  return (
    <div className='flechaHome2' onClick={onClick}><img src="img/anterior.png" alt="flechaA" /></div>
  )
}
