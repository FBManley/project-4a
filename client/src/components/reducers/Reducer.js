import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";
import blogsReducer from "./blogsReducer";
import moviesReducer from "./moviesReducer";
import counterReducer from "./counterReducer";

export default combineReducers({
    errorsReducer,
    usersReducer, 
    blogsReducer, 
    movies: moviesReducer,
    counter: counterReducer
})
//  user: usersReducer, 