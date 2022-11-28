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
      return { ...state, itineraries: action.payload };
    })
    .addCase(deleteTinerary.fulfilled, (state, action) => {
      let tinerary = state.itineraries.filter(
        (tinerary) => tinerary._id !== action.payload.data._id
      );
      return {
        ...state,
        tinerary: tinerary,
      };
    });
});

export default tineraryReducer;
