import React from "react";

import { Link as Linkeador } from "react-router-dom";


export default function MyCardTinerary(props) {
  let { photo } = props;
  let { name } = props;
  let {price} = props
  let {duration} = props
  let {description} = props
  let {onClick} = props 
  let {id} = props


  return (
    <div>
      <div className="containermycity">
        <div>
            <h2 className="mycitname">{name}</h2>
          </div>
        <div>
          <img className="mycitimg" src={photo} alt={name}></img>
        </div>
        <div>
            <h4>Price: USD {price}</h4>
            <h4>Duration: {duration} hs</h4>
            <h4>{description}</h4>
        </div>
        
          <div>
          <div className="mycitybtns">           
            <div>
              <button className="mycitybtn" onClick={onClick}>Delete</button>
            </div>
            <Linkeador to={`/tineraryedit/${id}`}>
              <button className="mycitybtn">Edit</button>
              </Linkeador>
          </div>
        </div>
      </div>
    </div>
  );
}