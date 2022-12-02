import { createReducer } from "@reduxjs/toolkit";
import commentActions from "../actions/commentActions";

const { getComments, getCommentsShowId } = commentActions;

const initialState = {
    comments: [],
};

const commentReducers = createReducer(initialState, (builder) => {
    builder
    .addCase(getComments.fulfilled, (state, action) => {
        return {
          ...state,
          comments:action.payload,
        };
      })
      .addCase(getCommentsShowId.fulfilled, (state, action) => {
        return {
          ...state,
          comments:action.payload,
        };
      })
})


export default commentReducers;
