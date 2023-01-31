import React, { useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import MovieCard from './MovieCard'

 const Movies = ({user}) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/movies')
    .then((response) => {
        response.json().then((movies) => setMovies(movies))
        console.log(movies)
    }, [])
    // returned function use as cleanup in a useEffect will be called on unmount/navigate away
  })
  return (
    <div>Movies List
      <div>
        {movies.map((movie) => (<MovieCard key={uuidv4()} user={user} movie={movie}/>))}
      </div>
    </div>
  )
}
export default Movies;
