const loadBlogs = () => {

    return dispatch = {
        // asynchronous calls to backend
        // dispatch({type: "LOAD_BLOGS", payload: blogs})
        fetch('/movies')
        .then(response => response.json())
        .then(blogs => dispatch({type: "LOAD_BLOGS", payload: blogs}))
    }
}