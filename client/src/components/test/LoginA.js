import React, { useState, useContext } from 'react'
import { UserContext } from './UserA';
import { useNavigate } from 'react-router-dom';

const LoginA = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {login} = useContext(UserContext)
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
        .then(user => {
          console.log(user)
          if (!user.errors) {
            login(user)
            navigate('/')
            // return {
            //   username: user.username,
            //   id: user.id,
            //   errors: user.errors
            //   console.log(user)
            // }
          } else {
            setUsername("")
            setPassword("")
            const errorsList = user.errors.map(e => <li>{e}</li>)
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
export default LoginA