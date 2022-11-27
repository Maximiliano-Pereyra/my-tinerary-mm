import React from "react";
import { useEffect, useState  } from "react"
import MyCardTinerary from "../components/MyCardTinerary"
import {BASE_URL} from '../api/url'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import myTineraryActions from "../redux/actions/myTineraryActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link as Linkeador } from "react-router-dom";



export default function MyTineraries() {


    const dispatch = useDispatch();
    const { deleteTinerary, getMyTinerary} = myTineraryActions;
    const { idUser, token } = useSelector((state) => state.user);
    const { tineId, itineraries } = useSelector((state) => state.mytineraries);

  useEffect(() => {
dispatch(getMyTinerary({tineId: idUser}))
 
  }, []);

  return (
    <div ><ToastContainer/>
        <div> 
              <h1>My Tineraries</h1>
         <Linkeador to={`/useritinerary`}><button className="mycitybtn">Create</button></Linkeador>  
        </div>
    <div>
      {itineraries?.map((item) => {
        function functionDelete() {
          if (dispatch(deleteTinerary({ tineId: item._id, token}))) {
            toast.success("The Tinerary was deleted", {
              position: toast.POSITION.TOP_CENTER,
            });
          }

        }
        return (
          <MyCardTinerary
          key={item._id}
          name={item.name}
          img={item.photo[1]}
          description={item.description}
          price={item.price} 
          duration={item.duration}
            onClick={functionDelete}
            id={item._id}
          ></MyCardTinerary>
        );
      })}
    </div>
  </div>
  )
}