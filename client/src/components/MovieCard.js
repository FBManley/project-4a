import React from 'react'

 const MovieCard = ({user, movie}) => {
    console.log(movie, user)
  return (
    <div>
      <h3>Title: {movie.title}</h3>
      <h3>Genre: {movie.genre}</h3>
      <h3>Release Date: {movie.release_date}</h3>
      <h3>Description: {movie.summary}</h3>
      <h3>Director: {movie.director}</h3>
      <br></br>
      {/* <p>{user.username.review}</p> */}
    </div>
  )
}
export default MovieCard;