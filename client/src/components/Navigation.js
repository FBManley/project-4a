import React, { useContext } from 'react'
import { UserContext } from './User';
import { NavLink, useNavigate } from 'react-router-dom'

 const Navigation = () => {
    const {user, logout, loggedIn} = useContext(UserContext)
    const navigate = useNavigate()
    // delete session hash
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
    if (loggedIn) {
        return (
            <div>
                <h3>Hello {user.username}</h3>
                <button onClick={logoutUser}>Logout</button>
                <NavLink to="/reviews" ><button>My Reviews</button></NavLink>
                <NavLink to="/movies" ><button>Movies</button></NavLink>
            </div>
        )
    } else {
        return (
         <div>
            <NavLink to="/" ><button>Home</button></NavLink>
            <NavLink to="/login" ><button>Login</button></NavLink>
            <NavLink to="/signup" ><button>Signup</button></NavLink>
        </div>   
        )
    }
}
export default Navigation;