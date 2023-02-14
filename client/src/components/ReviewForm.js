import React, {useState} from 'react'
const startingState = {
    review: '',
    like: false
    }
 const ReviewForm = ({reviews, setReviews}) => {
    const [reviewFormData, setReviewFormData] = useState(startingState)
    const [like, setLike] = useState(false)
    const {review} = reviewFormData
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
            <input type="text" name="review" value={review} onChange={handleChange} />
            {/* button for likes */}
            <button type="boolean" name="like" value={like} onChange={handleChange}>Like</button>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ReviewForm;