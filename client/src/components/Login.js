import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

 const Login = ({setUser}) => {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: ""
  // })
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  
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
       if(response.ok) {
          response .json().then((user) => {
            setUser(user)
            navigate('/')
          })
       }
       else response.json().then((error) => { setError(error.error) })
    })
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch('/login', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       username: username,
  //       password: password
  //     })
  //   })
  //   .then((response) => 
  //     if (response.ok) {
  //       response.json().then((user) => {
  //         setUser(user)
  //       })
  //     }
  //   else {
  //     response.json().then((error) => { setError(error.error) }
  //   )}
  //   )
  //   // in wrong place-> move response.json() down
  // }
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
    </div>
  )
}
export default Login;