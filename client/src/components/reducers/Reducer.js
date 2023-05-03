import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./userReducer";
import blogsReducer from "./blogsReducer";
import moviesReducer from "./moviesReducer";

export default combineReducers({
    errorsReducer: errorsReducer,
    usersReducer, 
    blogsReducer, 
    moviesReducer,
})