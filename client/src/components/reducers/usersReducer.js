

const usersReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_USER":
            // console.log("ADD_USER", action.payload)
            return action.payload
        case "DELETE_USER":
            // state = initialState
            return state
            // state.filter(user => user.id !== action.payload.id)
        default:
            return state

    }
}
export default usersReducer;

