import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getComments = createAsyncThunk("getComments", async () => {
  try {
    const res = await axios.get(`${BASE_URL}/comments`);
    console.log(res.data);
    return res.data.response;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getCommentsShowId = createAsyncThunk("getCommentsShowId", async (showId) => {
  try {
    const res = await axios.get(`${BASE_URL}/comments?showId=${showId}`);
    console.log(res.data);
    return res.data.response;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getCommentsUserId = createAsyncThunk("getCommentsUserId", async (userId) => {
  try {
    const res = await axios.get(`${BASE_URL}/comments?userId=${userId}`);
    console.log(res.data);
    return res.data.response;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const commentsActions = {
    getComments,
    getCommentsShowId
  };
  
  export default commentsActions;