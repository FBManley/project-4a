const userReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_USER":
            return action.payload
        case "DELETE_USER":
            return state.filter(user => user.id !== action.payload.id)
        default:
            return state

    }
}
export default userReducer;
// This reducer takes the current state of the application and an action, and returns a new state based on the action. 
// q. is LOAD_USERS correct or hsould it be called ADD_USERS?
// a. LOAD_USERS is correct because we are loading users from the database
// a. yes, because we are loading users from the database
// q. what is the payload?
// a. the payload is the users array from the database
// q. should initial state be an empty array?
// a. yes, because we are loading users from the database
