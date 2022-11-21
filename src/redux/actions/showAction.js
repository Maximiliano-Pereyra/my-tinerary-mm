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










const showActions = {
    getShow
  };
  
  export default showActions;