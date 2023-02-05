import React, { useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import MovieCard from './MovieCard'
import CreateMovie from './CreateMovie'

const Movies = ({user}) => {
  const [movies, setMovies] = useState([])
  const [isCreateMovie, setIsCreateMovie] = useState(false)
  
    useEffect(() => {
      fetch('/movies')
        .then((response) => response.json())
        .then((movies) => setMovies(movies))
        .catch((error) => console.error(error))
    }, [])
    const addMovie = (movie) => {
      setMovies([...movies, movie])
    }
    const handleClick = () => {
      setIsCreateMovie(!isCreateMovie)
    }

  // does not update on delete
  // const handleReviewsUpdate = (newReviews) => {
  //   setMovies(movies.map((movie) => {
  //     console.log(newReviews)
  //     console.log("before if", movies)
  //     if (movie.id === newReviews.movie_id) {
  //       console.log("after if", movies)
  //       return {
  //         ...movie,
  //         reviews: [...movie.reviews, newReviews]
  //       }
  //     }
  //     return movie
  //   }))
  // }
  const handleReviewsUpdate = (newReviews) => {
    setMovies(movies.map((movie) => {
      console.log(newReviews)
      console.log("before if", movies)
      if (movie.id === newReviews.movie_id) {
        console.log("after if", movies)
        return {
          ...movie,
          reviews: [...movie.reviews, newReviews]
        }
      } else {
        return movie
      }
    }))
  }
  
  return (
    <div>
      <h3>Movies</h3>
      {isCreateMovie ? (
        <div>
          <CreateMovie addMovie={addMovie} handleClick={handleClick}/>
        </div>
      ) : (
        <button onClick={handleClick}>Create Movie</button>
      )}
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
