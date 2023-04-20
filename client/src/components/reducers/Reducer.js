import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./userReducer";
import blogsReducer from "./blogsReducer";

export default combineReducers({
    errorsReducer: errorsReducer,
    usersReducer, 
    postsReducer, 
    blogsReducer
})