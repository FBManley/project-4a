import React from 'react'

const loadUsers = () => {
  return dispatch => {
    // dispatch({type: "LOAD_USERS"})
    fetch("/users")
    .then(response => response.json())
    .then(data => {
      dispatch({type: "LOAD_USERS", payload: data})
      console.log("in loadUsers action", data)
    })
    .catch(err => {
      dispatch({type: "USERS_ERROR", payload: err})
    }
    )
  }
}

export default loadUsers
