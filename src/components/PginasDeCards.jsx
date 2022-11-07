import "../App.css";
import React from "react";
import CardHotels from "./CardHotels";
import dataHotels from "../dataHotels";
import InputHotels from "./InputHotels";
import Select from "./Select";

export default function PginaDeCards(){
    console.log(dataHotels)
    return (
    <>
        <Select/>
        <InputHotels/>
       {dataHotels.map(allhotels=><CardHotels key={allhotels.id} photo={allhotels?.photo} name={allhotels?.name} description={allhotels?.description}/>)}
    </>
    )
}

