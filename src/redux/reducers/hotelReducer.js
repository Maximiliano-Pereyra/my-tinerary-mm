import { createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelActions";

const { getHotels } = hotelsActions

const inicialState = {
    hotels: [ ]
}

const hotelReducer = createReducer (inicialState,
    (builder) =>{
            builder.addCase(getHotels, (state, action)=>{
                console.log(state);
                console.log(action.payload);
                console.log(action.type);
            })

})

export default hotelReducer;