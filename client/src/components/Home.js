import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movies from './Movies';
// import {loadBlogs} from './actions/blogs';
import {loadMovies} from './actions/movies';
// import {loadMovies} from '.reducers/moviesReducer'
// import {increment, decrement} from './actions/counterAction';
import reducer from './reducers/reducer';



const Home = () => {
  const dispatch = useDispatch();
  // const movies = useSelector((store) => (store.movies));
  // const count = useSelector((store) => (store.counter.count));
  // why didnt anyone say "accessing the store" is the same as prop drilling. id be running state.counter.count if I was passing it down as a prop-in redux you're just using the useSelector hook, and passing in the same name as the reducer-which bundled in combined reducers, if yoou have to access the store just import the reducer file jesusu fucking christ why didnt anyone just say that. store.counter is specifying the counter key frim the key value pair in reducer- state.propIwant.specififcly

  const movies = useSelector((store) => (store.movies));
  console.log(movies)

  useEffect (() => {
    // dispatch(loadBlogs())
    
    // dispatch(loadMovies())

  }, [dispatch])
  
  return (
    <div>
        <>
          <h1> Welcome to..MOOOOVIES </h1>
          <h3>Check out Socials to find your tribe!</h3>
          <h3>Checkout Movies to add or comment on your favorite movie! </h3>
          <div>
      {/* <h1>Counter: {count}</h1> */}
      {/* <Movies/> */}
      {/* <button onClick={() => dispatch(increment())}>Increment</button> */}
      {/* <button onClick={() => dispatch(decrement())}>Decrement</button> */}
      </div>
          {/* <Movies/> */}
          {/* <Blogs/> */}
        </>
    </div>
  )
}

export default Home;
