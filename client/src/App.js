import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";


function App() {
  return (
      <Router>
        <Navigation/>
        <div className="App">      
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        </div>    
      </Router>
  );
}

export default App;