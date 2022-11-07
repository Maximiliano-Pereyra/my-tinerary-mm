import "../App.css";
import React from "react";

import CardCity from "../components/CardCity";

import dataCities from '../dataCities';

function Cities(){
    console.log(dataCities)
    return (

     <>
       {dataCities.map(allcities=><CardCity key={allcities.id} photo={allcities?.photo} name={allcities?.name} continent={allcities?.continent}/>)}
       </>

    )    
}
export default Cities;