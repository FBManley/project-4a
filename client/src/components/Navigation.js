import React from 'react'
// import { NavLink } from "react-router-dom";
import { NavbarLink, NavigationContainer } from './styles/StyledNav';

 const Navigation = () => {
  return (
    <div>
        <NavigationContainer>
            <NavbarLink to="/" >Home</NavbarLink>
            <NavbarLink to="/login" >Login</NavbarLink>
            <NavbarLink to="/signup" >Signup</NavbarLink>
        </NavigationContainer>
    </div>
  )
}
export default Navigation;