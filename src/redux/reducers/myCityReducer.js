import { createReducer } from "@reduxjs/toolkit";
import myCityActions from "../actions/myCityActions";

const { getMyCity, deleteMyCity } = myCityActions;

const initialState = {
  city: [],
};

const myCityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyCity.fulfilled, (state, action) => {
      return {
        ...state,
        city: action.payload.city,
      };
    })
    .addCase(deleteMyCity.fulfilled, (state, action) => {
      console.log(action.payload);
      let data = state.cities.filter((e) => e._id !== action.payload.data._id);
      return {
        ...state,
        cities: data,
      };
    });
});
export default myCityReducer;
