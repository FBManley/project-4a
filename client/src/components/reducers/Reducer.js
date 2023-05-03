import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";
import blogsReducer from "./blogsReducer";
import moviesReducer from "./moviesReducer";

export default combineReducers({
    errorsReducer,
    usersReducer, 
    blogsReducer, 
    moviesReducer,
})