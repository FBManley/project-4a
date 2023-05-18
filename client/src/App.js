import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
// import Signup from "./components/Signup";
import { useSelector, useDispatch, connect } from "react-redux";
// import {blogsReducer} from "./components/reducers/blogsReducer";
import {loadBlogs} from "./components/actions/blogs";
import {useNavigate} from "react-router-dom";
// import {userProvider} from "./components/reducers/usersReducer";
import { loadUser } from "./components/actions/user";
// import {loadUser} from "./components/actions/user";
import { loadMovies } from "./components/actions/movies";
// import { moviesReducer } from "./components/reducers/moviesReducer";

function App() {
  // const reduxState = useSelector((store) => store.blogsReducer);
  // const userState = useSelector((store) => store.user);
  
  // give react access and ensures its loaded properly
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const user = useSelector((store) => (store.user));
  // const count = useSelector((store) => store.counter);
  // const movies = useSelector((store) => (store.movies));
  // console.log("user-in App", user)
  // console.log("movies-in App", movies)

 
  // const movies = useSelector((store) => (store.movies));
  // const Component = () => <h1>movies component</h1>
  // const Container = connect()(Component)
  // const store = createStore(moviesReducer)
  
//   const moviesReducer = (state = [], action) => {
//     switch (action.type) {
//         case "LOAD_MOVIES":
//             return action.payload
//         case "ADD_MOVIE":
//             return [...state, action.payload]
//         case "DELETE_MOVIE":
//             return state.filter(movie => movie.id !== action.payload.id)
//         default:
//             return state
//     }
// }
  
  // useEffect(() => {
  //   fetch('/me').then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => {
  //         dispatch(loadUser(user))
  //         // dispatch(loadMovies(movies))
  //         // dispatch(loadMovies())
  //         // add user returns a function so thunk middleware can handle it
  //         // setUser(user);
  //         console.log("in app.js", user);
  //         // console.log("in app.js", movies);
  //         navigate("/");
  //       });
  //     } 
  //   });
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(loadUser(user))
  //   // dispatch(loadBlogs())
  //   // dispatch(loadMovies())
  // }, [dispatch])


  // console.log(count)
  return (
    <div>
      {/* <Navigation/> */}
      {/* <Container/> */}
       {/* <h1>User: {user}</h1> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
      <Home />
      
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "signup" element={<Signup />} />
        </Routes> */}
      
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