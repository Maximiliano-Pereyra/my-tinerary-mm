
import hotelReducer from './hotelReducer'
import cityReducer from "./cityReducer";
import showReducer from './showReducer'

const rootReducer = {
    hotels : hotelReducer,
    cities: cityReducer,
    shows: showReducer
}

export default rootReducer 
