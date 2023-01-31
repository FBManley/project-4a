import React, { useState } from 'react'
// ERROR WITH MOUTNING COMPONENT IN SIGNUP
 const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorsList, setErrorsList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/signup', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
    })
    .then((response) => {
        if (response.ok) {
            response.json().then((user) => {
                setUser(user);
                setUsername("");
                setPassword("");
            });
        } else {
            response.json().then((error) => setErrorsList(error.error));
        }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input> 
        <br/>
        <label>Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br/>
        <input type="submit"></input>
      </form>
      <ul>{errorsList}</ul>
    </div>
  )
}
export default Signup;