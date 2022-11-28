import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getMyTinerary = createAsyncThunk("getMyTinerary", async ({ tineId }) => {
  let url = `${BASE_URL}/itinerary?userId=${tineId}`;
  try {
    const response = await axios.get(url);
    return response.data.response;
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
    let url = `${BASE_URL}/itinerary/destroy/${tineId}`;
    let data = { data: { Authorization: `Bearer ${token}` } };
    try {
      const response = await axios.delete(url, data);
      return response.data;
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
