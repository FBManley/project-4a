import React, { useContext } from 'react'
import { UserContext } from './UserA'

 const HomeA = () => {
    const { user, loggedIn} = useContext(UserContext)
    console.log(user)
    if (loggedIn) {
        return (
        <div><h1>{user.username}'s Home Page</h1></div>
        )
    } else {
        return (<h3>Please Login or Signup</h3>)
    }
}
export default HomeA