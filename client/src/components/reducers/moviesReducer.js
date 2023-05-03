const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case "LOAD_MOVIES":
            return action.payload
        case "ADD_MOVIE":
            return [...state, action.payload]
        case "DELETE_MOVIE":
            return state.filter(movie => movie.id !== action.payload.id)
        default:
            return state
    }
}