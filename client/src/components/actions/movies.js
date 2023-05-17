export const loadMovies = () => {
    // type: "LOAD_MOVIES" ? 
    return (dispatch) => {
        dispatch({type: "movies_loading"})
        fetch("/movies")
        .then(response => response.json())
        .then(movies => {
            dispatch({type: "movies_loaded", payload: movies})
            console.log("in loadMovies action", movies)
        })
        .catch(err => {
            dispatch({type: "movies_error", payload: err})
        }
    )}
}


export const addMovie = (user) => {
    return {
      type: "ADD_USER",
      payload: user
    }
  }

// payload is data from backed, dispatched to reducer
// const addComment = (comment, movieId) => {
    
// }



// mote

// import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import MovieCard from '../MovieCard';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Movies = () => {
//     const movies = useSelector((store) => store.movies);
//     const dispatch = useDispatch();

//     console.log("in movies", movies);
//     const MovieListCards = movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>);

//     return (
//         <div>
//             <h1>Movies</h1>
//             {MovieListCards}
//         </div>

//     )

// }

  