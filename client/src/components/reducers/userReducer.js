const userReducer = (state=[], action) => {
    switch (action.type) {
        case "LOAD_USERS":
            return action.payload
        case "DELETE_USER":
            return state.filter(user => user.id !== action.payload.id)
        default:
            return state

    }
}
export default userReducer;
// This reducer takes the current state of the application and an action, and returns a new state based on the action. 