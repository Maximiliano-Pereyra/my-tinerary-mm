import { createReducer } from "@reduxjs/toolkit";
import hotelActions from "../actions/hotelActions";

const { getHotels, getHotelsFilter, getHotelsSelect, getHotelsId, deleteHotels } = hotelActions;

const initialState = {
  hotels: [],
  name: "",
  order: "",
 
};

const hotelReducers = createReducer(initialState, (builder) => {
    builder
      .addCase(getHotels.fulfilled, (state, action) => {
    
        return {
          ...state,
          hotels: action.payload,

        };
      })
      .addCase(deleteHotels.fulfilled, (state, action) => {
    
        return {
          ...state,
          hotels: action.payload,

        };
      })
      .addCase(getHotelsFilter.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase(getHotelsSelect.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase(getHotelsId.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
    })

      export default hotelReducers;