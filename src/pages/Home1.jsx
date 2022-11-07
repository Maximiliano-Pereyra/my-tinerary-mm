import React from 'react'
import { Route } from 'react-router-dom'
import CallToAction from '../components/CallToAction'
import Header from '../components/Header'
import Scrolltop from '../components/Scrolltop'


export default function Home1() {
    return (
      <div className='h100 w100 flex column imgback'>
        <img className='logo' src="imagenes/Logotipo.gif" alt="" />
       <div className='navl'>
        <CallToAction page="Ciudades" rute="/city"/>
        <CallToAction page="Hoteles" rute="/hotels"/>
      </div>
      </div>
    )
  }

