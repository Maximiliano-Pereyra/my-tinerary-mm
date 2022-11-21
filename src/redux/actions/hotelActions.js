import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getHotels = createAsyncThunk("getHotels", async () => {
    try {
      const res = await axios.get(`${BASE_URL}/hotel`);
      
      return res.data.res;
      
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });
  const getHotelsFilter = createAsyncThunk(
    "getHotelsFilter",
    async ({name }) => {
      let url =` ${BASE_URL}/hotel?name=${name}`;
      try {
        const res = await axios.get(url);
        console.log(res.data.res);
        console.log(name);
        return {
          hotels: res.data.res,
          name,
        };
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    }
  );
  const getHotelsSelect = createAsyncThunk(
    "getHotelsSelect",
    async ({order, name} ) => {
      let url =` ${BASE_URL}/hotel?order=${order}&name=${name}`

      try {
        const res = await axios.get(url);
        console.log(res.data.res);
        console.log(name);
        console.log(order);
        return {
          hotels: res.data.res,
          name,
          order,
        };
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    }
  );



  const hotelActions = {
    getHotels,
    getHotelsFilter,
    getHotelsSelect,

  };

  export default hotelActions;