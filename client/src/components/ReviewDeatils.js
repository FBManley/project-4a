import React, {} from 'react'
import { v4 as uuidv4 } from 'uuid';
 const ReviewDeatils = ({reviews}) => {

    // const [review, setReview] = useState([reviews])

    console.log("in details", reviews)
    const reviewDetails = reviews.map((review) => {
      return (
        <div key={uuidv4()}>
          <h4>{review.review}</h4>
        </div>
    )
    })
  return (
    <div>
        {reviewDetails}
    </div>
  )
}
export default ReviewDeatils;