export const loadMovies = () => {
    // type: "LOAD_MOVIES" ? 
    return (dispatch) => {
        // dispatch({type: "LOAD_MOVIES"})
        fetch("/movies")
        .then(response => response.json())
        .then(data => {
            const action = {type: "LOAD_MOVIES", payload: data}
            dispatch(action)
            console.log("in loadMovies action", data)
        })
        .catch(err => {
            dispatch({type: "movies_error", payload: err})
        }
    )}
}

export const addMovie = (movie) => {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

export const deleteMovie = (movie) => {
    return {
        type: "DELETE_MOVIE",
        payload: movie
    }
}

export const updateMovie = (movie) => {
    return {
        type: "UPDATE_MOVIE",
        payload: movie
    }
}


// export const addMovie = (movie) => {
//     return {
//       type: "ADD_MOVIE",
//       payload: movie
//     }
//   }

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

  