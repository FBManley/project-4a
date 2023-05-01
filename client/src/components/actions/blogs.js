export const loadBlogs = () => {

    return dispatch => {
        // asynchronous calls to backend
        fetch('/blogs')
        .then(response => response.json())
        // console.log(response)
        .then(blogs => {
            const action = {type: "LOAD_BLOGS", payload: blogs}
            dispatch(action) // dispatching the action to the reducer
            
        })
    }

}

export const deleteBlog = (id) => {
    return dispatch => {
        fetch(`/blogs/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(blog => {
            const action = {type: "DELETE_BLOG", payload: id}
            dispatch(action)
        })
    }
}