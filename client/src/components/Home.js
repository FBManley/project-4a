import React, { useContext } from 'react'
import { UserContext } from './User';

const Home = () => {
    const { user, loggedIn } = useContext(UserContext)
  
  if (loggedIn) {
    return (
        <div>
            <h1>{user.username}'s Home Page</h1>
        </div>
    )
  } else {
    return (<h3>Please Login or Signup</h3>)
  }
}

export default Home;
// render list of reviews