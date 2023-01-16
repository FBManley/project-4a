// ReviewContext.js
import { createContext } from 'react';

const ReviewContext = createContext({
  reviews: [],
  addReview: () => {},
});

export default ReviewContext;