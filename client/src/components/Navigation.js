import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from './actions/user'

 const Navigation = () => {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            dispatch(deleteUser())
        })
    }
    return (
        <div>
          <div className="Navigation">
            {user ? (
              <ul>
                <li><NavLink to='/'>Home</NavLink></li>  
                <li><NavLink to='signin' onClick={logoutUser}>Logout</NavLink></li> 
              </ul>
            ) : (
              <ul>
                <li><NavLink to='/signup'>Sign-Up</NavLink></li>
                <li><NavLink to='/login'>Log In</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li> 
              </ul>
            ) }
          </div>
        </div>
    )
    // if (loggedIn) {
    //     return (
    //         <div>
    //             <h3>Hello {user.username}</h3>
    //             <button onClick={logoutUser}>Logout</button>
    //             {/* <NavLink to="/reviews" ><button>My Reviews</button></NavLink> */}
    //             <NavLink to="/movies" ><button>Movies</button></NavLink>
    //         </div>
    //     )
    // } else {
    //     return (
    //      <div>
    //         <NavLink to="/" ><button>Home</button></NavLink>
    //         <NavLink to="/login" ><button>Login</button></NavLink>
    //         <NavLink to="/signup" ><button>Signup</button></NavLink>
    //     </div>   
    //     )
    // }
}
export default Navigation;