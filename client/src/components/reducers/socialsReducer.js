const socialsReducer = (state = [], action) => {
    switch (action.type) {
        case "LOAD_SOCIALS":
        return action.payload
    
        default: 
        return state
    }
    
    
    
}

export default socialsReducer;