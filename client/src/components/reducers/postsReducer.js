const initialState = [
    {
        id: 1,
        title: "First Post"    
    },
    {
        id: 2,
        title: "Second Post"
    },
    {
        id: 3,
        title: "Third Post"
    }
]
// takes in initial state set as default and action
const postReducer = (state=initialState, action ) => {
    
    return state
};

export default postReducer;