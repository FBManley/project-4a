import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/safekeeping/Home";
// import Navigation from "./components/safekeeping/Navigation";
import HomeA from "./components/test/HomeA";
import NavA from "./components/test/NavA";
import LoginA from "./components/test/LoginA";
import { UserProvider } from "./components/test/UserA";
function App() {
  
  return (
    <UserProvider>
      <Router>
        <NavA/>
        <div className="App">      
        <Routes>
          <Route exact path="/" element={<HomeA/>} />
          <Route exact path="/login" element={<LoginA/>} />
        </Routes>
        </div>    
      </Router>
    </UserProvider>
  );
}

export default App;