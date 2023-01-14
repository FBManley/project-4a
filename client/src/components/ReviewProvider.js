import React, { useState } from 'react';
import ReviewContext from './ReviewContext';

function ReviewProvider({ children }) {
  const [reviews, setReviews] = useState([]);

  const addReview = (movieId, reviewText) => {
    setReviews([...reviews, { movieId, reviewText }]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
}

export default ReviewProvider;