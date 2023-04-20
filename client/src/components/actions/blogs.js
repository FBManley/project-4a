export const loadBlogs = () => {

    return dispatch => {
        // asynchronous calls to backend
        fetch('http://localhost:3000/blogs')
        .then(response => response.json())
        // console.log(response)
        .then(blogs => {
            const action = {type: "LOAD_BLOGS", payload: blogs}
            dispatch(action) // dispatching the action to the reducer
        })
    }
}