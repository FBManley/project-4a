import React, {useState} from 'react'
const startingState = {
  review: ''
  }

 const ReviewForm = ({  addReview, user, movie }) => {
    const {id: user_id} = user
    const {id: movie_id} = movie
    const [reviewFormData, setReviewFormData] = useState({startingState, user_id: user_id, movie_id: movie_id})
    const [errors, setErrors] = useState([])


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
                    setErrors(errors.errors)
                    console.log(errors)
                })
            }
        })
    }
    
  return (
    <div>
      ReviewForm
            <form onSubmit={handleSubmit}>
            <label>Review</label>
            <input type="text" name="review" value={reviewFormData.review} onChange={handleChange} />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
        </form>
      <br></br>
      <div>
        {errors}
      </div>
        
    </div>
  )
}

export default ReviewForm;