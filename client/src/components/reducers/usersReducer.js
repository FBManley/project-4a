
const usersReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_USER":
            console.log("action.payload", action.payload)
            return action.payload
        case "DELETE_USER":
            return state.filter(user => user.id !== action.payload.id)
        default:
            return state

    }
}
export default usersReducer;

