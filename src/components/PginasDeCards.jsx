import "../App.css";
import React from "react";
import CardHotels from "./CardHotels";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelActions from "../redux/actions/hotelActions";
import { useRef } from "react";

export default function PginaDeCards(){
    const dispatch = useDispatch();
    const { getHotels, getHotelsFilter, getHotelsSelect } = hotelActions;
    const { order, name, hotels } = useSelector((state) => state.hotels);
   
    const search = useRef();
    const select = useRef();

    useEffect(() => {
    
          dispatch(getHotels());
        
        // eslint-disable-next-line
      }, []);
    
      
    
      let filter = () => {
        let text = search.current.value;
        let selectFil = select.current.value;
    
        if (selectFil !== "asc" && selectFil !== "desc") {
          dispatch(getHotelsFilter({ name: text }));
        } else {
          dispatch(getHotelsSelect({ order: selectFil, name: text }));
        }
      };

    return (
    <>
        <select className='selectH' type='select' ref={select} onChange={filter}>
          <option >Capacity...</option>
            <option value="asc">Low Capacity</option>
            <option value="desc">High Capacity</option>
      </select>

        <form className='input-search2'>
      <input
        placeholder='Hotel...'
        type='search'
        ref={search}
        onChange={filter}>
      </input>
    </form>

       {hotels.map(allhotels=><CardHotels key={allhotels._id} photo={allhotels?.photo} name={allhotels?.name} id={allhotels._id}/>)}
    </>
    )
}

