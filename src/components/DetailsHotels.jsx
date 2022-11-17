import React from 'react'
import { useParams } from 'react-router-dom'
import CardHotel from './CardHotel'
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/url'
import { useState } from 'react'
import CardShow from "./CardShow"

export default function DetailsHotels() {
  let {id} = useParams()
  let [hotelFind, setHotelFind] = useState([])
  let [show, setShow] = useState([])

  useEffect( () => {
    axios.get(`${BASE_URL}/hotel/?id=${id}`)
    .then(response => setHotelFind(response.data.res.find(hotel=>hotel._id===id)))
    .catch(err => console.log(err.message))
  }, [])

  useEffect( () => {
    axios.get(`${BASE_URL}/show`)
    .then(response => setShow(response.data.res.find(show=>show.hotelId===id)))
    .catch(err => console.log(err.message))
  }, [])  

  
  return (
    <>
        <CardHotel ey={hotelFind.id} titulo={hotelFind.name} imagen={hotelFind.photo} capacidad={hotelFind.capacity}  />
       ( <CardShow titulo={show?.name} imagen={show?.photo} precio={show?.price} fecha={show?.date}/>)   
    </>
  )
}