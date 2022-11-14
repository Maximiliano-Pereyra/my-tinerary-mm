import "../App.css";
import React from "react";
import CardHotels from "./CardHotels";
import dataHotels from "../dataHotels";
import InputHotels from "./InputHotels";
import Select from "./Select";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../api/url";

export default function PginaDeCards(){

    const [hoteles, setHoteles] = useState([])

    useEffect( () => {
        axios.get(` ${BASE_URL}/hotel`)
        .then(response => setHoteles(response.data.res))
    },[] )
    
    console.log(dataHotels)
    return (
    <>
        <Select/>
        <InputHotels/>
       {hoteles.map(allhotels=><CardHotels key={allhotels.id} photo={allhotels?.photo} name={allhotels?.name} id={allhotels.id}/>)}
    </>
    )
}

