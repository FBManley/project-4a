import React, { useState, useContext } from 'react';
import { UserContext } from './User';

// import {MovieCardWrapper} from '../styles/StyledMovie';
// import { MovieCardWrapper } from '../styles/StyledMovie';
// import ReviewContext from './ReviewContext';

function MovieCard({movie, reviews}) {
    const [review, setReview] = useState('');
    const [liked, setLiked] = useState(false);
    // console.log("in movie card", movie)
//   const { title, genre, summary, director, release_date } = useContext(UserContext);
  // const { addReview } = useContext(ReviewContext);
  const { updateUser } = useContext(UserContext);
  
  const handleSubmit = e => {
    e.preventDefault();
    updateUser(user => {
      return {
        ...user,
        reviews: [...user.reviews, { movieId: movie.id, review, liked }]
      }
    });
    // reset form state
    setReview('');
    setLiked(false);
  }

  return (
    <div>
        <p>{movie.title}</p>
        <p>{movie.genre}</p>
        <p>{movie.summary}</p>
        <p>{movie.director}</p>
        <p>{movie.release_date}</p> 
        <p>{reviews}</p> 
        <form onSubmit={handleSubmit}>
        <textarea value={review} onChange={e => setReview(e.target.value)} />
        <button type="submit">Submit Review</button>
        <button onClick={() => setLiked(!liked)}>Like</button>
      </form>
    </div>
  );
}

export default MovieCard;
{/* movie object sent back does not have attatched reviews.. */}
      {/* <p>{movie.review}</p> */}
      {/* <form onSubmit={handleSubmit}>
        <label>
          Review:
          <input type="text" value={reviewText} onChange={e => setReviewText(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form> */}