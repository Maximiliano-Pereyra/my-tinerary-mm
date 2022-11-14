import React from "react";
import { useState, useEffect } from 'react'
import CardCity from "../components/CardCity";
import { BASE_URL } from '../api/url'
import axios from 'axios'

function Cities() {
    let [checked, setChecked] = useState([])
    let [searched, setSearched] = useState([])
    let [cities, setCities] = useState([])
    let [filter, setFilter] = useState([])


    let allcities = cities.map((city)=>city.continent)
    let thecontinent = [...new Set(allcities)]
    thecontinent = Array.from(thecontinent)

    useEffect( () => {
        axios.get(`${BASE_URL}/city`)
        .then(response => setCities(response.data.response))
        .catch (err => console.log(err.message))
        }, [])
    
    
      useEffect( () => {
        let querycheck = checked.slice()
        if (checked.length > 0){
          querycheck = checked.join('&continent=')
        }
        axios.get(`${BASE_URL}/city?name=${searched}&continent=${querycheck}`)
        .then(response => setFilter(response.data.response))
        .catch (err => console.log(err.message))
        }, [searched, checked])
   
    let checkboxH = (event) => {
        let array = [...checked]
        if (event.target.checked) {
            array.push(event.target.value)
        } else {
            array = array.filter(element => element !== event.target.value)
        }
        setChecked(array)
    }

    let searchInput = (event) => {
        setSearched(event.target.value.trim())
    }


    return (
        <>
        <div className='input-search'>
            <input
                type="text"
                placeholder="Search"
                onChange={searchInput}
            />
                {thecontinent.map(element => {
          return(
            <label key={element}><input onClick={checkboxH} type="checkbox" id={element} value={element} /> {element}</label>
          )
        })}
            </div>
            {
        (filter.length > 0)
        ? filter.map(thecity=><CardCity key={thecity?._id} id={thecity?._id} name={thecity?.name} continent={thecity?.continent} photo={thecity?.photo} population={thecity?.population}/>)
        : <CardCity name="Not found" continent="Not found"  population="0"/>
      }
        </>

    )
}
export default Cities;