import React from 'react'
import {useDispatch} from 'react-redux';
// destroy the session
// redirect to the login page

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            dispatch(deleteUser())
        })
    }
  return (
    <div>
          <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Logout
