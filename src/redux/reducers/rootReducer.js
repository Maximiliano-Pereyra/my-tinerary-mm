
import hotelReducer from './hotelReducer'
import cityReducer from "./cityReducer";
import showReducer from './showReducer'
import myCityReducer from "./myCityReducer";
import tineraryReducer from "./tineraryReducer";

const rootReducer = {
  cities: cityReducer, //nombre que le doy al reductor y el reductor que traigo
  mycity: myCityReducer,
  mytineraries: tineraryReducer,
  hotels : hotelReducer,
  shows: showReducer
};

export default rootReducer 
