import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";



function App() {
  [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me')
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, [])
  return (
    <div>
      <Navigation user={user} setUser={setUser}/>
      {user ? (
        <Routes>
          <Route exact path="/" element={<Home user={user}/>} />
          <Route exact path="/logout" element={<Login setUser={setUser}/>} />
        </Routes>
      ) : ( 
        <Routes>
          <Route exact path="/login" element={<Login setUser={setUser}/>} />
          <Route exact path="/signup" element={<Signup setUser={setUser}/>} />
        </Routes>
      )}
    </div>
  )
}

export default App;
