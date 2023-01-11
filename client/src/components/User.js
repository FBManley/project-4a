import React, { useState, useEffect } from "react";

// creating context object
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false) // begins as not loggedIn

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(user => {
            setUser(user)
            user.error ? setLoggedIn(false) : setLoggedIn(true) // set boolean if logged in or not
        })
    }, [])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }
    
    const logout = () => {
        setUser({})
        setLoggedIn(false) 
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    } 
    return <UserContext.Provider value={{user, login, logout, signup, loggedIn}}>{children}</UserContext.Provider>
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    // 
}

export { UserContext, UserProvider }