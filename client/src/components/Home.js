import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Movies from './Movies';
// import {loadBlogs} from './actions/blogs';
import {loadMovies} from './actions/movies';
// import blogs from './reducers/blogs';


const Home = () => {
  const dispatch = useDispatch();
  useEffect (() => {
    // dispatch(loadBlogs())
    dispatch(loadMovies())
  }, [dispatch])

  return (
    <div>
        <>
          <h1> Home Page</h1>
          <Movies/>
          {/* <blogs/> */}
        </>
    </div>
  )
}

export default Home;