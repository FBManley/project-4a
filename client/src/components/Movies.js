import React, { useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import MovieCard from './MovieCard'
import MovieForm from './MovieForm'
import MovieEditForm from './MovieEditForm'

const Movies = ({user}) => {
  const [movies, setMovies] = useState([])
  const [movieID, setMovieID] = useState(false)

    useEffect(() => {
      fetch('/movies')
        .then((response) => response.json())
        .then((movies) => setMovies(movies))
        .catch((error) => console.error(error))
    }, [])
    
  const onAddMovie = (newMovie) => {
    setMovies((movies) => [...movies, newMovie])
  }
  const enterMovieEditMode = (movie_id) => {
    setMovieID(movie_id)
  }
  const renderMovieForm = () => {
     if (!movieID) {
      return <MovieForm updateMovies={onAddMovie}/>
    } else {
      return <MovieEditForm movieID={movieID} editMovie={editMovie}/>
    }
  }
  const editMovie = (updatedMov) => {
    setMovies(prevMovies => {
      const newMovArray = prevMovies.map(movie => {
        if (movie.id === updatedMov.id) {
          return updatedMov
        } else {
          return movie
        }
      })
      return newMovArray
    })
  }
  const onDeleteReview = (review_id) => {
    console.log(review_id)
    setMovies(prevMovies => {
      const filteredMoviesArray = prevMovies.filter(movie => movie.review_id !== review_id)
      return filteredMoviesArray 
    })
  }
  const MovieListCards = movies.map((movie) => 
    (<MovieCard 
    key={uuidv4()} 
    user={user} 
    movie={movie} 
    // handleReviewsUpdate={handleReviewsUpdate} 
    onDeleteReview={onDeleteReview}
    />
    
  ))

  return (
    <div>Movies List
      <div>
        {renderMovieForm()}
        {MovieListCards}
      </div>
    </div>
  )
}
export default Movies;
  // added handleReviewsUpdate function
  // const handleReviewsUpdate = (newReviews) => {
  //   setMovies(movies.map((movie) => {
  //     if (movie.id === newReviews.movie_id) {
  //       return {
  //         ...movie,
  //         reviews: [...movie.reviews, newReviews]
  //       }
  //     }
  //     return movie
  //   }))
  // }