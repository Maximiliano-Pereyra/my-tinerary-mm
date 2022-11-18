import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityActions";

const { getCities } = cityActions;

const initialState = {
  cities: [],
};

const cityReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCities, (state, action) => { //add case es el escuchador por asi decirle del evento
    console.log(state);
    console.log(action.payload);
    console.log(action.type);
  });
});

export default cityReducer;
