import React, { useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useSelector, useDispatch } from "react-redux";
import {blogsReducer} from "./components/reducers/blogsReducer";
import {loadBlogs} from "./components/actions/blogs";
import {BrowserRouter } from 'react-router-dom';
import {userProvider} from "./components/reducers/userReducer";
import {addUser} from "./components/actions/user";
import {loadUser} from "./components/actions/user";

function App() {
  // const reduxState = useSelector((store) => store.blogsReducer);
  // const userState = useSelector((store) => store.user);
  
  // give react access and ensures its loaded properly
  const dispatch = useDispatch();
  const user = useSelector((store) => (store.user));
  console.log("in app", user);
  useEffect(() => {
    fetch('/me')
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          // 
          dispatch(addUser(user))
          // add user returns a function so thunk middleware can handle it
          // setUser(user);
          console.log(user);
        });
      } else {
        // setUser(null);
      }
    });
  }, [dispatch]);
 

  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      {user ? (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      ) : (
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path = "*" element={<Login />} />
        </Routes>
      )}
      </BrowserRouter>
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