import React, { useContext } from 'react';
import { UserContext } from './UserA';
import { NavLink, useNavigate } from 'react-router-dom'

const NavA = () => {
    const {user, logout, loggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

  return (
    <div>
        <NavLink to="/"><button>Home</button></NavLink>
        <NavLink to="/login"><button>Login</button></NavLink>
        <NavLink to="/login"><button onClick={logoutUser}>Logout</button></NavLink>
        <h3>Hello {user.username}</h3>
    </div>
  )
}
export default NavA