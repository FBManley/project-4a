import React, { useState } from 'react'

 const MovieEditForm = ({movieID, editMovie}) => {
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        summary: '',
        director: '',
        release_date: ''
    })
    const {title, genre, summary, director, release_date} = formData;
    useEffect(() => {
        fetch(`/movies/${movie.id}`)
        .then(response => response.json())
        .then(movie => setFormData(movie))
    }, [movieID])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/movies/${movie_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => editMovie(data))
    }

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
    </div>
  )
}

export default MovieEditForm; 