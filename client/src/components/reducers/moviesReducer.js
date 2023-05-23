
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case "LOAD_MOVIES":
            return action.payload
        case "ADD_MOVIE":
            return [...state, action.payload]
        case "DELETE_MOVIE":
            return state.filter(movie => movie.id !== action.payload.id)
        case "UPDATE_MOVIE":
            return state.map(movie => movie.id === action.payload.id ? action.payload : movie)
        default:
            return state
    }
}
export default moviesReducer;
