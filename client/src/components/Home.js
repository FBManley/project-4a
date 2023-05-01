import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Movies from './Movies';
import {loadBlogs} from './actions/blogs';
import {loadMovies} from './actions/movies';
// import blogs from './reducers/blogs';


const Home = ({user}) => {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(loadBlogs())
    dispatch(loadMovies())
  })

  return (
    <div>
      {user ? (
        <>
          <h1>{user.username}'s Home Page</h1>
          <Movies/>
          {/* <blogs/> */}
        </>
      ) : (
        <div>
          <h1>Home Page: Please login or signup</h1>
        </div>
      )}
    </div>
  )
}

export default Home;