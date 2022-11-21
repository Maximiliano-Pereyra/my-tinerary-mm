import React from "react";
import { useState, useEffect } from 'react'
import CardCity from "../components/CardCity";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import cityActions from "../redux/actions/cityActions";

function Cities() {
    
    const dispatch = useDispatch();
    const { getCities, getCitiesFilter } = cityActions;
    const { cities, categories } = useSelector((state) => state.cities);
    const { continent, value } = useSelector((store) => store.cities);

   let [checkb, setChecked] = useState([])
   let searchInput = useRef()
   
   useEffect(() => {
    if (cities.length === 0) {
      dispatch(getCities());
    }
  }, []);
  console.log(continent);
  console.log(value);
   
  let filter = (event) => {
    console.log(event);
    let checks = filterChecks(event);
    console.log(checks);
    let text = searchInput.current.value;
    let urlChecks = checks.map((check) => `continent=${check}`).join("&");
    dispatch(getCitiesFilter({ continent: urlChecks, value: text }));
  };

  function filterChecks(event) {
    let arrayCheck = [];
    if (event.target.checked) {
      arrayCheck = [...checkb, event.target.value];
    } else {
      arrayCheck = checkb.filter((e) => e !== event.target.value);
    }
    setChecked(arrayCheck);
    return arrayCheck;
  }


    return (
        <>
        <div className='input-search'>
            <input
                type="text"
                placeholder="Search"
                ref={searchInput}
                onKeyUp={filter}
            />
            <div>
                {categories?.map(element => {
          return(
            <label key={element}><input onChange={filter} type="checkbox" id={element} value={element} /> {element}</label>
          )
        })}</div>
            </div>
        
        {cities?.map((theCity) => {
          return (
            <CardCity
              id={theCity._id}
              key={theCity._id}
              name={theCity.name}
              photo={theCity.photo}
            ></CardCity>
          );
        })}
      
        </>

    )}

export default Cities;