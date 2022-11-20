import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const getHotels =  createAsyncThunk('getHotels ',(dispach, getState)=>{
/*     
        axios.get(` ${BASE_URL}/hotel`)
        .then(response => setHotels(response.data.res)) 

    return{
        payload:[
            data
        ]    
    } */
})

const hotelActions = {
    getHotels

}

export default hotelActions