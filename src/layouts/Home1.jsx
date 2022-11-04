import React from 'react'
import { Route } from 'react-router-dom'
import CallToAction from '../pages/CallToAction'
import Header from '../pages/Header'
import Scrolltop from '../pages/Scrolltop'

export default function Home1() {
    return (
      <div className='h100 w100 flex column imgback'>
       <Header></Header>
        <img className='logo' src="imagenes/Logotipo.gif" alt="" />
       <div className='navl'>
        <CallToAction page="Cities" rute="/cities"></CallToAction>
        <CallToAction page="Hotels" rute="/hotels"></CallToAction>
      </div>
      </div>
    )
  }

