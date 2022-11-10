import React from 'react'
import CardCitie from './CardCitie'
import CardItinerary from './CardItinerary'
import dataCities from '../dataCities'
import dataActivities from '../dataActivities'
import { useParams } from 'react-router-dom'

export default function DetailsCity() {
    let {id}= useParams()
    let findCity= dataCities.find((e => e.id === id)) 
    let findActivity= dataActivities.filter((e => e.cityId === findCity.id))
      return(
      <>
      <CardCitie titulo={findCity.name} imagen={findCity.photo} continente={findCity.continent} poblacion={findCity.population} ></CardCitie>
      <CardItinerary  imagen={findActivity[0].photo[0]} descripcion={findActivity[0].description} duracion={findActivity[0].duration} precio={findActivity[0].price}></CardItinerary>
      <CardItinerary  imagen={findActivity[1].photo[1]} descripcion={findActivity[1].description} duracion={findActivity[1].duration} precio={findActivity[1].price}></CardItinerary>
      </>
      );
  }

