import React from 'react'
import CardCitie from '../components/CardCitie'
import CardItinerary from '../components/CardItinerary'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../api/url'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Itinerary from '../components/Itinerary'

export default function DetailsCity() {
  let {id} = useParams() //id de la url de la barra de busqueda
  let [foundCity, setfoundCity] = useState([])
  let [itineraries, setItineraries] = useState([])

  useEffect( () => {
    axios.get(`${BASE_URL}/city?=${id}`)
    .then(response => setfoundCity(response.data.response.find(city=>city._id===id)))
    .catch(err => console.log(err.message))
  }, [])

  useEffect( () => {
    axios.get(`${BASE_URL}/itineraries`)
    .then(response => setItineraries(response.data.response.find(activities=>activities.cityId===id)))
    .catch(err => console.log(err.message))
  }, [])
console.log(itineraries)
console.log(id)
  return (
<div className='detgeneral'>
<div>
      <CardCitie key={foundCity.id} titulo={foundCity.name} continente={foundCity.continent} imagen={foundCity.photo} poblacion={foundCity.population}/>
</div>
  <Itinerary/>      
</div>
  )
}

