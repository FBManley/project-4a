import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './actions/user';

 const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setError] = useState("")
 
  const user = useSelector((store) => store.userReducer);
  console.log("in login", user)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => {
       if (response.ok) {
          response.json().then((user) => {
            dispatch(addUser(user))
            navigate('/')
            setUsername("")
            setPassword("")
            setError([])
          })
       } else {
        response.json().then((errors) =>{ 
          setError(errors.errors)
          console.log("login error", errors.errors)
       })
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
      <br></br>
      <div>
        {errors}
      </div>
    </div>
  )
}
export default Login;