import React from 'react'
import { useParams } from 'react-router-dom'
import CardHotel from '../components/CardHotel'
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/url'
import { useState } from 'react'
import CardShow from "../components/CardShow"
import { useDispatch, useSelector } from "react-redux";
import hotelActions from '../redux/actions/hotelActions'
import showActions from '../redux/actions/showAction'

export default function DetailsHotels() {
  let {id} = useParams()
  let [hotelFind, setHotelFind] = useState({})
  let [show, setShow] = useState([])
  const dispatch = useDispatch()
  const { getOneHotelId } = hotelActions
  const { hotels } = useSelector((state) => state.hotels);
  const { hotel } = useSelector((state) => state.hotels);
  const { getShowHotelId } = showActions
  const { shows } = useSelector((state) => state.shows) 
console.log(hotel);
/*  axios.get(`${BASE_URL}/hotel/?id=${id}`)
    .then(response => setHotelFind(response.data.res.find(hotel=>hotel._id===id)))
    .catch(err => console.log(err.message)) */
/*  axios.get(`${BASE_URL}/show`)
    .then(response => setShow(response.data.res.find(show=>show.hotelId===id)))
    .catch(err => console.log(err.message)) */

   useEffect(async () => {
    setHotelFind(await dispatch(getOneHotelId(id)))
    
    dispatch(getShowHotelId(id))
  }, [])

console.log(shows.shows);
  return (
    <>
        <CardHotel key={hotel.id} titulo={hotel.name} imagen={hotel.photo} capacidad={hotel.capacity}  />
        {shows?.shows?.map(allshow=><CardShow key={allshow._id} id={allshow._id} titulo={allshow.name} imagen={allshow.photo} precio={allshow.price} fecha={allshow.date}/>)}   
     
    </>
  )
}