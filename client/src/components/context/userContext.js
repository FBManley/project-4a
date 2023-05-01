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
                    loginUser(user)
                })
            } else {
                setUser(null)
            }
        })
    }, [])

    const loginUser = user => {
        setCurrentUser(user);
        setLoggedIn(true);
    }
    // add user, delete user 
    return <UserContext.Provider value={{ user, setUser, currentUser, setCurrentUser, loggedIn, setLoggedIn, loginUser }}>{children}</UserContext.Provider>

}
export { UserContext, UserProvider };