import React, { useContext } from 'react'
import { UserContext } from './User';
import MoviesList from './MoviesList';
const Home = () => {
    const { user, loggedIn } = useContext(UserContext)
  
  if (loggedIn) {
    return (
        <div>
            <h1>{user.username}'s Home Page</h1>
            {/* do i render  whole list or just the users */}
            <h3><MoviesList /></h3>
        </div>
    )
  } else {
    
    return (<h3>Please Login or Signup</h3>)
  }
}

export default Home;
// render list of reviews