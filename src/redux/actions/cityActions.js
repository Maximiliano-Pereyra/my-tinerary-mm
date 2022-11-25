import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getCities = createAsyncThunk("getCities", async () => {
  // get cities es el callback
  try {
    let response = await axios.get(`${BASE_URL}/city`); //aca hago el pedido a la pagina original
    return response.data.response;
  } catch (error) {
    console.log(error);
    return { payload: "error" };
  }
});
const getCitiesFilter = createAsyncThunk(
  "getCitiesFilter",
  async ({ continent, value }) => {
    let url = `${BASE_URL}/city?${continent}&name=${value}`;
    try {
      const res = await axios.get(url);
      console.log(res.data.response);
      return {
        cities: res.data.response,
        continent,
        value,
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);

const cityActions = {
  //es un objeto que nos permite sacar las acciones que tenemos creadas
  getCities,
  getCitiesFilter, 
};
export default cityActions;
