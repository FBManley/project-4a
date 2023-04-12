import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    errorsReducer: errorsReducer,
    usersReducer, 
    postsReducer
})