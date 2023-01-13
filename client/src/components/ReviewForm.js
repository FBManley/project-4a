import React, { useState, useContext } from 'react'
// need form to take in review (refiew and like)
import { UserContext } from './User';

 const ReviewForm = () => {
    const [review, setReview] = useState("")
    const [like, setLike] = useState("")
    const { addReview } = useContext(UserContext)
    // const [errorsList, setErrorsList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        addReview({
            review: review,
            like: like
        })
        
    }
  return (
    <div>ReviewForm
        <form onSubmit={handleSubmit}></form>
        <label>Review:</label>
        <input type="text" id="review" value={review} onChange={(e)=> setReview(e.target.value)}></input>
        <br/>
        <label>Like:</label>
        <input type="text" id="like" value={like} onChange={(e)=> setLike(e.target.value)}></input>
        <br/>
        <input type="submit"></input>
    </div>
  )
}
export default ReviewForm;