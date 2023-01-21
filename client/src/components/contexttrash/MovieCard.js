// import React, { useState, useContext } from 'react';
// // import { UserContext } from './User';
// function MovieCard({movie, movieReviews }) {
//     // const { user } = useContext(UserContext);
//     const [review, setReview] = useState('');
//     const [liked, setLiked] = useState(false);
//     // console.log("in movie card", movie, movieReviews, user)
//     console.log(movie.id.review)

//   return (
//     <div>
//         <p>Title: {movie.title}</p>
//         <p>Genre: {movie.genre}</p>
//         <p>Summary: {movie.summary}</p>
//         <p>Director: {movie.director}</p>
//         <p>Release Date: {movie.release_date}</p> 
//         <div>

//             {movieReviews && movieReviews.map((mr) => (
//                 <div key={mr.id}>
//                     <p>{mr.review}</p>
//                     <p>{mr.liked}</p>
//                 </div>
//             ))}
//         </div>
//         <form >
//         <textarea value={review} onChange={e => setReview(e.target.value)} />
//         <button type="submit">Submit Review</button>
//         <button onClick={() => setLiked(!liked)}>Like</button>
//       </form>
//     </div>
//   );
// }

// export default MovieCard;
{/* movie object sent back does not have attatched reviews.. */}
      {/* <p>{movie.review}</p> */}
      {/* <form onSubmit={handleSubmit}>
        <label>
          Review:
          <input type="text" value={reviewText} onChange={e => setReviewText(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form> */}
      //   const { title, genre, summary, director, release_date } = useContext(UserContext);
  // const { addReview } = useContext(ReviewContext);
//   const { updateUser } = useContext(UserContext);
  
//   const handleSubmit = e => {
//     e.preventDefault();
//     updateUser(user => {
//       return {
//         ...user,
//         reviews: [...user.reviews, { movieId: movie.id, review, liked }]
//       }
//     });
//     // reset form state
//     setReview('');
//     setLiked(false);
//   }