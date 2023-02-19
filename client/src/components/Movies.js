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
    }, [])
    
  const addMovie = (newMovie) => {
    console.log("movies",[movies])
    setMovies((movies) => [...movies, newMovie])
  }

  const enterMovieEditMode = (movie_id) => {
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
    onDeleteMovie={onDeleteMovie}
    enterMovieEditMode={enterMovieEditMode}
    />
    
  ))

  return (
    <div>Movies List
      <br></br>
      <button onClick={() => setMovieID(false)}>Add Movie</button>
      <div>
        {renderMovieForm()}

        {MovieListCards}
      </div>
    </div>
  )
}
export default Movies;
