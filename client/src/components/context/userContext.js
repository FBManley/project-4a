import { createContext, useState, useEffect } from "react";

const UserContext = createContext([]);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fetch('/me')
        .then(response => {
            if (response.ok) {
                response.json().then(user => {
                    setUser(user)
                })
            } else {
                setUser(null)
            }
        })
    }, [])
    // add user, delete user 

}