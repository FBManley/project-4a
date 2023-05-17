import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => (store.user));
  // q. how do i dispatch user to the store?
  // a. dispatch(loadUser())
  const movies = useSelector((store) => (store.movies));
  console.log("user-in App", user)
  console.log("movies-in App", movies)




  // q. why can I see user and movies in my redux store but not in the console.log?
  // a. because I'm not dispatching them to the store
  // q. can you show me how to dispatch them to the store so I can see them in the console.log?

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
  useEffect(() => {
    dispatch(loadUser(user))
    dispatch(loadBlogs())
    dispatch(loadMovies())
  }, [dispatch])
  // q. can you walk me through line 73? what is happening here?
  // a. useEffect is a hook that runs after the component renders
  // q. what is the second argument in useEffect?
  // a. the second argument is an array of dependencies
  // q. what is a dependency?
  // a. a dependency is a variable that useEffect is dependent on
  // q. what is the dependency in this case?
  // a. the dependency is dispatch
  // q. what is dispatch?
  // a. dispatch is a function that is used to dispatch an action to the store
  // q. what is an action?
  // a. an action is an object that has a type and a payload
  // q. what is a payload?
  // a. a payload is the data that is being sent to the store
  // q. the data that is being sen to the store is the user?
  // a. yes
  // q. is movies being sent to the store?
  // a. yes
  // q. I need to access the store now to display movies. 
  // a. you can use useSelector to access the store
  // q. how do I use useSelector?
  // a. so in this component I am both sending info tothe store and accessing the store?
  // a. yes
  // q. why am I not seeing the user object displayed?
  // a. because you are not dispatching it to the store
  // q. how do I dispatch it to the store?
  // a. dispatch(loadUser(user))
  // q. I am doing that in the usweEffect hook?
  // a. yes
  // q. why am I not seeing the user object displayed?
  

  return (
    <div>
      <Navigation/>
      {/* <Container/> */}
       <h1>User: {user}</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
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