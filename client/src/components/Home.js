import React from 'react'
import Movies from './Movies';


const Home = ({user}) => {
  return (
    <div>
      {user ? (
        <>
          <h1>{user.username}'s Home Page</h1>
          <Movies user={user}/>
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