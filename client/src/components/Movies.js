import React, { useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import MovieForm from './MovieForm'
import MovieEditForm from './MovieEditForm'
import {useDispatch, useSelector} from 'react-redux';
import { loadMovies } from './actions/movies';
import { loadReviews } from './actions/reviews';
// import loadReviews from './actions/reviews';



const Movies = () => {
  // const [movies, setMovies] = useState([])
    
  const movies = useSelector((store) => store.movies);
  const rev = useSelector((store) => store.movies.reviewsReducer);
  console.log("in movies", movies)
  console.log("reviews- in movies", rev)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadReviews())
  }, [dispatch]);
  // const [errors, setErrors] = useState([])
  // console.log("in movies", user)
  

  


  const MovieListCards = movies.map((movie) => 
    <MovieCard 
    key={movie.id}
    movie={movie} 
    // reviews={movie.reviews}
    />
  )


  return (
    <div>
      <MovieForm/>
      <br></br>
      <div>
        {MovieListCards}
      </div>
      <div>
        {/* {[errors]} */}
      </div>
    </div>
  )
}
export default Movies;

