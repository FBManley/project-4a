import React from 'react'
import { Navigate } from 'react-router-dom'

export const loadUsers = () => {
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


export const loadCurrentUser = () => {
    return dispatch => {
        fetch("/me")
        .then(response => response.json())
        .then(data => {
            const action = {type: "LOGIN_USER", payload: data}
            dispatch(action)
            // Navigate("/movies")
        })
    }
}


export const logoutUser = () => {
    return {
        type: "LOGOUT_USER"
    }
}

export const updateUser = () => {
    return {
        type: "UPDATE_USER"
    }
}