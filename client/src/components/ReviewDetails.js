import React from 'react';
// import { useSelector } from 'react-redux';

const ReviewDetails = ({reviews}) => {
  // const reviews = useSelector((state) => state.reviews);
  console.log("in review details", reviews);
  if (!reviews || reviews.length === 0) {
    return <div>No reviews available.</div>;
  }

  const reviewDetails = reviews.map((review) => (
    <div key={review.id}>
      <h4>{review.review}</h4>
    </div>
  ));

  console.log("in details", reviews);

  return <div>{reviewDetails}</div>;
};

export default ReviewDetails;