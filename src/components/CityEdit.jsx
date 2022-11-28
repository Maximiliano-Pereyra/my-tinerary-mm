import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../api/url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CityEdit() {
  let [cities, setCities] = useState([]);
  const { idUser} = useSelector((state) => state.user);

  const onInputChange = (e) => {
    setCities({ ...cities, [e.target.placeholder]: e.target.value });
    
  };
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/city/${id}`)
      .then((response) => setCities(response.data.response));
  
  }, []);

  let info = useRef();
  let NewCityName = useRef();
  let NewCityPhoto = useRef();
  let NewCityContinent = useRef();
  let CityPopulation= useRef();

  async function newCity(event) {
    event.preventDefault();
    let newCity = {
      name: NewCityName.current.value,
      continent: NewCityContinent.current.value,
      photo: NewCityPhoto.current.value,
      population: CityPopulation.current.value,
      userId: idUser,
    };
    try {
      let response = await axios.put(`${BASE_URL}/city/${id}`, newCity);
      console.log(response);

      if (response.data.success) {
        toast.success("The city was modified", {
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
                <h1 >Edit City</h1>
                <div >
                  <form
                    onSubmit={newCity}
                    ref={ info}
                  >
                    <div>
                      <input
                        value={cities.name}
                        placeholder={"name"}
                        type="text"
                        name={"nameNewCity"}
                        ref={NewCityName}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div>
                      <input
                        value={cities.photo}
                        placeholder={"photo"}
                        type="text"
                        name={"photoNewCity"}
                        ref={NewCityPhoto}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div>
                      <input
                        value={cities.continent}
                        placeholder={"continent"}
                        type="text"
                        name={"continent"}
                        ref={NewCityContinent}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div>
                      <input
                        value={cities.population}
                        placeholder={"population"}
                        type="text"
                        name={"populate"}
                        ref={CityPopulation}
                        onChange={(e) => onInputChange(e)}
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