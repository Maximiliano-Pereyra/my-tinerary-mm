import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { enter, reEnter } = userActions;

const initialState = {
  name: "",
  lastName: "",
  photo: "",
  logged: false,
  token: "",
};

const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(enter.fulfilled, (state, action) => {
    const { success, response } = action.payload;
    if (success) {
      let { user, token } = response; 
      localStorage.setItem("token", JSON.stringify({ token: { user: token } })); 
      let newState = {
        ...state,
        name: user.name,
        lastName: user.lastName,
        photo: user.photo,
        logged: true,
        role: user.role,
        token: token,
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
  .addCase(reEnter.fulfilled, (state, action)=>{
    const{success,response,token}= action.payload
   if(success){
     let { user } = response;

    let newState={
      ...state,
      name:user.name,
      lastName: user.lastName,
      photo:user.photo,
      logged:true,
      role:user.role,
      token:token,
    }

    return newState;
   }else {
    let newState = {
      ...state,
      message: response,
    };
    return newState;
  }

  })
})

export default usersReducer 