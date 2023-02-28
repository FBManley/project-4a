import React, {useState} from 'react'
const startingState = {
  review: ''
  }
  // user_id: '',
  // movie_id: ''

 const ReviewForm = ({  addReview, user, reviews, movie }) => {
    const {id: user_id} = user
    const {id: movie_id} = movie
    const [reviewFormData, setReviewFormData] = useState({startingState, user_id: user_id, movie_id: movie_id})
    // const [isReviewer, setIsReviewer] = useState(true)
    // const [errors, setErrors] = useState([])
    // deconstruct user for user_id
    
    // deconstruct movie for movie_id
    
    // console.log(reviews)
    console.log(user)
    console.log(reviews)
    // console.log(startingState)
    // console.log("user in review form",user_id)
    // console.log("movie in review form",movie_id)

    const handleChange = (e) => {
        setReviewFormData({...reviewFormData, [e.target.name]: e.target.value})
    }
    const handleClear = (e) => {
        setReviewFormData(startingState)
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({reviewFormData})
        }).then(response => {
            if (response.ok) {
                response.json().then(review => {
                setReviewFormData(reviewFormData)
                addReview(review)
                handleClear()
            })
            } else {
                response.json().then((errors) => {
                    console.log(errors)
                })
            }
        })
    }
    // Q. What is the purpose of this useEffect?
    // A. To set the state of isReviewer to true if the user_id matches the reviewFormData.user_id
    // Q. Is that the best way to do it?
    // A. No, it's not. I need to check the user_id of the review in the rails console.
    // Q. How do I do that?
    // A. Review.find(1).user_id
    // Q. How do I get the review_id?
    // A. I need to pass it in as a prop from the ReviewContainer
    // Q. the prop from the ReviewContainer is reviews. How do I get the review_id from that?
    // A. I need to iterate through the reviews and find the review that matches the movie_id
    // Q. Can you show me how to do that?
    // A. Sure. Here's a function that will find the correct review_id
    // Q. what should my callback be?
    // A. It should be a function that sets the state of isReviewer to true if the user_id matches the reviewFormData.user_id
    // Q. I have that function currently as a useEffect. How do I pass it in as a callback?
    // A. You can't. You need to define it outside of the useEffect and then pass it in as a callback.

    // const findCorrectId = (callback) => {
    //   reviews.forEach(review => {
    //     if (review.movie_id === movie_id) {
    //       setReviewFormData({...reviewFormData, user_id: review.user_id})
    //       callback()
    //     }
    //   })
    // }
    // const sortCorrectId = findCorrectId(() => {
    //   setIsReviewer(
    //     user_id === reviewFormData.user_id
    //   )
    // })

    // Q. what should I pass in as a dependency array?
    // A. You don't need a dependency array. You only want to run this useEffect once.
    // Q. I thought thats why you needed a dependency array?
    // A. No. You need a dependency array when you want to run the useEffect when a certain state changes.
    // Q. Yes I want to run it eveytime I want to leave a review. How do I do that?
    // A. You need to pass in the state that you want to watch for changes.
    // Q. What state should I pass in?
    // A. You should pass in the state that you want to watch for changes. In this case, you want to watch for changes in the reviewFormData.
    // Q. Im getting re-render errors. What other dependencies do I need to pass in?
    // A. You need to pass in the callback function that you want to run when the useEffect runs.
    // Q. when the useEffect runs, I want to be able to add a review to the MovieCard. How do I do that?
    // A. You need to pass in the addReview function as a dependency.
    // Q. Should the useEffect be in the parent component? 
    // A. No. The useEffect should be in the child component. The parent component should pass in the callback function as a prop.
    // Q. Which callback function should I move to the parent component?
    // A. You should move the callback function that you want to run when the useEffect runs.
    // Q. Couldn't I move the useEffect to the parent component and pass in the addReview function as a prop?
    // A. No. You can't move the useEffect to the parent component. You need to move the callback function that you want to run when the useEffect runs.
    // Q. Why can't I move the useEffect to the parent component?
    // A. Because the useEffect is a hook. Hooks can only be used in functional components.
    // Q. Why isn't this a functional component?
    // A. Because it's a class component.
    // Q. How can I tell this is a class component?
    // A. Because it extends React.Component.
    // Q. Where?
    // A. On line 1.
    // Q. Importing React is not the same as extending React.Component.
    // A. Yes it is. It's the same thing.
    // Q. So if I didnt import React, I wouldnt be able to extend React.Component?
    // A. Yes.
    // Q. Which would make it a functional component?
    // A. Yes.
    // Q. So I can move the useEffect to the parent component and pass in the addReview function as a prop?
    // Q. Can you give me a step by step on how to do that?
    // A. Sure. First, you need to move the useEffect to the parent component. Then, you need to pass in the addReview function as a prop.

    // ADD REVIEW FUNCTION TO PARENT COMPONENT
    // useEffect was being used to set the state of reviews for that specific movie when the addReview button was clicked and add the new review to the reviews array.
    // use effect will run in the parent MovieCard when addReview button  is clicked. Pass in the addReview function as a prop to the ReviewForm component. 
    // q. do I need a ReviewCOntainer component?
    // a. no. I can just pass in the reviews array as a prop to the ReviewForm component.
    // q. getting errors from rails stating unprocessable entity that User must exist. How do I fix that?
    // a. I need to pass in the user_id as a prop to the ReviewForm component.
    // q. I didnt have to do that for MovieForm component. Why do I need to do it for ReviewForm component?
    // a. Because the ReviewForm component is a class component. You need to pass in the user_id as a prop to the ReviewForm component.
    // q. MovieForm is a class component. Why didnt I have to pass in the user_id as a prop to the MovieForm component?
    // a. Because the MovieForm component is a functional component. You don't need to pass in the user_id as a prop to the MovieForm component.
    // q. Your last two answers are contradicting. Which one is correct?
    // a. The first answer is correct. You need to pass in the user_id as a prop to the ReviewForm component.
    // q. like this-> const {id: user_id} = user?
    // a. yes.
    // q. now how do I add the user_id to the reviewFormData?
    // a. you need to set the state of reviewFormData to the user_id.
    // q. show me the best way to do that
    // a. setReviewFormData({...reviewFormData, user_id: user_id})






    // useEffect(() => {
    //   findCorrectId(sortCorrectId)
    // }, [reviewFormData, sortCorrectId, addReview])
  
    // Q. how do I check in rails console the user_id of the review?
    // A. Review.find(1).user_id

    // const onErrors = (reviews) => {
    //       setErrors(reviews.errors)
    //         return (
    //             <div>
    //                 <h4>error:{reviews.errors}</h4>
    //             </div>
    //         )
    // }
  return (
    <div>
      ReviewForm
            <form onSubmit={handleSubmit}>
            <label>Review</label>
            <input type="text" name="review" value={reviewFormData.review} onChange={handleChange} />
            {/* <label>User ID</label> */}
            {/* <input type="text" name="user_id" value={reviewFormData.user_id} onChange={handleChange}></input> */}
            {/* <label>Movie ID</label> */}
            {/* <input type="text" name="movie_id" value={reviewFormData.movie_id} onChange={handleChange}></input> */}
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
        </form>
        
      <br></br>
      <div>
        {/* list errors from error state*/}
        {/* <li onErrors={onErrors}>{errors}</li> */}
      </div>
        
    </div>
  )
}

export default ReviewForm;