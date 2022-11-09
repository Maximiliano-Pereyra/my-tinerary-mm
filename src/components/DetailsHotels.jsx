import React from 'react'
import { useParams } from 'react-router-dom'
import dataHotels from '../dataHotels'
import dataShows from '../dataShows'
import CardHotel from './CardShow'
import CardShow from './CardShow'

export default function DetailsHotels() {
  let {id}= useParams()

  let findHotel= dataHotels.find((e => e.id == id)) 
  let findShow= dataShows.find((e => e.hotelId == findHotel.id))
  console.log(findHotel);
  return (
    <>
        <CardHotel titulo={findHotel.name} imagen={findHotel.photo} capacidad={findHotel.capacity} descripcion={findHotel.description}/>
        <CardShow titulo={findShow[0].name} imagen={findShow[0].photo} precio={findShow[0].price} fecha={findShow[0].date}/>
        <CardShow titulo={findShow[1].name} imagen={findShow[1].photo} precio={findShow[1].price} fecha={findShow[1].date}/>
        
    </>
  )
}
