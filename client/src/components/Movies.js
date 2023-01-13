import React, { useContext} from 'react'
import { UserContext } from './User';

 const Movies = () => {
    const { movies, loggedIn } = useContext(UserContext)

    // const movieList = movies.map((movie) => {
    //     return (
    //         <li key={movie.id}>
    //             <h3>{movie.title}</h3>
    //             <h3>{movie.genre}</h3>
    //             <h3>{movie.year}</h3>
    //         </li>
    //     )
    // }
    if (loggedIn) {
        return (
          <div>
            <h1>Movies</h1>
            <ul>
              {movies.map((movie) => {
                return (
                  <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <h3>{movie.genre}</h3>
                    <h3>{movie.summary}</h3>
                    <h3>{movie.director}</h3>
                    <h3>{movie.release_date}</h3>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      } else {
        return (
          <div>er Movies</div>
        )
      }
    }
    // Also, the code on the top is commented out and not being used, you can remove it.

export default Movies;