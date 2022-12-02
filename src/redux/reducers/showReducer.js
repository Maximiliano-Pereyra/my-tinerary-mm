import { createReducer } from "@reduxjs/toolkit";
import showActions from "../actions/showAction";

const { getShow, getShowId, getOneShowId, getShowHotelId} = showActions

const initialState = {

    shows: [ ],

};

const showReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(getShow.fulfilled, (state, action) => {
    console.log(action);
        return {
          ...state,
          shows: action.payload,

        };
      })
      .addCase(getShowId.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase(getOneShowId.fulfilled, (state, action) => {
        return {
          ...state,
          shows: action.payload,
        };
      })
      .addCase(getShowHotelId.fulfilled, (state, action) => {
        return {
          ...state,
          shows: action.payload,
        };
      })
});


export default showReducer;