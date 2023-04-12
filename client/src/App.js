import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useSelector } from "react-redux";
import {postReducer} from "./components/reducers/postsReducer";

function App() {
  const [user, setUser] = useState([]);
  const reduxState = useSelector((store) => store.postReducer);
  console.log("in app",reduxState);
  // useEffect(() => {
  //   fetch('/me')
  //   .then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => {
  //         setUser(user);
  //         // console.log(user);
  //       });
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);
  // 

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
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