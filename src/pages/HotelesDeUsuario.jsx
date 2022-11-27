import "../App.css";
import React from "react";
import CardHotelsUser  from "../components/CardHotelsUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelActions from "../redux/actions/hotelActions";

export default function HotelesDeUsuario() {
    const dispatch = useDispatch();
    const { getHotelsId,getHotels } = hotelActions;
    const { hotels } = useSelector((state) => state.hotels);
    const { idUser } = useSelector((state) => state.user);
    

    useEffect(() => {
        
        dispatch(getHotelsId( idUser ));

    }, []);

    return (
    <>
     {hotels.map(allhotels=><CardHotelsUser key={allhotels._id} photo={allhotels?.photo} name={allhotels?.name} id={allhotels._id}/>)}
    </>
  )
}
