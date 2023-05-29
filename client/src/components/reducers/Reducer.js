import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";
import moviesReducer from "./moviesReducer";
import socialsReducer from "./socialsReducer";

export default combineReducers({
    errorsReducer,
    usersReducer, 
    movies: moviesReducer,
    socials: socialsReducer
})
//  user: usersReducer, 