const errorsReducer = (state=[], action) => {
    switch (action.type) {
        case "LOAD_ERRORS":
            return action.payload
    }
    return state
}
export default errorsReducer;