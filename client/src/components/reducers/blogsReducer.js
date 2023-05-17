// const state = [
//     {
//         id: 1,
//         title: "My First Blog",
//         content: "This is my first blog"
//     },
//     {
//         id: 2,
//         title: "My Second Blog",
//         content: "This is my second blog"
//     }
// ]
const blogsReducer = (state=[], action) => {
    // blogsaction goes to blogsreducer 
    // the action is an object that has these key values applied, action.type, action.payload
    
    switch (action.type) {
        case "BLOGS_LOADED":
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

 