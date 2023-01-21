import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { UserContext } from '../User';

 const MoviesList = () => {
  // const [list, setList] = useState([])
    // const [movie, setMovie] = useState([])
    const { movies,  reviews  } = useContext(UserContext)
    // const moviesList = movies.map((movie) => {console.log(movie)})
    // key={movie.id}  reviews={reviews}
    console.log("inList-reviews", reviews)
    return (
        <div>
        
          {/* {movies.map((movie) => <MovieCard movie={movie} key={movie.id} user={user}/>)} */}
          {movies.map((movie, index) => {
            const movieReviews = reviews.filter(review => review.movie_id === movie.id)
            return <MovieCard movie={movie} key={index} movieReviews={movieReviews}  />
          })}
          
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