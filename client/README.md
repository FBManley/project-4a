# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`


NOTES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/safekeeping/Home";
// import Navigation from "./components/safekeeping/Navigation";

<!-- function App() {
  return (
      <Router>
        <Navigation/>
        <div className="App">      
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        </div>    
      </Router>
  );
}

export default App; -->



Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

<!-- const MovieCard = ({user, movie, handleReviewsUpdate, handleDelete}) => {
  // state for reviews
  const [reviews, setReviews] = useState([])
  const [reviewToEdit, setReviewToEdit] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const review = event.target[0].value
    const movie_id = movie.id
    const user_id = user.id
    const reviewObj = {
      review,
      movie_id,
      user_id
    }
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reviewObj
      }),
    })
    .then((response) => {
      console.log("response",response)
      response.json().then((review) => {
        setReviews([...reviews, review])
        handleReviewsUpdate(review)
      })
    })    
  }
   // handleEditReview function
   const handleEditReview = (review) => {
    if (review.user_id === user.id) {
      fetch(`/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({review}),
      })
      .then((response) => {
        if (response.ok) {
          const updatedReviews = reviews.map((r) => (r.id === review.id ? review : r))
          setReviews(updatedReviews)
          setReviewToEdit(null)
        }
      })
    }
  }
  // called when a user clicks the "Edit" button to acces the review state i want to click
  const handleEdit = (review) => {
    setReviewToEdit(review)
  }

  return (
    <div>
      <h3>Title: {movie.title}</h3>
      <h3>Genre: {movie.genre}</h3>
      <h3>Release Date: {movie.release_date}</h3>
      <h3>Description: {movie.summary}</h3>
      <h3>Director: {movie.director}</h3>
      <br></br>
      Reviews:
      {movie.reviews.map(review => (
        <div key={uuidv4()}>
          {review.user_id === user.id ? (
            <div>
              {review.user_id}: {review.review}
              <button onClick={() => handleDelete(review)}>Delete</button>
              <button onClick={() => handleEditReview(review)}>Edit</button>
            </div>
          ) : (
            <div>{review.user_id}: {review.review}</div>
          )}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a review"/>
        <button type="submit">Add Review</button>
      </form>
    </div>
  )
}
export default MovieCard; -->