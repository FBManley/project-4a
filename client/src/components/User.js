import React, { useState, useEffect } from "react";

// creating context object
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false) // begins as not loggedIn
    const [reviews, setReviews] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(user => {
            setUser(user)
            if (user.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                // nested json instead of sending another fetch request?
                // send nested json so that if you get user you get user and its reviews and then set them into two diff part of state
                fetchReviews()
                fetchMovies()
            }
        })
    }, [])
    // getting all reviews - not just the ones for the logged in user
    const fetchReviews = () => {
        fetch('/reviews')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    }
    const addReview = (review) => {
        fetch('/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        .then(response => response.json())
        .then(data => {    
            setReviews([...reviews, data])
        })
    }
    const fetchMovies = () => {
        fetch('/movies')
        .then(response => response.json())
        .then(movies => {
            console.log(movies)
            setMovies(movies)
        })
    }


    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchReviews()
        fetchMovies()
    }
    
    const logout = () => {
        setUser({})
        setLoggedIn(false) 
        setReviews([])
        setMovies([])
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchReviews()
        fetchMovies()
    } 
    return <UserContext.Provider value={{user, login, logout, signup, loggedIn, reviews, addReview}}>{children}</UserContext.Provider>
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    // 
}

export { UserContext, UserProvider }