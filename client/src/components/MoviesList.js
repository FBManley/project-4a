import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { UserContext } from './User';

 const MoviesList = () => {
    // const [movie, setMovie] = useState([])
    const { movies, user, reviews  } = useContext(UserContext)
    // const moviesList = movies.map((movie) => {console.log(movie)})
    // key={movie.id}  reviews={reviews}
    return (
        <div>
        
          {movies.map((movie, index) => <MovieCard movie={movie} key={index} reviews={reviews.filter((review) => review.movie === movie.id)}
          user={user}/>)}
        
          
        </div>
    )
    }
    
export default MoviesList;
// <h1>Movies</h1>
    //         <ul>
    //             {movies.map((movie) => {
    //                 return (
    //                     <li key={movie.id}>
    //                         <h3>{movie.title}</h3>
    //                         <h3>{movie.genre}</h3>
    //                         <h3>{movie.summary}</h3>
    //                         <h3>{movie.director}</h3>
    //                         <h3>{movie.release_date}</h3>
    //                     </li>
    //                 )
    //             })}
    //         </ul>
    // movies.map((movie) => {
    //     return (
    //       <li key={movie.id}>
    //         <h3>{movie.title}</h3>
    //         <h3>{movie.genre}</h3>
    //         <h3>{movie.summary}</h3>
    //         <h3>{movie.director}</h3>
    //         <h3>{movie.release_date}</h3>
    //       </li>
    //     )
    //   })
    //     {
    //     return (
    //       <div>
    //         <h1>Movies</h1>
    //         <ul>
    //         {moviesList}
    //         </ul>
    //       </div>
    //     )
    //   }