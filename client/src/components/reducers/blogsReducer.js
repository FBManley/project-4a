const blogsReducer = (state = [], action) => {
    // blogsaction goes to blogsreducer
    // the action is an object that has these key values applied, action.type, action.payload
    switch (action.type) {
        case "LOAD_BLOGS":
            // return new non-mutated state
            return action.payload
        default:
            return state
            // action.payload is the blogs array from the backend
    }
};

export default blogsReducer;