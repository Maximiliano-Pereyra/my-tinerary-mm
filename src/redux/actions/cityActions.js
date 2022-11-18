import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const getCities = createAction("getCities", (data) => {
  console.log(data);
  console.log("holis");
  return {
    payload: [
      data,
    ],
  };
}); // get cities es el callback

const cityActions = {
  //es un objeto que nos permite sacar las acciones que tenemos creadas
  getCities, //nombre de la ccion
};
export default cityActions;
