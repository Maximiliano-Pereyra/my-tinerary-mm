import React from "react";
import { Link as Linkeador} from "react-router-dom";

export default function MyCardCity(props) {
  let { img } = props;
  let { name } = props;
  let { id } = props;
  let {onClick} = props 

  return (
    <div>
      <div className="containermycity">
        <div>
          <img className="mycitimg" src={img} alt={name}></img>
        </div>

        <div>
          <div>
            <h2 className="mycitname">{name}</h2>
          </div>
          <div className="mycitybtns">           
            <div>
              <button className="mycitybtn" onClick={onClick}>Delete</button>
            </div>
            <Linkeador to={`/cityedit/${id}`}>
              <button className="mycitybtn">Edit</button>
            </Linkeador>
          </div>
        </div>
      </div>
    </div>
  );
}