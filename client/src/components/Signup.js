import React, { useState, useContext } from 'react'
import { UserContext } from './User';
import { useNavigate } from 'react-router-dom';

 const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorsList, setErrorsList] = useState([])
  const {signup} = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
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
    .then(response => response.json())
    .then(user => {
      if (!user.errors) {
        signup(user)
        navigate('/')
      } else {
        setUsername("")
        setPassword("")
        const errorsList = user.errors.map(e => <li key={user.e}>{e}</li>)
        setErrorsList(errorsList)
      }
    })
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