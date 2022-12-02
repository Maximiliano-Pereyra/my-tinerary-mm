import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getHotels = createAsyncThunk("getHotels", async () => {
  try {
    const res = await axios.get(`${BASE_URL}/hotel`);
    console.log(res.data);
    return res.data.res;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const deleteHotels = createAsyncThunk("deleteHotels", async ({hotelId},{token} ) => {

  let headers = { headers: { Authorization: ` Bearer ${token} ` } };
  try {
    const res = await axios.delete(`http://localhost:8000/api/hotel/${hotelId}`, headers);

    return {
      success: true,
      response: res.data.message,
    };

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getHotelsFilter = createAsyncThunk(
  "getHotelsFilter",
  async ({ name }) => {
    let url = ` ${BASE_URL}/hotel?name=${name}`;
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
  async ({ order, name }) => {
    let url = ` ${BASE_URL}/hotel?order=${order}&name=${name}`

    try {
      const res = await axios.get(url);

      return {
        hotels: res.data.res,
        order,
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
const getHotelsId = createAsyncThunk(
  "getHotelsId",
  async (userId) => {
    let url = ` ${BASE_URL}/hotel/?userId=${userId}`;
    try { 
      console.log(url);
      const res = await axios.get(url);
      console.log(res.data.res);
      console.log(userId);
      return {
        hotels: res.data.res,
        userId,
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);
const getOneHotelId = createAsyncThunk(
  "getOneHotelId",
  async (_id) => {
    let url = ` ${BASE_URL}/hotel/?_id=${_id}`;
    try { 
      console.log(url);
      const res = await axios.get(url);
      console.log(res.data.res);
      console.log(_id);
      return {
        hotels: res.data.res,
        hotel:res.data.res[0],
        _id,
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
  getHotelsId,
  deleteHotels,
  getOneHotelId
};

export default hotelActions;