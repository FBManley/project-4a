import React, { useState, useContext } from 'react';
import ReviewContext from './ReviewContext';

function MovieCard({ movie }) {
  const { addReview } = useContext(ReviewContext);

  const [reviewText, setReviewText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addReview(movie.id, reviewText);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Review:
          <input type="text" value={reviewText} onChange={e => setReviewText(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MovieCard;