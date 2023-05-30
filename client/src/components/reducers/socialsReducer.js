const socialsReducer = (state = [], action) => {
    switch (action.type) {
        case "LOAD_SOCIALS":
        return action.payload
        case "UPDATE_SOCIALS":
        return state.map(social => social.id === action.payload.id ? action.payload : social)
        case "USER_SOCIALS":
        return action.payload
        default: 
        return state
    }

    
    
}

export default socialsReducer;