export const loadReviews = () => {
    return (dispatch) => {
        fetch("/reviews")
        .then(res => res.json())
        .then(reviews => {
            dispatch({type: "LOAD_REVIEWS", payload: reviews})
            console.log("in loadReviews action", reviews)
        })
    }
}