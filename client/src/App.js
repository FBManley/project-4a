import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('/me')
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
          console.log(user);
        });
      } else {
        setUser(null);
      }
    });
  }, []);
  // 

  return (
    <div>
      <Navigation user={user} setUser={setUser}/>
      {user ? (
        <Routes>
          <Route exact path="/" element={<Home user={user}/>} />
          <Route path='*' element={<Home user={user}/>} />
        </Routes>
      ) : ( 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login setUser={setUser}/>} />
          <Route exact path="/signup" element={<Signup setUser={setUser}/>} />
          <Route path='*' element={<Login setUser={setUser}/>} />
          {/* <Route exact path="user/reviews" setUser={setUser} element={UserReviewDetails}/> */}
        </Routes>
      )}
    </div>
  )
}

export default App;
