import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { deleteUser } from './actions/user'
import { logoutUser } from './actions/users'
import { NavbarLink } from "../components/styles/StyledNav";

 const Navigation = () => {
    // const user = useSelector((store) => store.user)
    const  currentUser  = useSelector((store) => store.usersReducer.currentUser) 
 
    // START HERE FIND WHERE TO INITIATE LOGGEDIN TO FALSE AND RENDER LINKS BASED ON THAT
    console.log("in navigation", currentUser)
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logoutUser())
    }
  //  const loggedInLinks = () => {
  //   return (
  //     <div>
  //       <li></li>
  //     </div>
  //   )
  //  }
    return (
        <div>
          <div className="Navigation">
            {currentUser ? (
              <ul>
                
                <li><NavbarLink to='/'>Home</NavbarLink></li>  
                <li><NavbarLink to='/login' onClick={logOut}>Logout</NavbarLink></li> 
                <li><NavbarLink to='/users'>Users</NavbarLink></li>
                <li><NavbarLink to='/movies'>Movies</NavbarLink></li>
                <li><NavbarLink to= '/socials'>Socials</NavbarLink></li>

                {/* <li><NavLink to='/logout'> Logout<NavLink/> </li> */}
              </ul>
            ) : (
              <ul>
                <li><NavbarLink to='/signup'>Sign-Up</NavbarLink></li>
                <li><NavbarLink to='/login'>Log In</NavbarLink></li>
                <li><NavbarLink to='/about'>About</NavbarLink></li> 
              </ul>
            ) }
          </div>
        </div>
    )

}
export default Navigation;
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