import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getMyTinerary = createAsyncThunk("getMyTinerary", async ({ tineId }) => {
  let url = `${BASE_URL}/itineraries?userId=${tineId}`;
  try {
    const response = await axios.get(url);
    return {
      itineraries: response.data.response
    }
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const deleteTinerary = createAsyncThunk(
  "deleteTinerary",
  async ({ tineId, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = `${BASE_URL}/itineraries/destroy/${tineId}`;
    try {
      const response = await axios.delete(url,headers);
      console.log(response.data.message);
      console.log(response.data);
      if (response.data._id) {
        return {
         itineraries: response.data,
         data: response.data.response
        };
      }
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);

const myTineraryActions = {
  getMyTinerary,
  deleteTinerary,
};

export default myTineraryActions;