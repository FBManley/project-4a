import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movies from './Movies';
// import {loadBlogs} from './actions/blogs';
import {loadMovies} from './actions/movies';
// import {loadMovies} from '.reducers/moviesReducer'
import {loadBlogs} from './actions/blogs';

// import moviesReducer from './reducers/moviesReducer';
import blogsReducer from './reducers/blogsReducer';


const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => (store.movies));
  useEffect (() => {
    dispatch(loadBlogs())
    
    dispatch(loadMovies(movies))

  }, [dispatch])

  return (
    <div>
        <>
          <h1> Home Page</h1>
          <Movies/>
          {/* <Blogs/> */}
        </>
    </div>
  )
}

export default Home;