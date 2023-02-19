import React, {useState, useEffect} from 'react'
const startingState = {
  review: '', 
  user_id: '',
  movie_id: ''
  }

 const ReviewForm = ({  user, addReview, movie}) => {
    const [reviewFormData, setReviewFormData] = useState(startingState)
    const [isReviewer, setIsReviewer] = useState(true)
    const [errors, setErrors] = useState([])
    // deconstruct user for user_id
    const {id: user_id} = user
    // deconstruct movie for movie_id
    const {id: movie_id} = movie
    
    
    console.log(startingState)
    console.log("user in review form",user_id)
    console.log("movie in review form",movie_id)

    const handleChange = (e) => {
        setReviewFormData({...reviewFormData, [e.target.name]: e.target.value})
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({reviewFormData})
        }).then(response => response.json())
          .then(reviews => {
            if (reviews.errors) {
              setErrors(reviews.errors)
            }
            else {
                setReviewFormData(startingState)
                addReview(reviewFormData)
            }
          }
            )
    }

    useEffect(() => {
        setIsReviewer(true)
    }, [user.id, movie_id])
    const onErrors = (reviews) => {
          setErrors(reviews.errors)
            return (
                <div>
                    <h4>error:{reviews.errors}</h4>
                </div>
            )
    }
  return (
    <div>ReviewForm
        {isReviewer ? (
            <form onSubmit={handleSubmit}>
            <label>Review</label>
            <input type="text" name="review" value={reviewFormData.review} onChange={handleChange} />
            <label>User ID</label>
            <input type="text" name="user_id" value={reviewFormData.user_id} onChange={handleChange}></input>
            <label>Movie ID</label>
            <input type="text" name="movie_id" value={reviewFormData.movie_id} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
        ) : (
            <h3>Log in to review</h3>
        )}
      <br></br>
      <div>
        {/* list errors from error state*/}
        <li onErrors={onErrors}>{errors}</li>
      </div>
        
    </div>
  )
}

export default ReviewForm;