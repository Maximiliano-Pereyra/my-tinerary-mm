import { createReducer } from "@reduxjs/toolkit";
import myCityActions from "../actions/myCityActions";

const { getMyCity, deleteMyCity } = myCityActions;

const initialState = {
  city: [],
  id: "",
  cityid: "",
};

const myCityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyCity.fulfilled, (state, action) => {
      return {
        ...state,
        city: action.payload,
      };
    })
    .addCase(deleteMyCity.fulfilled, (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    });
});
export default myCityReducer;
