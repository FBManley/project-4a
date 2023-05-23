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
// import {loadUser} from "./components/actions/user";
import { loadMovies } from "./components/actions/movies";
// import { moviesReducer } from "./components/reducers/moviesReducer";
import { addUser } from "./components/actions/user";
// import NoRoutes  from "./components/NoRoutes";
import About from "./components/About";
import Movies from "./components/Movies";
import UsersList from "./components/UsersList";
import { loadCurrentUser, loadUsers } from "./components/actions/users";

function App() {
  // const reduxState = useSelector((store) => store.blogsReducer);
  const user= useSelector((store) => store.user);
  console.log("in App", user);
  // give react access and ensures its loaded properly
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const count = useSelector((store) => store.counter);
  // const movies = useSelector((store) => (store.movies));
  // console.log("user-in App", user)
  // console.log("movies-in App", movies)

  
  useEffect(() => {
    dispatch(loadMovies())
    dispatch(loadUsers())
    dispatch(loadCurrentUser())
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(addUser(user))
  //   // dispatch(loadBlogs())
  //   // dispatch(loadMovies())
  // }, [dispatch])

  return (
    <div>
      <Navigation/>
      {/* <Container/> */}
       {/* <h1>Welcome, {user}</h1> */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/users" element={<UsersList/>}/>
       </Routes>
       {/* {user ? (
        <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />

        <Route path="/logout" element={<Logout />} />
      </Routes>
       ) : (
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/about" element={<About />} />
        <Route path = "signup" element={<Signup />} />
        </Routes>
       )
      } */}
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
// fetch('/me').then((response) => {
//   if (response.ok) {
//     response.json().then((user) => {
//       // dispatch(addUser(user))
//       dispatch(loadUsers())
//       // dispatch(loadCurrentUser(user)
//       // dispatch(loadMovies(movies))
//       // dispatch(loadMovies())
//       // add user returns a function so thunk middleware can handle it
//       // setUser(user);
//       console.log("in app.js", user);
//       // console.log("in app.js", movies);
//       navigate("/");
//     });
//   } 
// });