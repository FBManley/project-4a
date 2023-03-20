import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import ReviewForm from './ReviewForm'
import ReviewDeatils from './ReviewDeatils'

// selected card to be edited removes new review

const MovieCard = ({reviews, movie, onDeleteMovie, enterMovieEditMode, user, setUser, setMovies, movies}) => {
  // destructure movie object
  const {id, title, genre, director, release_date, summary} = movie

  const addReview = (newReview) => {
    const updatedReview = [...movie.reviews, newReview]
    const updatedMovie = {...movie, reviews: updatedReview}
    const updatedMoviesCollection = movies.map((m) => {
      if (movie.id === m.id) {
        return updatedMovie
      } else {
        return m
      }
    })
    // setUser({...user, movies: updatedMoviesCollection})
    // setCurrentMovie(updatedMovie)
    setMovies(updatedMoviesCollection)
    // setReviewArray(updatedReview)

    // const newReviews = [...cardReviews.reviews, review]
    // cardReviews.reviews = newReviews

    console.log("updated movie", updatedReview)
    // console.log("curr",cardReviews)
    // console.log("updated movie", Movie)
    // setCardReviews(updatedReview)
    // setMovies({...movies, reviews: updatedReviewCollection})


  }
  // add review function
  // const addReview = (newReview) => {
  //   // console.log("in addReview", newReview)
  //   // console.log("in addReview", cardReviews)

  //   setCardReviews((cardReviews) => [...cardReviews, newReview])
  //   setMovies((movies) => {
  //     const newMovArray = movies.map(movie => {
  //       if (movie.id === newReview.movie_id) {
  //         return newReview
  //       } else {
  //         return movie
  //       }
  //     })
  //     return newMovArray
  //   })
  //   console.log(cardReviews)  
  // }
  
  // delete function for movie
  const handleMovieDeleteClick = (movie_id) => {
    fetch(`/movies/${movie_id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => onDeleteMovie(movie_id))
  }

  const handleEditClick = (movie_id) => {
    enterMovieEditMode(movie_id)
  }
  // const movieReviews = cardReviews.map((review) => {
  //   return (
  //     <div key={uuidv4()}>
  //       <h4>{review.review}</h4>
  //     </div>
  //   )
  // })
  return (
    <div>
      <h3>Title: {title}</h3>
      <h3>Genre: {genre}</h3>
      <h3>Release Date: {release_date}</h3>
      <h3>Description: {summary}</h3>
      <h3>Director: {director}</h3>
      <br></br>
      <button onClick={() => handleMovieDeleteClick(id)}>Delete</button>
      <button onClick={() => handleEditClick(id)}>Edit</button>
      <br></br>
      <h4>Reviews:</h4>
      {/* {movieReviews} */}
      <ReviewDeatils reviews={reviews} />
      <div>
          <ReviewForm key={uuidv4()} movie={movie} user={user}reviews={reviews} addReview={addReview} />
        </div>
    </div>
  )
  
}
export default MovieCard;







// import React, { useState, useEffect } from 'react'
// import {v4 as uuidv4} from 'uuid'
// import ReviewForm from './ReviewForm'
// // import ReviewDeatils from './ReviewDeatils'

// // selected card to be edited removes new review

// const MovieCard = ({reviews, movie, onDeleteMovie, enterMovieEditMode, user, setUser, setMovies, movies}) => {
//   const [currentMovie, setCurrentMovie] = useState([...reviews])
//   // destructure movie object
//   const {id, title, genre, director, release_date, summary} = movie

//   // state for reviews
// // const [cardReviews, setCardReviews] = useState([...reviews])
// // const [cardReviews, setCardReviews] = useState({reviews: []})
// // state is not iterable- currentMovie.reviews
// // `useEffect(() => {
// //   const singleMovie = movies.find(obj => obj.id == movie.id)
// //   setCurrentMovie(singleMovie)
// // }, [movies])`

// // const [reviewArray, setReviewArray] = useState([])
//   // reviews is an array of review objects
//   // must update movie object : {[], [], []} use movie_id to match new review to correct movie. 
//   const addReview = (review) => {
//     // get current movie updated with new review = updatedMovie
//     // const updatedReview = {...currentMovie.reviews, reviews: [...currentMovie, review]}
  
//     // const newReviews = [...currentMovie, review]
//     // currentMovie.reviews = newReviews
//     const updatedMovie = {...movie, reviews: [...reviews, review]}
//     // adding review to movies array- needs to be adding review to the correct movie
//     console.log("currentMovie", currentMovie)
//     // const filteredMovies = movies.filter(movie => movie.id !== review.movie_id)
//     // const newMovies = [...filteredMovies, currentMovie]
//     const updatedMovies = movies.map((movie) => {
//       if (currentMovie.id === movie.id) {
//         return updatedMovie
//       } else {
//         return movie
//       }
//     })
//     // setUser({...user, movies: updatedMoviesCollection})
//     setCurrentMovie(currentMovie)
//     setMovies(updatedMovies)
//     // setReviewArray(updatedReview)

//     // const newReviews = [...cardReviews.reviews, review]
//     // cardReviews.reviews = newReviews

//     // setCardReviews(updatedReview)
//     // setMovies({...movies, reviews: updatedReviewCollection})


//   }
//   // add review function
//   // const addReview = (newReview) => {

//   //   setCardReviews((cardReviews) => [...cardReviews, newReview])
//   //   setMovies((movies) => {
//   //     const newMovArray = movies.map(movie => {
//   //       if (movie.id === newReview.movie_id) {
//   //         return newReview
//   //       } else {
//   //         return movie
//   //       }
//   //     })
//   //     return newMovArray
//   //   })
//   // }
  
//   // delete function for movie
//   const handleMovieDeleteClick = (movie_id) => {
//     fetch(`/movies/${movie_id}`, {
//       method: 'DELETE'
//     })
//     .then(response => response.json())
//     .then(() => onDeleteMovie(movie_id))
//   }

//   const handleEditClick = (movie_id) => {
//     enterMovieEditMode(movie_id)
//   }
//   const movieReviews = currentMovie.map((review) => {
//     return (
//       <div key={uuidv4()}>
//         <h4>{review.review}</h4>
//       </div>
//     )
//   })
//   return (
//     <div>
//       <h3>Title: {title}</h3>
//       <h3>Genre: {genre}</h3>
//       <h3>Release Date: {release_date}</h3>
//       <h3>Description: {summary}</h3>
//       <h3>Director: {director}</h3>
//       <br></br>
//       <button onClick={() => handleMovieDeleteClick(id)}>Delete</button>
//       <button onClick={() => handleEditClick(id)}>Edit</button>
//       <br></br>
//       <h4>Reviews:</h4>
//       {movieReviews}
//       {/* <ReviewDeatils reviews={reviews} /> */}
//       <div>
//           <ReviewForm key={uuidv4()} movie={movie} user={user}reviews={reviews} addReview={addReview} />
//         </div>
//     </div>
//   )
  
// }
// export default MovieCard;














// import React, { useState } from 'react'
// import {v4 as uuidv4} from 'uuid'
// import ReviewForm from './ReviewForm'

// // selected card to be edited removes new review

// const MovieCard = ({movies, movie, onDeleteMovie, enterMovieEditMode, user, setMovies, setUser}) => {
//   // destructure movie object
//   const {id, title, genre, director, release_date, summary} = movie

//   // state for reviews

// const [cardReviews, setCardReviews] = useState({reviews: []})
// // const [updatedReview, setUpdatedReview] = useState({})
 
//   // reviews is an array of review objects
//   // console.log("imported review from movie object",reviews)
//   // add review function
//   // const addReview = (newReview) => {
//   //   // console.log("in addReview", newReview)
//   //   // console.log("in addReview", cardReviews)
//   //   // q. I need to add newReview to full movie object


//   //   setCardReviews((cardReviews) => [...cardReviews.reviews, newReview])
//   //        const updatedReviewsArray = {...movies, reviews: cardReviews}
//   //   // must identify movie in movies array and add newReview to it
//   //   // q. how do I identify the movie in the movies array that Im adding the review to?

//   //   // setMovies((movies) => {
//   //     // identify movie that newReview is being added to

//   //   //   const newMovArray = movies.map(movie => {
//   //   //     if (movie.id === newReview.movie_id) {
//   //   //       return newReview
//   //   //     } else {
//   //   //       return movie
//   //   //     }
//   //   //   })
//   //   //   return newMovArray
//   //   // })
//   //   // console.log(cardReviews)  
//   // }
//   const addReview = (review) => {
//     const updatedReviewsArray = {...cardReviews.reviews, review}
//     const updatedMovie = {...cardReviews, reviews: updatedReviewsArray}
//     const updatedMoviesCollection = movies.map((movie) => {
//       if (cardReviews.id === movie.id) {
//         return updatedMovie
//       } else {
//         return movie
//       }
//     })
//     setUser({...user, movies: updatedMoviesCollection})
//     setMovies(updatedMoviesCollection)
//     setCardReviews(updatedMovie)
//   }
  
//   // delete function for movie
//   const handleMovieDeleteClick = (movie_id) => {
//     fetch(`/movies/${movie_id}`, {
//       method: 'DELETE'
//     })
//     .then(response => response.json())
//     .then(() => onDeleteMovie(movie_id))
//   }

//   const handleEditClick = (movie_id) => {
//     enterMovieEditMode(movie_id)
//   }
//   const movieReviews = cardReviews.map((movie) => {
//     return (
//       <div key={uuidv4()}>
//         <h4>{movie.review}</h4>
//       </div>
//     )
//   })
  
//   return (
//     <div>
//       <h3>Title: {title}</h3>
//       <h3>Genre: {genre}</h3>
//       <h3>Release Date: {release_date}</h3>
//       <h3>Description: {summary}</h3>
//       <h3>Director: {director}</h3>
//       <br></br>
//       <button onClick={() => handleMovieDeleteClick(id)}>Delete</button>
//       <button onClick={() => handleEditClick(id)}>Edit</button>
//       <br></br>
//       <h4>Reviews:</h4>
//       {movieReviews}
//       {/* \reviews={reviews} */}
//       <div>
//           <ReviewForm key={uuidv4()} movie={movie} user={user} addReview={addReview} />
//         </div>
//     </div>
//   )
  
// }
// export default MovieCard;
