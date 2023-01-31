import React from 'react'
// import Movies from './Movies';

 const MovieCard = ({user, movie}) => {
    console.log(movie)

  return (
    <div>
      <h3>Title: {movie.title}</h3>
      <h3>Genre: {movie.genre}</h3>
      <h3>Release Date: {movie.release_date}</h3>
      <h3>Description: {movie.summary}</h3>
      <h3>Director: {movie.director}</h3>
      <br></br>
      Reviews:
      {movie.reviews.map(review => <div>{review.user_id}: {review.review}</div>)}
      {/* {movie.map(movie => <div>{movie.reviews}</div>)} */}
      {/* <h3>Reviews: {movie.reviews}</h3>
      <p>{user.username.review}</p> */}
    </div>
  )
}
export default MovieCard;
// how to I display the username for each review for each movie?
// need to add a review form somewhere
