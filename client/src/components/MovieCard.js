import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import ReviewForm from './ReviewForm'


// import Movies from './Movies';
// onDeleteReview, user, 
const MovieCard = ({reviews, movie, onDeleteMovie, enterMovieEditMode, user}) => {
  // destructure movie object
  const {id, title, genre, director, release_date, summary} = movie
  // just one cards review
  // const {reviews} = reviews
  // const {reviews} = reviews
  // console.log(reviews)
// reviews is an object getting addded to the array of reviews. need to make it an array of review objects 

 
  // state for reviews
const [cardReviews, setCardReviews] = useState([...reviews])
//  console.log(movie.reviews)
 
  // const handleReviewDeleteClick = (review_id) => {
  //   fetch(`/reviews/${review_id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(response => response.json())
  //   .then(() => onDeleteReview(review_id))
  // }
  // reviews is an array of review objects
  console.log("imported review from movie object",reviews)
  // add review function
  const addReview = (newReview) => {
    console.log("in addReview", newReview)
    console.log("in addReview", cardReviews)
    setCardReviews((cardReviews) => [...cardReviews, newReview])
    console.log(cardReviews)  
  }
  // send cardReviews to backened for post
  console.log("newly added review",cardReviews)
  
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
    // console.log(movie_id)
  }
  const movieReviews = cardReviews.map((review) => {
    return (
      <div key={uuidv4()}>
        <h4>{review.review}</h4>
      </div>
    )
  })
  // this is error messages
  console.log("movieReviews-mapped",movieReviews)
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
      {/* map to render Reviews for each moviecard  */}
      {movieReviews}
      
      <div>
          <ReviewForm key={uuidv4()} user={user} movie={movie} addReview={addReview} />
        </div>
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
  // {reviews.map((review) => {
  //   return (
  //     <div key={uuidv4()}>
  //       <h4>{review.review}</h4>
  //       {/* <h4>{review.user.username}</h4> */}
  //     </div>
  //   )
  // }
  // )}