import React from "react";
import MyCardCity from "../components/MyCardCity";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import myCityActions from "../redux/actions/myCityActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function City(){
    const dispatch = useDispatch();
    const {getMyCity, deleteMyCity} = myCityActions;
    const {city} = useSelector((state)=>state.mycity);
    const {id, cityid} = useSelector((state)=>state.mycity);

useEffect(()=>{
    let userId = "636d8bcade38ce0e1619410f"
    dispatch(getMyCity({id: userId}))
},[]);
return(
    <div>
        <ToastContainer></ToastContainer>
        <div>
            {city.cities?.map((item)=>{
                function functionDelete(){
                    if(dispatch(deleteMyCity({cityid: item._id}))){
                        toast.success("The city was deleted",{
                            position: toast.POSITION.TOP_CENTER,
                        });
                        setTimeout(function(){
                            window.location.replace("");
                        },1500);
                    }
                } return(
                    <MyCardCity photo={item.photo} name={item.name} id={item._id} click={functionDelete} key={item._id}></MyCardCity>
                )
            })}
        </div>
    </div>
)}