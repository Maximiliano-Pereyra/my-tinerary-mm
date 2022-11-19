import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityActions";

const { getCitiesFilter, getCities } = cityActions;

const initialState = {
  value: "",
  cities: [],
  categories: [],
  continent: [],
};

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCities.fulfilled, (state, action) => {
      let categoriesContinent = action.payload.map((event) => event.continent);
      let categoriesContinentFilter = [...new Set(categoriesContinent)];
      return {
        ...state,
        cities: action.payload,
        categories: categoriesContinentFilter,
      };
    })
    .addCase(getCitiesFilter.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
});

export default cityReducer;
