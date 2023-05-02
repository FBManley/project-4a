import React, { useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import MovieCard from './MovieCard'
import MovieForm from './MovieForm'
import MovieEditForm from './MovieEditForm'
import {useDispatch, useSelector} from 'react-redux';


const Movies = ({user, setUser}) => {
  // const [movies, setMovies] = useState([])
  const [movieID, setMovieID] = useState(false)
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  // const [errors, setErrors] = useState([])
  // console.log("in movies", user)
    // useEffect(() => {
    //   fetch('/movies')
    //     .then((response) => response.json())
    //     .then((movies) => setMovies(movies))
    //     .catch((error) => setErrors(error))
    // }, [])
  
  // const addMovie = (newMovie) => {
  //   setMovies((movies) => [...movies, newMovie])
  //   console.log("movies",[movies])
  // }

  // const enterMovieEditMode = (movie_id) => {
  //   setMovieID(movie_id)
  // }

  // const renderMovieForm = () => {
  //    if (!movieID) {
  //     return <MovieForm addMovie={addMovie}/>
  //   } else {
  //     return <MovieEditForm movieID={movieID} onEditMovie={onEditMovie}/>
  //   }
  // }

  // const onEditMovie = (updatedMov) => {
  //   setMovies(movies => {
  //     const newMovArray = movies.map(movie => {
  //       if (movie.id === updatedMov.id) {
  //         return updatedMov
  //       } else {
  //         return movie
  //       }
  //     })
  //     return newMovArray
  //   })
  // }
  
  // const onDeleteMovie = (movie_id) => {
  //   console.log(movie_id)
  //   setMovies(prevMovies => {
  //     const filteredMoviesArray = prevMovies.filter(movie => movie.id !== movie_id)
  //     return filteredMoviesArray 
  //   })
  // }
  const MovieListCards = movies.map((movie) => 
    (<MovieCard 
    key={movie.id}
    user={user} 
    movie={movie} 
    movies={movies}
    reviews={movie.reviews}
    setUser={setUser}
    />
    
  ))

  return (
    <div>Movies List
      <br></br>
      <button onClick={() => setMovieID(false)}>Add Movie</button>
      <div>
        {/* {renderMovieForm()} */}
        {MovieListCards}
      </div>
      <div>
        {/* {[errors]} */}
      </div>
    </div>
  )
}
export default Movies;

