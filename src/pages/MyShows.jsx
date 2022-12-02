import React from 'react'
import "../App.css";
import CardHotelsUser  from "../components/CardHotelsUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import showActions from '../redux/actions/showAction';
import { Link as Linkeador } from 'react-router-dom';


export default function MyShows() {
    const dispatch = useDispatch();
    const { getShow, getShowId} = showActions;
    const  {shows} = useSelector((state) => state.shows);
    const { idUser} = useSelector((state) => state.user);

    useEffect(() => {
        
        dispatch(getShowId(idUser ));

    }, []);

    console.log(shows);

  return (
    <div>
    <h1>My Showes</h1>
    {shows.map(allhotels=><CardHotelsUser key={allhotels._id} photo={allhotels?.photo} name={allhotels?.name} id={allhotels._id}/>)}
    <Linkeador to = "/shows/prueba/newShow">
    <button className='btNewShow'>  New Show</button>
    </Linkeador>
    </div>
  )
}
