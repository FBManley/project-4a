import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
// import Movies from './Movies';

const MovieCard = ({user, movie, handleReviewsUpdate, handleDelete}) => {
  // state for reviews
  const [reviews, setReviews] = useState([])

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

  return (
    <div>
      <h3>Title: {movie.title}</h3>
      <h3>Genre: {movie.genre}</h3>
      <h3>Release Date: {movie.release_date}</h3>
      <h3>Description: {movie.summary}</h3>
      <h3>Director: {movie.director}</h3>
      <br></br>
      Reviews:
      {movie.reviews.map(review => (
        <div key={uuidv4()}>
          {review.user_id === user.id ? (
            <div>
              {review.user_id}: {review.review}
              <button onClick={() => handleDelete(review)}>Delete</button>
            </div>
          ) : (
            <div>{review.user_id}: {review.review}</div>
          )}
        </div>
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
// need to add a delete button for each review