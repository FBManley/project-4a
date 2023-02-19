import React, {useState, useEffect} from 'react'


 const ReviewForm = ({  user, addReview, movie}) => {
    const [reviewFormData, setReviewFormData] = useState([])
    const [isReviewer, setIsReviewer] = useState(true)
    const startingState = {
        review: '', 
        user_id: user.id,
        movie_id: movie.id
        }

    const handleChange = (e) => {
        setReviewFormData({...reviewFormData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("in handleSubmit", reviewFormData)
      addReview(reviewFormData)
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch(`/reviews`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({reviewFormData})
    //     }).then(response => response.json())
    //       .then(reviews => {
    //         if (reviews.errors) {
    //           console.log(reviews.errors)
    //         }
    //         else {
    //             setReviewFormData(startingState)
    //             addReview(reviews)
    //             console.log("in fetch",reviews)
    //         }
    //         // addReview("in fetch",reviews)
    //       }
    //         )
    // }
    useEffect(() => {
        if (user.id === movie.movie_id)
        setIsReviewer(true)
    }, [user.id, movie.movie_id])
  return (
    <div>ReviewForm
        {isReviewer ? (
            <form onSubmit={handleSubmit}>
            <label>Review</label>
            <input type="text" name="review" value={reviewFormData.review} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        ) : (
            <h3>Log in to review</h3>
        )
        }
        
    </div>
  )
}

export default ReviewForm;