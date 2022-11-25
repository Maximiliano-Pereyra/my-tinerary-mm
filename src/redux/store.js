import { configureStore } from "@reduxjs/toolkit";
import myCityReducer from "./reducers/myCityReducer";
import rootReducer from "./reducers/rootReducer";
import tineraryReducer from "./reducers/tineraryReducer";


export const store = configureStore ({
        reducer: rootReducer 
})


