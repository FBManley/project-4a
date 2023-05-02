const blogsReducer = (state = [], action) => {
    // blogsaction goes to blogsreducer 
    // the action is an object that has these key values applied, action.type, action.payload
    switch (action.type) {
        case "LOAD_BLOGS":
            // return new non-mutated state
            return action.payload
        case "DELETE_BLOG":
            return state.filter(blog => blog.id !== action.payload.id)
        case "EDIT_BLOG":
            return state.map(blog => {
                if (blog.id === action.payload.id) {
                    return action.payload
                } else {
                    return blog
                }
            })
        default:
            return state
            // action.payload is the blogs array from the backend
    }
};

export default blogsReducer; 