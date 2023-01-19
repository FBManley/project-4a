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
            console.log("in /me fetch",user)
            setUser(user)
            setMovies(user.movies)
            setReviews(user.reviews)
            if (user.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                // fetchMovies()
            }
        })
    }, [])
    const updateUser = (newData, movieId) => {
        // Make a POST request to the /reviews endpoint
        fetch('/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ review: {...newData, movie_id: movieId } })
            })
            .then(res => res.json())
            .then(data => {
            // Update the user state with the new review
            setUser((prevUser) => {
            return { ...prevUser, reviews: [...prevUser.reviews, data.review] };
            });
            })
            .catch(err => console.log(err))
            
    }
    // const updateUser = (newData) => {
    //     // must fetch to update the user in the database

    //     setUser((prevUser) => {
    //         return {...prevUser, ...newData};
    //     });
    // }
    // getting all reviews - not just the ones for the logged in user
    // const fetchReviews = () => {
    //     fetch('/reviews')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setReviews(data)
    //     })
    // }
    // const addReview = (review) => {
    //     fetch('/reviews', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(review)
    //     })
    //     .then(response => response.json())
    //     .then(data => {    
    //         setReviews([...reviews, data])
    //     })
    // }
    

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        setMovies()
        setReviews()
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
        setReviews()
        setMovies()
    } //, movies , reviews, addReview
    return <UserContext.Provider value={{user, login, logout, signup, loggedIn, movies, setMovies, updateUser, reviews}}>{children}</UserContext.Provider>
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    // 
}

export { UserContext, UserProvider }

