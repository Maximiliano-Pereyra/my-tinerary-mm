import React from "react";
import { useEffect, useState  } from "react"
import MyCardTinerary from "../components/MyCardTinerary"
import {BASE_URL} from '../api/url'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import myTineraryActions from "../redux/actions/myTineraryActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function MyTineraries() {


    const dispatch = useDispatch();
    const { deleteTinerary, getMyTinerary} = myTineraryActions;
    const { idUser} = useSelector((state) => state.user);
    const { tineId, itineraries } = useSelector((state) => state.mytineraries);

  useEffect(() => {

let userId = idUser
dispatch(getMyTinerary({tineId: userId}))
 
  }, []);

  return (
    <div ><ToastContainer/>
    <h1>My Tineraries</h1>
    <div>
      {itineraries?.map((item) => {
        function functionDelete() {
          if (dispatch(deleteTinerary({ tineId: item._id}))) {
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
          price={item.price} duration={item.duration}
            onClick={functionDelete}
            id={item._id}
          ></MyCardTinerary>
        );
      })}
    </div>
  </div>
  )
}