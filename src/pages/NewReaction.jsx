import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../api/url";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionActions";


export default function NewReaction() {
  const {  token } = useSelector((state) => state.user);

   
    let dispatch = useDispatch()
    let {createReaction} = reactionsActions
    let information = useRef();
    let name = useRef();
    let icon = useRef();
    let iconBack = useRef();
    let itineraryId = useRef();
    let [itinerariesSelect, setItinerariesSelect] = useState([]);


    useEffect(() => {
        axios
          .get(`${BASE_URL}api/itineraries`)
          .then((res) => setItinerariesSelect(res.data.response));
        // eslint-disable-next-line
      }, []);


      async function NewReaction(event) {
        event.preventDefault();
        console.log(itineraryId.current.value);
        let datos = {
          name: name.current.value,
          icon: icon.current.value ,
          iconBack: iconBack.current.value,
          itineraryId: itineraryId.current.value,
          userId: [],
        };
        Swal.fire({
          icon: "question",
          title: "Do you want to create the reaction?",
          showConfirmButton: true,
          iconColor: "#01344f",
          confirmButtonColor: "#01344f",
          confirmButtonText: "Yes",
          showCancelButton: true,
        }).then(async result => {
          try {
          if(result.isConfirmed){
             let res = await dispatch(createReaction({datos, token}))
             if(res.payload.success){
              Swal.fire({
                icon: "success",
                confirmButtonColor: "#01344f",
                iconColor: "#01344f",
                title: res.payload.response.data.message,
                showConfirmButton: true,
              });
             }else{
              Swal.fire({
                icon: "error",
                confirmButtonColor: "#01344f",
                iconColor: "#01344f",
                title: res.payload.response,
                showConfirmButton: true,
              });
             }
            }
          } catch (error) {
            console.log(error);
          }
        })
      }
 
  return (
    <div>
    <div >
      <div>
        <div >
          <div >
            <h1 >New Reaction</h1>
            <div >
              <form
                onSubmit={NewReaction}
                ref={information}
              >
                <div>
                  <input
                    placeholder="Name of Tinerary"
                    type="text"
                    name="name"
                    ref={name}
                  />
                </div>
                <div>
                  <input
                    placeholder="URL of the icon"
                    type="text"
                    name="icon"
                    ref={icon}
                  />
                </div>
                <div>
                  <input
                    placeholder="URL of the iconBack"
                    type="text"
                    name="photo2"
                    ref={iconBack}
                  />
                </div>
                <div>
                  <select
                    ref={itineraryId}
                    id="itineraryId"
                  >
                    <option>Select the itinerary</option>
                    {itinerariesSelect.map((itinerary) => (
                      <option key={itinerary._id} value={itinerary._id}>
                        {itinerary.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="submit"
                    className="btn"
                    required
                    value="CREATE A NEW REACTION"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}