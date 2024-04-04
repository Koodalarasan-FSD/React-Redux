import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from './user/userReducer'

// React Redux - Cakes and Ice Creams - https://www.youtube.com/watch?v=fY-Wq0k_9P4
// React Redux - Async Actions - https://www.youtube.com/watch?v=tQ80uAyqVyI


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer