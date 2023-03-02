import React, { useState } from 'react'

 const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState("")

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
            response.json().then((errors) => {
              setErrors(errors.errors)
              console.log(errors.errors)
            });
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
      <br></br>
      <ul>{errors}</ul>
    </div>
  )
}
export default Signup;