import React, { useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import MovieForm from './MovieForm'
import MovieEditForm from './MovieEditForm'
import {useDispatch, useSelector} from 'react-redux';
import { loadMovies } from './actions/movies';




const Movies = () => {
  // const [movies, setMovies] = useState([])
  // const [movieID, setMovieID] = useState(false)   
  const movies = useSelector((store) => store.movies);
  
  console.log("in movies", movies)
  const dispatch = useDispatch();
  
  // const [errors, setErrors] = useState([])
  // console.log("in movies", user)
    // useEffect(() => {
    //   fetch('/movies')
    //     .then((response) => response.json())
    //     .then((movies) => dispatch(loadMovies(movies)
    //     )
    // )}, [])
    // console.log("in movies", movies)
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
    <MovieCard 
    key={movie.id}
    movie={movie} 
    />
  )


  return (
    <div>Movies 
      <MovieForm/>
      {/* <h1>{movies}</h1> */}
      <br></br>
      {/* <button onClick={() => setMovieID(false)}>Add Movie</button> */}
      <div>
        
        {/* {renderMovieForm()} */}
        {MovieListCards}
        {/* <li>{MovieListCards}</li> */}
        {/* <Movies/> */}
      </div>
      <div>
        {/* {[errors]} */}
      </div>
    </div>
  )
}
export default Movies;

