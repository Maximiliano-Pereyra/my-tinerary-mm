import React from "react";
import ChecksInputs from "./ChecksInputs";
import dataCities from '../dataCities';

function InputSearch(){
    let allcities = dataCities.map((continent)=>continent.continent)
    let datacit = [...new Set(allcities)]
    datacit = Array.from(datacit) 
    console.log(datacit)
    return (
    <div className="cuerpo-general">
        {datacit.map((continents,index)=><ChecksInputs key={index} continent={continents}/>)}
       </div>
    )
} 
export default InputSearch;