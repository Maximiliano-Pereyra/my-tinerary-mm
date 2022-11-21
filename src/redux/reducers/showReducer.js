import { createReducer } from "@reduxjs/toolkit";
import showActions from "../actions/showAction";

const { getShow } = showActions

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
});


export default showReducer;