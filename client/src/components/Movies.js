import React, { useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Movie from './Movie'

 const Movies = ({user}) => {
  const [movies, setMovies] = useState([])
  const [errorsList, setErrorsList] = useState([])

  useEffect(() => {
    fetch('/movies')
    .then((response) => {
      if (response.ok) {
        response.json().then((movies) => setMovies(movies))
        console.log(movies)
      } else {
        response.json().then((error) => setErrorsList(error.error));
      }
    }, [])
    // returned function use as cleanup in a useEffect will be called on unmount/navigate away
  })
  return (
    <div>Movies
      <div>
        {movies.map((movie) => (<Movie key={uuidv4()} user={user}/>))}
        {errorsList}
      </div>
    </div>
  )
}
export default Movies;
