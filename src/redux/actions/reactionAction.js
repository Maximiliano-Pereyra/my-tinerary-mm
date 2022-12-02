import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const createReaction = createAsyncThunk("createReaction", async ({datos, token}) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${BASE_URL}/reactions`;
  try {
    const res = await axios.post(url, datos, headers);
    return {
      success: true,
      reactions: res.data.response,
      response: res,
    };
  } catch (error) {
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});


const getReactions = createAsyncThunk("getReactions", async (data, token) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${BASE_URL}/reactions?${data.type}=${data.eventId}`;
  try {
    const res = await axios.get(url, headers);
    return {
      success: true,
      reactions: res.data,

    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      reactions: error.response.data.data
    };
  }
});


const getMyReactions = createAsyncThunk("getMyReactions", async ({idUser, token}) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${BASE_URL}/reactions?userId=${idUser}`;
  try {
    const res = await axios.get(url, headers);
    console.log(res);
    return {
      success: true,
      myreactions: res.data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      reactions: error.response.data.data
    };
  }
});
const deleteMyReactions = createAsyncThunk("deleteMyReactions", async ({idReaction, token}) => {
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let url = `${BASE_URL}/reactions/${idReaction}`;
  try {
    const res = await axios.put(url, null, headers);
    console.log(res);
    return {
      success: true,
      myreactions: res.data.response
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      reactions: error.response.data.data
    };
  }
});

const updateReactions = createAsyncThunk("updateReactions", async (datos) => {
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  let url = `${BASE_URL}/reactions?${datos.type}=${datos.eventId}&name=${datos.name}`;
  try {
    const res = await axios.put(url, datos, headers);
    console.log(res);
    return {
      success: true,
      reactions: res.data.data,
      reactioned: res.data.reactioned,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});
const getTineraries = createAsyncThunk("getTineraries", async () => {
  try {
    const res = await axios.get(`${BASE_URL}/itineraries`);
    console.log(res);
    return  res.data.response
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getShows = createAsyncThunk("getShows", async () => {
  try {
    const res = await axios.get(`${BASE_URL}/shows`);
    console.log(res);
    return  res.data.response
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const reactionsActions = {
  createReaction,
  getReactions,
  updateReactions,
  getMyReactions,
  deleteMyReactions,
  getTineraries,
  getShows
};

export default reactionsActions;