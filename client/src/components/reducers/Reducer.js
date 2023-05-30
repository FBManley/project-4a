import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";
import moviesReducer from "./moviesReducer";
import socialsReducer from "./socialsReducer";
import reviewsReducer from "./reviewsReducer";

export default combineReducers({
    errorsReducer,
    usersReducer, 
    movies: moviesReducer,
    socials: socialsReducer,
    reviews: reviewsReducer
})
//  user: usersReducer, 