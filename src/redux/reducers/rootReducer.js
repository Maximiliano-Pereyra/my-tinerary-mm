import cityReducer from "./cityReducer";
import myCityReducer from "./myCityReducer";
import tineraryReducer from "./tineraryReducer";

const rootReducer = {
  cities: cityReducer, //nombre que le doy al reductor y el reductor que traigo
  mycity: myCityReducer,
  mytineraries: tineraryReducer,
};

export default rootReducer;
