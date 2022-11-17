import "../App.css";
import React from "react";
import CardHotels from "./CardHotels";
import InputHotels from "./InputHotels";
import Select from "./Select";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../api/url";

export default function PginaDeCards(){

    const [hotels, setHotels] = useState([ ])
    let select = '/'
    const [search, setSearch] = useState([ ])

    useEffect( () => {
        axios.get(` ${BASE_URL}/hotel`)
        .then(response => setHotels(response.data.res))
    },[ ] )

    function filterF (value){

        if(value.target.type === "select-one"){
            select = value.target.value
        }

        if(value.target.type === "search"){
            setSearch(value.target.value)
        }
        axios.get(`${BASE_URL}/hotel/?name=${search}&${select}`)
        .then(res => setHotels(res.data.res))

    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/hotel/?name=${search}&${select}`)
        .then(res => setHotels(res.data.res))
    },[search])


    return (
    <>
        <Select filter={filterF}/>
        <InputHotels filter={filterF}/>
       {hotels.map(allhotels=><CardHotels key={allhotels._id} photo={allhotels?.photo} name={allhotels?.name} id={allhotels._id}/>)}
    </>
    )
}

