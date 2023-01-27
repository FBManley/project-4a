import React from 'react'
import { NavLink } from 'react-router-dom'

 const Navigation = ({user, setUser}) => {

    // const navigate = useNavigate()
    // delete session hash
    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            setUser(null)
        })
    }
    return (
        <div>
            {user ? (
          <div className="Navigation">
            <ul>
              <li><NavLink onClick={logoutUser}>Logout</NavLink></li>
              <li><NavLink to='/'>Home</NavLink></li>       
            </ul>
          </div>
          ):(
          <div className="Navigation">
            <ul>
              <li><NavLink to='/signup'>Sign-Up</NavLink></li>
              <li><NavLink to='/login'>Log In</NavLink></li>
              <li><NavLink to='/'>Home</NavLink></li>
            </ul>
          </div>
        )}
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