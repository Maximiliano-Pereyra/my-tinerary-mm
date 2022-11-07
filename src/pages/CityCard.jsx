import "../App.css";
import React from "react";
import CardCity from "./CardCity";
import dataCities from '../dataCities';

function CityCard(){
    console.log(dataCities)
    return (
     <>
       {dataCities.map(allcities=><CardCity key={allcities.id} photo={allcities?.photo} name={allcities?.name} continent={allcities?.continent}/>)}
       </>
    )    
}
export default CityCard;