import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import ReviewForm from './ReviewForm'


const MovieCard = ({reviews, movie, onDeleteMovie, enterMovieEditMode, user}) => {
  // destructure movie object
  const {id, title, genre, director, release_date, summary} = movie

  // state for reviews
const [cardReviews, setCardReviews] = useState([...reviews])
 
  // reviews is an array of review objects
  console.log("imported review from movie object",reviews)
  // add review function
  const addReview = (newReview) => {
    console.log("in addReview", newReview)
    console.log("in addReview", cardReviews)
    setCardReviews((cardReviews) => [...cardReviews, newReview])
    console.log(cardReviews)  
  }
  
  // delete function for movie
  const handleMovieDeleteClick = (movie_id) => {
    fetch(`/movies/${movie_id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => onDeleteMovie(movie_id))
  }

  const handleEditClick = (movie_id) => {
    enterMovieEditMode(movie_id)
  }
  const movieReviews = cardReviews.map((review) => {
    return (
      <div key={uuidv4()}>
        <h4>{review.review}</h4>
      </div>
    )
  })
  return (
    <div>
      <h3>Title: {title}</h3>
      <h3>Genre: {genre}</h3>
      <h3>Release Date: {release_date}</h3>
      <h3>Description: {summary}</h3>
      <h3>Director: {director}</h3>
      <br></br>
      <button onClick={() => handleMovieDeleteClick(id)}>Delete</button>
      <button onClick={() => handleEditClick(id)}>Edit</button>
      <br></br>
      <h4>Reviews:</h4>
      {movieReviews}
      <div>
          <ReviewForm key={uuidv4()} user={user} movie={movie} addReview={addReview} />
        </div>
    </div>
  )
  
}
export default MovieCard;
