import React, {useState} from 'react'
const startingState = {
    review: ''
    }
 const ReviewForm = ({setReviews}) => {
    const [reviewFormData, setReviewFormData] = useState(startingState)
    // const {review} = reviewFormData

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
          .then(reviews => setReviews(reviews))

    }
  return (
    <div>ReviewForm
        <form onSubmit={handleSubmit}>
            <label>Review</label>
            <input type="text" name="review" value={reviewFormData.review} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ReviewForm;