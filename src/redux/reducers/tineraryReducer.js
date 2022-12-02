const { createReducer } = require("@reduxjs/toolkit");
const { default: myTineraryActions } = require("../actions/myTineraryActions");

const { deleteTinerary, getMyTinerary } = myTineraryActions;

const initialState = {
  itineraries: [],
  tineId: "",
};

const tineraryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyTinerary.fulfilled, (state, action) => {
      console.log(action.payload);
      return {
        itineraries: action.payload,
      };
    })
    .addCase(deleteTinerary.fulfilled, (state, action) => {
      console.log(action.payload._id);
      return {
        tineId: action.payload,
      };
    });
});

export default tineraryReducer;