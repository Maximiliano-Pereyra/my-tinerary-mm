import React from 'react'
import CardCitie from './CardCitie'
import CardItinerary from './CardItinerary'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../api/url'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export default function DetailsCity() {


  let {cityid} = useParams()
  let [foundCity, setfoundCity] = useState([])
  let [itineraries, setItineraries] = useState([])

  useEffect( () => {
    axios.get(`${BASE_URL}/city?=${cityid}`)
    .then(response => setfoundCity(response.data.response[1]))
    .catch(err => console.log(err.message))
  }, [])

  useEffect( () => {
    axios.get(`${BASE_URL}/itinerary?=${cityid}`)
    .then(response => setItineraries(response.data.response))
    .catch(err => console.log(err.message))
  }, [])


  return (
<>
<div>
      <CardCitie key={foundCity.id} titulo={foundCity.name} continente={foundCity.continent} imagen={foundCity.photo} poblacion={foundCity.population}/>
</div>
    { 
    (itineraries.length !== 0 )
      ?itineraries.map( itine => <CardItinerary  key={itine._id}  imagen={itine.photo[0]} precio={itine.price} duracion={itine.duration} descripcion={itine.description}  id={itine._id}/>)
      : <CardItinerary descripcion="Not found"></CardItinerary>
      }
</>
  )
}
