import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const MovieCard = ({user, movie, handleReviewsUpdate, handleDelete}) => {
  // state for reviews
  const [reviews, setReviews] = useState([])
  const [reviewToEdit, setReviewToEdit] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const review = event.target[0].value
    const movie_id = movie.id
    const user_id = user.id
    const reviewObj = {
      review,
      movie_id,
      user_id
    }
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reviewObj
      }),
    })
    .then((response) => {
      console.log("response",response)
      response.json().then((review) => {
        setReviews([...reviews, review])
        handleReviewsUpdate(review)
      })
    })    
  }
   // handleEditReview function
   const handleEditReview = (review) => {
    if (review.user_id === user.id) {
      fetch(`/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({review}),
      })
      .then((response) => {
        if (response.ok) {
          const updatedReviews = reviews.map((r) => (r.id === review.id ? review : r))
          setReviews(updatedReviews)
          setReviewToEdit(null)
        }
      })
    }
  }
  // called when a user clicks the "Edit" button to acces the review state i want to click
  const handleEdit = (review) => {
    setReviewToEdit(review)
  }

  return (
    <div>
      <h3>Title: {movie.title}</h3>
      <h3>Genre: {movie.genre}</h3>
      <h3>Release Date: {movie.release_date}</h3>
      <h3>Description: {movie.summary}</h3>
      <h3>Director: {movie.director}</h3>
      <br></br>
      Reviews:
      {reviews.map(review => (
        <div key={uuidv4()}>
          {review.user_id === user.id ? (
            <div>
          
          {review.user_id}: {reviewToEdit === review ? (
            <input type="text" defaultValue={review.review}></input>
          ) : review.review}
          {reviewToEdit === review ? (
            <>
              <button onClick={() => handleEditReview(review)}>Submit</button>
              <button onClick={() => setReviewToEdit(null)}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => handleDelete(review)}>Delete</button>
              <button onClick={() => handleEdit(review)}>Edit</button>
            </>
          )}
        </div>
      ) : (
        <div>{review.user_id}: {review.review}</div>
      )
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a review"/>
        <button type="submit">Add Review</button>
      </form>
    </div>
  )
}
export default MovieCard;
// how to I display the username for each review for each movie?
// need to add a review form somewhere

  // updates the review 
  // const handleUpdate = (review) => {
  //   fetch(`/reviews/${review.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({review}),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         const updatedReviews = reviews.map((r) => (r.id === review.id ? review : r))
  //           setReviews(updatedReviews)
  //           setReviewToEdit(null)
  //           handleEditReview(review)
  //       }
  //     })
  // }