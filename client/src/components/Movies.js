import React, { useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import MovieCard from './MovieCard'

const Movies = ({user}) => {
  const [movies, setMovies] = useState([])

    useEffect(() => {
      fetch('/movies')
        .then((response) => response.json())
        .then((movies) => setMovies(movies))
        .catch((error) => console.error(error))
    }, [])

  // added handleReviewsUpdate function
  const handleReviewsUpdate = (newReviews) => {
    setMovies(movies.map((movie) => {
      if (movie.id === newReviews.movie_id) {
        return {
          ...movie,
          reviews: [...movie.reviews, newReviews]
        }
      }
      return movie
    }))
  }
  
  return (
    <div>Movies List
      <div>
        {movies.map((movie) => 
        (<MovieCard 
        key={uuidv4()} 
        user={user} 
        movie={movie} 
        handleReviewsUpdate={handleReviewsUpdate} />))}
      </div>
    </div>
  )
}
export default Movies;
