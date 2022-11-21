import React from 'react'
import "../App.css";
import CardHotelsUser  from "../components/CardHotelsUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import showActions from '../redux/actions/showAction';



export default function MyShows() {
    const dispatch = useDispatch();
    const { getShow} = showActions;
    const  show  = useSelector((state) => state.show);

    useEffect(() => {
        
        dispatch(getShow(  ));

    }, []);


  return (
    <>
    
    {show.map(allhotels=><CardHotelsUser key={allhotels._id} photo={allhotels?.photo} name={allhotels?.name} id={allhotels._id}/>)}
    
    </>
  )
}
