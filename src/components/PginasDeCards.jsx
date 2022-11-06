import "../App.css";
import React from "react";
import CardHotels from "./CardHotels";
import dataHotels from "../dataHotels";

export default function PginaDeCards(){
    console.log(dataHotels)
    return (
    <>
       {dataHotels.map(allhotels=><CardHotels key={allhotels.id} photo={allhotels?.photo} name={allhotels?.name} description={allhotels?.description}/>)}
    </>
    )
}

