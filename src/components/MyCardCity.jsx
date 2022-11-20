import React from "react"
import { Link as Linkeador } from "react-router-dom"

function MyCardCity(props){
    let {photo} = props
    let {name} = props
    let {id} = props
    let {click} = props
   return (
    <div className="detallesDeHotel2">
        <div className="tituloYimagen2">
            <h1>{name}</h1>
            <img src={photo}/>
        </div>
        <div>
     <Linkeador to={`/city/${id}`}><button>Details</button></Linkeador>
     <div>
        <button>Edit</button>
     </div>
     <div>
        <button onClick={click}>Delete</button>
     </div>
        </div>
    </div>
);
}
export default MyCardCity;