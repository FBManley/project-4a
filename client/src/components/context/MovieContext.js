import {createContext, useState, useEffect} from 'react';

const MovieContext = createContext([]);

const MovieProvider = ({children}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/movies')
        .then(response => response.json())
        .then(movies => setMovies(movies))
    }, [])

}
export {MovieContext, MovieProvider};