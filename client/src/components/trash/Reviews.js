import React, {  useContext } from 'react'
import { UserContext } from '../User';

 const Reviews = () => {
    const { reviews, loggedIn } = useContext(UserContext)
    // fetch to get index of reviews from database
    // form to post new review -> attach to each movie? 
    // fetch to post reviews to database
    // fetch to update reviews in database
    // fetch to delete reviews in database
    if (loggedIn) {
        // const movieReviews = movies.map((movie) => {
        //     return (
        //         <div>
        //             <h1>{movie.title}</h1>
        //             <ul>
        //                 {reviews.map((review) => {
        //                     if (review.movie_id === movie.id) {
        //                         return (
        //                             <li key={review.id}>
        //                                 <h3>{review.review}</h3>
        //                                 <h3>{review.like}</h3>
        //                             </li>
        //                         )
        //                     }
        //                 })}
        //             </ul>
        //         </div>
        //     )
        // })
        return (
            <div>
                <h1>Reviews</h1>
                <ul>
                    {reviews.map((review) => {
                        return (
                            <li key={review.movie}>
                                <h3>{review.review}</h3>
                                <h3>{review.like}</h3>
                                <h3>{review.movie_id}</h3>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return (<h3>Please Login or Signup</h3>)
    }

  
}
export default Reviews;