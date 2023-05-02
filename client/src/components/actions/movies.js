export const loadMovies = () => {
    return dispatch => {
        fetch('/movies')
        .then(response => response.json())
        .then(movies => {
            const action = {type: "LOAD_MOVIES", payload: movies}
            dispatch(action)
        })
    }
}

const addComment = (comment, movieId) => {
    
}





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

  