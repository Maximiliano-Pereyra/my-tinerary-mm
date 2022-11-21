import { configureStore } from "@reduxjs/toolkit";
import myCityReducer from "./reducers/myCityReducer";
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  mycity: myCityReducer,
});
