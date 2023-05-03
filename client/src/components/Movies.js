import React, { useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import MovieForm from './MovieForm'
import MovieEditForm from './MovieEditForm'
import {useDispatch, useSelector} from 'react-redux';
// import {loadMovies} from './actions/movies';


const Movies = () => {
  // const [movies, setMovies] = useState([])
  // const [movieID, setMovieID] = useState(false)
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  // const [errors, setErrors] = useState([])
  // console.log("in movies", user)
    // useEffect(() => {
    //   fetch('/movies')
    //     .then((response) => response.json())
    //     .then((movies) => loadMovies(movies))
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
    movie={movie} 
    // reviews={movie.reviews}
    />
  ))
  // q. why is mapo getting an error here?
  // a. because the movie object is empty.
  // q. why is the movie object empty?
  // a. because the movie object is empty in the store.
  // q. how do i have the movie object contain the movies from my database?
  // a. by using the loadMovies action in the useEffect hook.
  // q. call loadMovies in which useEffect?
  // q. show me an example of a useEffect hook that calls loadMovies.
  // a. see client/src/components/Home.js line 8.
  // q. that line is empty
  // a. yes, but it is calling loadMovies.
  // q. then it shouldnt be empty, right?


  return (
    <div>Movies List
      <br></br>
      {/* <button onClick={() => setMovieID(false)}>Add Movie</button> */}
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

