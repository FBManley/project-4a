import React, { useState, useEffect } from 'react'
const startingState = {
    title: '',
    genre: '',
    summary: '',
    director: '',
    release_date: ''
  }

 const MovieEditForm = ({movieID, onEditMovie}) => {
    const [movieFormInput, setmovieFormInput] = useState(startingState)
    const {title, genre, summary, director, release_date} = movieFormInput;
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch(`/movies/${movieID}`)
        .then(response => response.json())
        .then(movie => setmovieFormInput(movie))
    }, [movieID])

    const handleChange = (e) => {
        setmovieFormInput({...movieFormInput, [e.target.name]: e.target.value})
    }
   
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/movies/${movieID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({movieFormInput})
        }).then(response => {
            if (response.ok) {
                response.json().then(data => onEditMovie(data))
            } else {
                response.json().then((errors) => (setErrors(errors.errors)))
            }
        })
    }
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch(`/movies/${movieID}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({movieFormInput})
    //     }).then(response => response.json())
        
    //     .then(data => onEditMovie(data))
    // }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Edit Movie</h3>
            <label>Title</label>
            <input type="string" name="title" value={title} onChange={handleChange} />
            <label>Genre</label>
            <input type="string" name="genre" value={genre} onChange={handleChange} />
            <label>Summary</label>
            <input type="text" name="summary" value={summary} onChange={handleChange} />
            <label>Director</label>
            <input type="string" name="director" value={director} onChange={handleChange} />
            <label>Release Date</label>
            <input type="integer" name="release_date" value={release_date} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        <br></br>
        <div>
            {errors}
        </div>
    </div>
  )
}

export default MovieEditForm; 
