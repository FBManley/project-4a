const initialState = {
    users: [], 
    currentUser: null, 
    loggedIn: false
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LOAD_USERS":
            // console.log("ADD_USER", action.payload)
            return {...state, users: action.payload}
        case "LOGIN_USER":
            return {...state, currentUser: action.payload, loggedIn: true}
        case "ADD_USER":
            return {...state, users: [...state.users, action.payload]}
        case "LOGOUT_USER":
            return {...state, currentUser: null, loggedIn: false}
        case "UPDATE_USER":
            return { ...state, currentUser: { ...state.currentUser, ...action.payload } };
        default:
            return state

    }
}
export default usersReducer;

