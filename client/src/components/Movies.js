import React, { useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import MovieCard from './MovieCard'

const Movies = ({user}) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/movies')
    .then((response) => response.json())
    .then((movies) => setMovies(movies))
        console.log(movies)
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
  const handleDelete = (review) => {
    if (review.user_id === user.id) {
      fetch(`/reviews/${review.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          response.json().then(() => {
            const updatedMovies = movies.map(movie => {
              if (movie.id === review.movie_id) {
                movie.reviews = movie.reviews.filter(r => r.id !== review.id)
              }
              return movie
            })
            setMovies(updatedMovies)
          })
        })
    }
  }

 



  return (
    <div>Movies List
      <div>
        {movies.map((movie) => (<MovieCard key={uuidv4()} user={user} movie={movie} handleReviewsUpdate={handleReviewsUpdate} handleDelete={handleDelete} />))}
      </div>
    </div>
  )
}
export default Movies;
