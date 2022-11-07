import "../App.css";
import React from "react";
import { useState } from 'react'
import CardCity from "../components/CardCity";
import dataCities from '../dataCities';
import { useRef } from 'react'

function Cities() {
    console.log(dataCities)
    let [checked, setChecked] = useState([])
    let [searched, setSearched] = useState([])
    let checkboxH = (event) => {
        let array = [...checked]
        if (event.target.checked) {
            array.push(event.target.value)
        } else {
            array = array.filter(element => element !== event.target.value)
        }
        setChecked(array)
        console.log(array)
    }

    let searchImput = (event) => {
        setSearched(event.target.value)
    }

    const dataFiltered = useRef(null)
    dataFiltered.current = (checked + " " + searched)

    console.log(dataFiltered)
    console.log(checked)
    console.log(searched)
    console.log(setSearched)
    console.log(setChecked)
    return (
        <>
        <div className='input-search'>
            <input
                type="text"
                placeholder="Search"
                onChange={searchImput}
            />
                {
                    Array.from(new Set(dataCities.map(city => city.continent))).map(element => {
                        return (
                            <label key={element}><input onClick={checkboxH} type="checkbox" id={element} value={element} /> {element}</label>
                        )
                    })
                }
            </div>
            {dataCities.map(allcities => <CardCity key={allcities.id} photo={allcities?.photo} name={allcities?.name} continent={allcities?.continent} />)}
        </>

    )
}
export default Cities;