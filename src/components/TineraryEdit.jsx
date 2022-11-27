 import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../api/url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


export default function TineraryEdit() {

  const { idUser, token } = useSelector((state) => state.user);
  let [tinerary, setTineraries] = useState([]);

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/itinerary/${id}`)
      .then((response) => setTineraries(response.data.response));
  
  }, []);

  let info = useRef();
  let NewTineraryName = useRef();
  let NewTineraryPhoto = useRef();
  let NewTineraryPrice = useRef();
  let NewTineraryDuration= useRef();
  let NewTineraryDescription=useRef();

  async function newTinerary(event) {
    event.preventDefault();
    let newTinerary= {
      name: NewTineraryName.current.value,
      price: NewTineraryPrice .current.value,
      photo: NewTineraryPhoto .current.value,
      duration: NewTineraryDuration.current.value,
      description: NewTineraryDescription.current.value,
      userId: idUser,
    };
    let data= { data: { Authorization: `Bearer ${token}` } };
    try {
      let response = await axios.put(`${BASE_URL}/itinerary/${id}`, newTinerary, data);
      console.log(response);

      if (response.data.success) {
        toast.success("The tinerary was modified", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(response.data.message.join("&"), {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div >
        <div >
          <div>
            <div>
              <div >
                <h1 >Edit Tinerary</h1>
                <div >
                  <form
                    onSubmit={newTinerary}
                    ref={ info}
                  >
                    <div>
                      <input
                        value={tinerary.name}
                        placeholder={"name"}
                        type="text"
                        name={"NewTineraryName"}
                        ref={NewTineraryName}
                    
                      />
                    </div>
                    <div>
                      <input
                        value={tinerary.photo}
                        placeholder={"photo"}
                        type="text"
                        name={"NewTineraryPhoto"}
                        ref={NewTineraryPhoto}
                      
                      />
                    </div>
                    <div>
                      <input
                        value={tinerary.price}
                        placeholder={"price"}
                        type="text"
                        name={"NewTineraryPrice"}
                        ref={NewTineraryPrice}
                      
                      />
                    </div>
                    <div>
                      <input
                        value={tinerary.duration}
                        placeholder={"duration"}
                        type="text"
                        name={"NewTineraryDuration"}
                        ref={NewTineraryDuration}
                        
                      />
                    </div>
                    <div>
                      <input
                        value={tinerary.description}
                        placeholder={"description"}
                        type="text"
                        name={"NewTineraryDescription"}
                        ref={NewTineraryDescription}
                       
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        required
                        value="Edit"
                      />
                    </div>
                    <ToastContainer />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}  