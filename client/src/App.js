import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import { UserProvider} from "./components/User.js";

function App() {
  return (
      <Router>
        <div className="App"> 
        <UserProvider>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/logout" element={<Login/>} />
        </Routes>
        </UserProvider>
        </div>    
      </Router>

  );
}

export default App;