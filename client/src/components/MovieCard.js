import React, { useState, useContext } from 'react';
import { UserContext } from './User';
// import ReviewContext from './ReviewContext';

function MovieCard() {
  const { movie } = useContext(UserContext);
  // const { addReview } = useContext(ReviewContext);

  // const [reviewText, setReviewText] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   addReview(movie.id, reviewText);
  // };

  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.genre}</p>
      <p>{movie.summary}</p>
      <p>{movie.director}</p>
      <p>{movie.release_date}</p>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Review:
          <input type="text" value={reviewText} onChange={e => setReviewText(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default MovieCard;