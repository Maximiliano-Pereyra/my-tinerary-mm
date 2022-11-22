import React from "react";
import { useEffect } from "react";
import MyCardCity from "../components/MyCardCity";
import { useDispatch, useSelector } from "react-redux";
import myCityActions from "../redux/actions/myCityActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cities() {
  const dispatch = useDispatch();
  const { getMyCity, deleteMyCity } = myCityActions;
  const { city } = useSelector((state) => state.mycity);
  const { id, cityid } = useSelector((state) => state.mycity);


  useEffect(() => {
    let userId = "636d8bcade38ce0e1619410f";
    dispatch(getMyCity({ id: userId }));

  }, []);

  return (
    <div className="containermycities">
      <h1>My Cities</h1>
      <ToastContainer/>
      <div>
        {city.city?.map((item) => {
          function functionDelete() {
            if (dispatch(deleteMyCity({ cityid: item._id }))) {
              toast.success("The city was deleted", {
                position: toast.POSITION.TOP_CENTER,
              });
              setTimeout(function () {
                window.location.replace("");
              }, 1500);
            }
          }
          return (
            <MyCardCity
              id={item._id}
              key={item._id}
              img={item.photo}
              name={item.name}
              onClick={functionDelete}
            ></MyCardCity>
          );
        })}
      </div>
    </div>
  );
}