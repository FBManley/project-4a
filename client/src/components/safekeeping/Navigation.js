import React, { useContext } from 'react'
// import { UserContext } from "../context/user"
import { UserContext } from './User';
// import { NavLink } from "react-router-dom";
// import { NavbarLink, NavigationContainer, usedNavigate } from './styles/StyledNav';
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
            </div>
        )
    } else {
        <div>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/login" ><button>Login</button></NavLink>
            <NavLink to="/signup" ><button>Signup</button></NavLink>
        </div>
    }
}
export default Navigation;