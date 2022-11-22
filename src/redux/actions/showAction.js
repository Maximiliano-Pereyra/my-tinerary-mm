import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getShow = createAsyncThunk("getShow", async () => {
    try {
      const res = await axios.get(`${BASE_URL}/show`);
  
      return res.data.res;
  
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });
  const getShowId = createAsyncThunk(
    "getShowId",
    async (userId) => {
      let url = ` ${BASE_URL}/show/?userId=${userId}`;
      try { 
        console.log(url);
        const res = await axios.get(url);
        console.log(res.data.res);
        console.log(userId);
        return {
          shows: res.data.res,
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

const showActions = {
    getShow,
    getShowId
  };
  
  export default showActions;