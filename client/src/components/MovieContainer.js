import React, { useState, useEffect} from 'react'

 const MovieContainer = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://yts.mx/api/v2/list_movies.json')
          .then(response => response.json())
          .then(data => setMovies(data.movies))
          console.log(movies)
      }, []);

  return <MoviesList movies={movies} />;
  
}
export default MovieContainer;