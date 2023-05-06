import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useSelector, useDispatch } from "react-redux";
// import {blogsReducer} from "./components/reducers/blogsReducer";
import {loadBlogs} from "./components/actions/blogs";
import {useNavigate} from "react-router-dom";
import {userProvider} from "./components/reducers/usersReducer";
import {addUser} from "./components/actions/user";
import {loadUser} from "./components/actions/user";
import { loadMovies } from "./components/actions/movies";

function App() {
  // const reduxState = useSelector((store) => store.blogsReducer);
  // const userState = useSelector((store) => store.user);
  
  // give react access and ensures its loaded properly
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => (store.user));
  const movies = useSelector((store) => (store.movies));
  
  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          dispatch(loadUser(user))
          dispatch(loadMovies(movies))
          // dispatch(loadMovies())
          // add user returns a function so thunk middleware can handle it
          // setUser(user);
          console.log("in app.js", user);
          console.log("in app.js", movies);
          navigate("/");
        });
      } 
    });
  }, [dispatch]);

  return (
    <div>
      <Navigation/>
      {user ? (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      ) : (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "login" element={<Login />} />
        <Route path = "signup" element={<Signup />} />
        </Routes>
      )}
    </div>
  )
}

export default App;

{/* <div> */}
    //   <Navigation user={user} setUser={setUser}/>
    //   {user ? (
    //     <Routes>
    //       <Route exact path="/" element={<Home user={user} />} />
    //       <Route path='*' element={<Home user={user} setUser={setUser}/>} />
    //     </Routes>
    //   ) : ( 
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/login" element={<Login setUser={setUser}/>} />
    //       <Route exact path="/signup" element={<Signup setUser={setUser}/>} />
    //       <Route path='*' element={<Login setUser={setUser}/>} />
    //       {/* <Route exact path="user/reviews" setUser={setUser} element={UserReviewDetails}/> */}
    //     </Routes>
    //   )}
    // </div>
     // useEffect(() => {
    //   // returns a function = thunk middleware takes over
    //   dispatch(loadBlogs());
    // }, [dispatch()])