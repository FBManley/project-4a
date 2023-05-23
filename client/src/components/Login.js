import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './actions/user';
import { loginUser } from './actions/users';
// import { loadUser } from './actions/user';
import { loadCurrentUser } from './actions/users';

 const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setError] = useState("")
 
  const user = useSelector((store) => store.userReducer);
  const { loggedIn } = useSelector((store) => store.usersReducer);
  console.log("in login", user)
  console.log("in login", loggedIn)
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
            dispatch(loadCurrentUser(user))
            // dispatch(addUser(user))
            // dispatch(loginUser(user))
            // dispatch(loadUser(user))
            navigate('/movies')
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
      <h1>Login</h1>
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