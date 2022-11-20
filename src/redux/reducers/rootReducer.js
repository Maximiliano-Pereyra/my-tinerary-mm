import cityReducer from "./cityReducer";
import myCityReducer from "./myCityReducer";

const rootReducer = {
  cities: cityReducer, //nombre que le doy al reductor y el reductor que traigo
  mycity: myCityReducer,
};

export default rootReducer;
