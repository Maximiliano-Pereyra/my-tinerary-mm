import React from 'react'
import ContenedorBotones from './ContenedorBotones'
import MapaFooter from './MapaFooter'
import InformacionFooter from './InformacionFooter'

export default function Footer() {
  return (
    <div className="footer">
    <ContenedorBotones/>
    <InformacionFooter/>
    <MapaFooter/>
    </div>
  )
}
