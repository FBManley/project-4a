import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
// import Movies from './Movies';
// onDeleteReview,
const MovieCard = ({user, movie, onDeleteMovie, enterMovieEditMode}) => {
  // state for reviews
  // const [reviews, setReviews] = useState([])
 
  // const handleReviewDeleteClick = (review_id) => {
  //   fetch(`/reviews/${review_id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(response => response.json())
  //   .then(() => onDeleteReview(review_id))
  // }

  // delete function for movie
  const handleMovieDeleteClick = (movie_id) => {
    fetch(`/movies/${movie_id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => onDeleteMovie(movie_id))
  }

  return (
    <div>
      <h3>Title: {movie.title}</h3>
      <h3>Genre: {movie.genre}</h3>
      <h3>Release Date: {movie.release_date}</h3>
      <h3>Description: {movie.summary}</h3>
      <h3>Director: {movie.director}</h3>
      <br></br>
      <button onClick={() => handleMovieDeleteClick(movie.id)}>Delete</button>
      <button onClick={() => enterMovieEditMode(movie)}>Edit</button>
    </div>
  )
  
}
export default MovieCard;
// how to I display the username for each review for each movie?
// need to add a review form somewhere
// need to add a delete button for each review
// const handleReviewSubmit = (event) => {
  //   event.preventDefault()
  //   const review = event.target[0].value
  //   const movie_id = movie.id
  //   const user_id = user.id
  //   const reviewObj = {
  //     review,
  //     movie_id,
  //     user_id
  //   }
  //   fetch('/reviews', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       reviewObj
  //     }),
  //   })
  //   .then((response) => {
  //     console.log("response",response)
  //     response.json().then((review) => {
  //       setReviews([...reviews, review])
  //       handleReviewsUpdate(review)
  //     })
  //   })    
  // }
  // Reviews:
  // {movie.reviews.map(review => 
  // <div key={uuidv4()}>
  //   {review.user_id}: {review.review} 
  //   <button onClick={() => handleReviewDeleteClick(review.id)}>Delete</button>
  // </div>)}
  // <form onSubmit={handleReviewSubmit}>
  //   <input type="text" placeholder="Add a review" />
  //   <br/> 
  //   <input type="submit"></input>
  // </form>