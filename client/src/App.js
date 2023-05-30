import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useSelector, useDispatch } from "react-redux";
// import {blogsReducer} from "./components/reducers/blogsReducer";
import {useNavigate} from "react-router-dom";
// import {userProvider} from "./components/reducers/usersReducer";
// import {loadUser} from "./components/actions/user";
import { loadMovies } from "./components/actions/movies";
// import { moviesReducer } from "./components/reducers/moviesReducer";
import { addUser } from "./components/actions/user";
// import NoRoutes  from "./components/NoRoutes";
import About from "./components/About";
import Movies from "./components/Movies";
import UsersList from "./components/UsersList";
import { loadCurrentUser, loadUsers } from "./components/actions/users";
import { NavigationContainer } from "./components/styles/StyledNav";
import Socials from "./components/Socials";
import { loadSocials } from "./components/actions/socials";
import { loadReviews } from "./components/actions/reviews";

function App() {
  // const reduxState = useSelector((store) => store.blogsReducer);
  const user= useSelector((store) => store.usersReducer.currentUser);
  console.log("in App", user);
  // give react access and ensures its loaded properly
  const dispatch = useDispatch();
  // const navigate = useNavigate();


  
  useEffect(() => {
    dispatch(loadMovies())
    dispatch(loadUsers())
    dispatch(loadCurrentUser())
    // dispatch(loadSocials())
    dispatch(loadReviews())
  }, [dispatch]);


  return (
    <div>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/users" element={<UsersList/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/socials" element={<Socials/>}/>
        <Route path="/signup" element={<Signup />} />
       </Routes>
    </div>
  )
}

export default App;
