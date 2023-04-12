import {createContext, useState, useEffect} from 'react';

const postContext = createContext([]);

const PostProvider = ({children}) => {
        const [posts, setPosts] = useState([]);

        useEffect(() => {
            fetch('/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
        }, [])

}

export {postContext, PostProvider};