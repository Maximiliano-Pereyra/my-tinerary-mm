import React from 'react'
import "../App.css";
import CardHotelsUser  from "../components/CardHotelsUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import showActions from '../redux/actions/showAction';



export default function MyShows() {
    const dispatch = useDispatch();
    const { getShow, getShowId} = showActions;
    const  {shows} = useSelector((state) => state.shows);

    useEffect(() => {
        let uId = '636d8bcade38ce0e1619410f'
        dispatch(getShowId( uId ));

    }, []);


  return (
    <>
    
    {shows.map(allhotels=><CardHotelsUser key={allhotels._id} photo={allhotels?.photo} name={allhotels?.name} id={allhotels._id}/>)}
    
    </>
  )
}
