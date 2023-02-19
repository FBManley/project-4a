import React, { useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import MovieCard from './MovieCard'
import MovieForm from './MovieForm'
import MovieEditForm from './MovieEditForm'

const Movies = ({user}) => {
  const [movies, setMovies] = useState([])
  const [movieID, setMovieID] = useState(false)
  console.log("in movies", user)
    useEffect(() => {
      fetch('/movies')
        .then((response) => response.json())
        .then((movies) => setMovies(movies))
        .catch((error) => console.error(error))
        // console.log(movies)
    }, [])
    
  const addMovie = (newMovie) => {
    console.log([movies])
    setMovies((movies) => [...movies, newMovie])
  }
  const enterMovieEditMode = (movie_id) => {
    console.log("enterMovieEditMode",movie_id)
    setMovieID(movie_id)
  }
  const renderMovieForm = () => {
     if (!movieID) {
      return <MovieForm addMovie={addMovie}/>
    } else {
      return <MovieEditForm movieID={movieID} onEditMovie={onEditMovie}/>
    }
  }
  const onEditMovie = (updatedMov) => {
    setMovies(movies => {
      const newMovArray = movies.map(movie => {
        if (movie.id === updatedMov.id) {
          return updatedMov
        } else {
          return movie
        }
      })
      // setMovies(newMovArray)
      return newMovArray
      
    })
    
  }
  
  const onDeleteMovie = (movie_id) => {
    console.log(movie_id)
    setMovies(prevMovies => {
      const filteredMoviesArray = prevMovies.filter(movie => movie.id !== movie_id)
      return filteredMoviesArray 
    })
  }
  const MovieListCards = movies.map((movie) => 
    (<MovieCard 
    key={uuidv4()} 
    user={user} 
    movie={movie} 
    reviews={movie.reviews}
    // handleReviewsUpdate={handleReviewsUpdate} 
    // onDeleteReview={onDeleteReview}
    onDeleteMovie={onDeleteMovie}
    enterMovieEditMode={enterMovieEditMode}
    />
    
  ))

  return (
    <div>Movies List
      {/* Add Movie Button */}
      <button onClick={() => setMovieID(false)}>Add Movie</button>
      <div>
        {/* need tenary. if addMovie is clicked render MovieForm else render editMovieForm */}
        {/* {movies ? (
          <div><MovieForm addMovie={addMovie}/> </div> 
          ) : (
          <div><MovieEditForm movieID={movieID} onEditMovie={onEditMovie}/></div>)}  */}
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
  // const onDeleteReview = (review_id) => {
  //   console.log(review_id)
  //   setMovies(prevMovies => {
  //     const filteredMoviesArray = prevMovies.filter(movie => movie.review_id !== review_id)
  //     return filteredMoviesArray 
  //   })
  // }