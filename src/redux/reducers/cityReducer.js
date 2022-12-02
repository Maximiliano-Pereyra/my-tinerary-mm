import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityActions";

const { getCitiesFilter, getCities } = cityActions;

const initialState = {
  value: "",
  cities: [],
  categories: [],
  continent: [],
};

const cityReducer = createReducer(initialState, (builder) => { //builder de las actions que va a recibir
  builder
    .addCase(getCities.fulfilled, (state, action) => {//agrego un caso 
      let categoriesContinent = action.payload.map((event) => event.continent);
      let categoriesContinentFilter = [...new Set(categoriesContinent)];
      return {
        ...state,//para q agregue al estado y no lo sobreescriba
        cities: action.payload,
        categories: categoriesContinentFilter,
      };
    })
    .addCase(getCitiesFilter.fulfilled, (state, action) => {//fulfilled es un estado
      return {
        ...state,
        ...action.payload,
      };
    });
});

export default cityReducer;
