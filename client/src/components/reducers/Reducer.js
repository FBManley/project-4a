import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./userReducer";
import blogsReducer from "./blogsReducer";
import moviesReducer from "./moviesReducer";

export default combineReducers({
    errorsReducer: errorsReducer,
    usersReducer, 
    postsReducer, 
    blogsReducer, 
    moviesReducer
})