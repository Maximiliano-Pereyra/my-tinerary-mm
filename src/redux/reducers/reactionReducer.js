import { createReducer } from "@reduxjs/toolkit";
import reactionAction from "../actions/reactionAction";

const { createReaction, getReactions, updateReactions, getMyReactions, deleteMyReactions, getShows, getTineraries} = reactionAction;

const initialState = {
  myreactions: [],
  shows:[],
  itineraries: []
};

const reactionReducer = createReducer(initialState, (builder) => {
  builder.addCase(getMyReactions.fulfilled, (state, action) => {
    return {
          ...state,
          myreactions: action.payload.myreactions,
          
        };
  })
  .addCase(deleteMyReactions.fulfilled, (state, action) => {
   
    let reaction = state.myreactions.filter(
      (myreactions) => myreactions._id !== action.payload.myreactions._id
    );
    console.log(reaction);
    return { ...state, myreactions: reaction };
  })
  .addCase(getShows.fulfilled, (state, action) => {
    return {
      ...state,
      shows: action.payload,
    };
  })
  .addCase(getTineraries.fulfilled, (state, action) => {
    return {
      ...state,
      itineraries: action.payload,
    };
  })
  
});

export default reactionReducer;