import "../App.css";
import React from "react";
import CardHotelsUser  from "../components/CardHotelsUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelActions from "../redux/actions/hotelActions";
import { useRef } from "react";

export default function HotelesDeUsuario() {
    const dispatch = useDispatch();
    const { getHotelsId,getHotels } = hotelActions;
    const { hotels } = useSelector((state) => state.hotels);

    useEffect(() => {
        let idU = '636d8bcade38ce0e1619410e'
        dispatch(getHotelsId( idU ));

    }, []);

    return (
    <>
     {hotels.map(allhotels=><CardHotelsUser key={allhotels._id} photo={allhotels?.photo} name={allhotels?.name} id={allhotels._id}/>)}
    </>
  )
}
