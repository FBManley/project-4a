const reviewsreducers = (state = [], action) => {
    switch (action.type) {
        case "LOAD_REVIEWS":
            return action.payload
        case "ADD_REVIEW":
            return [...state, action.payload]
        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.payload.id)
        case "UPDATE_REVIEW":
            return state.map(review => review.id === action.payload.id ? action.payload : review)
        default:
            return state
    }
}