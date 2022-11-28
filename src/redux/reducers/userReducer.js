import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { enter, reEnter, signout, getUser } = userActions;

const initialState = {
  name: "",
  lastName: "",
  photo: "",
  logged: false,
  token: "",
  idUser: "",
  user: [],
  email:"",

};

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(enter.fulfilled, (state, action) => {
      const { success, response } = action.payload;
      if (success) {
        let { user, token } = response;
        localStorage.setItem(
          "token",
          JSON.stringify({ token: { user: token } })
        );
        let newState = {
          ...state,
          name: user.name,
          lastName: user.lastName,
          photo: user.photo,
          logged: true,
          role: user.role,
          idUser: user.id,
          token: token,
          email:user.email
        };
        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };
        return newState;
      }
    })
    .addCase(reEnter.fulfilled, (state, action) => {
      const { success, response, token } = action.payload;

      if (success) {
        let { user } = response;

        let newState = {
          ...state,
          name: user.name,
          lastName: user.lastName,
          photo: user.photo,
          logged: true,
          role: user.role,
          idUser: user.id,
          token: token,
          email:user.email,
        };

        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };
        return newState;
      }
    })
    .addCase(signout.fulfilled, (state, action) => {
      const { success, response } = action.payload;
      if (success) {
        localStorage.removeItem("token");
        let newState = {
          ...state,
          name: "",
          lastName: "",
          photo: "",
          logged: false,
          role: "",
          idUser: "",
          token: "",
          email:"",
        };
        console.log(newState);
        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };
        return newState;
      }
    })
    .addCase(getUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.response,
      };
    });
});

export default usersReducer;
