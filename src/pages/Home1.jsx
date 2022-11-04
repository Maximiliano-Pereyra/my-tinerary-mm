import React from 'react'
import { Route } from 'react-router-dom'
import CallToAction from './CallToAction'
import Header from './Header'
import Scrolltop from './Scrolltop'

export default function Home1() {
    return (
      <div className='h100 w100 flex column imgback'>
        <img className='logo' src="imagenes/Logotipo.gif" alt="" />
       <div className='navl'>
        <CallToAction page="Cities" rute="/cities"></CallToAction>
        <CallToAction page="Hotels" rute="/hotels"></CallToAction>
      </div>
      </div>
    )
  }

