import React from 'react'
import "../App.css";
import CardHotelsUser from "../components/CardHotelsUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import showActions from '../redux/actions/showAction';
import { Link as Linkeador } from 'react-router-dom';
import commentActions from '../redux/actions/commentActions';


export default function MyShows() {
  const dispatch = useDispatch();
  const { getShowId } = showActions;
  const { getComments } = commentActions
  const { shows } = useSelector((state) => state.shows);
  const { comments } = useSelector((state) => state.comments);
  const { idUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getShowId(idUser),);
    dispatch(getComments())
  }, []);
  console.log(comments);
  console.log(shows);
  return (
    <div>
      <h1>My Showes</h1>
      {shows.map(allhotels => <CardHotelsUser key={allhotels._id} photo={allhotels?.photo} name={allhotels?.name} id={allhotels._id} />)}
      <Linkeador to="/shows/prueba/newShow">
        <button className='btNewShow'>  New Show</button>
      </Linkeador> 
    </div>
  )
}
