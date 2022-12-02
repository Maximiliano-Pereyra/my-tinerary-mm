import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getMyCity = createAsyncThunk("getMyCity", async ({ id }) => {
  let url = `${BASE_URL}/city?userId=${id}`;
  try {
    const response = await axios.get(url);
    return {
      city: response.data.response,
    };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const deleteMyCity = createAsyncThunk("deleteMyCity", async ({ cityid, token }) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${BASE_URL}/city/destroy/${cityid}`;
  try {
    const response = await axios.delete(url, headers);
    return {
      success: true,
      response: response.data.message,
    };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const myCityActions = {
  getMyCity,
  deleteMyCity,
};
export default myCityActions;