import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { UserContext } from './User';

 const MoviesList = () => {
    // const [movie, setMovie] = useState([])
    const { movies, user, reviews  } = useContext(UserContext)
    // const moviesList = movies.map((movie) => {console.log(movie)})
    
    return (
        <div>
        <UserContext.Provider value={user}>
          {movies.map(movie => <MovieCard movie={movie} key={movie.id}  reviews={reviews} />)}
        </UserContext.Provider>
          
        </div>
    )
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
      
    }
    // Also, the code on the top is commented out and not being used, you can remove it.

export default MoviesList;