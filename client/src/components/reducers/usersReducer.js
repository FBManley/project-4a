const initialState = {
    users: [], 
    currentUser: null, 
    loading: false
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LOAD_USER":
            // console.log("ADD_USER", action.payload)
            return {...state, users: action.payload}
        // case "DELETE_USER":
        //     // state = initialState
        //     return state.filter(user => user.id !== action.payload.id)
        default:
            return state

    }
}
export default usersReducer;

