import React, {useState} from 'react'
const startingState = {
    title: '',
    genre: '',
    summary: '',
    director: '',
    release_date: ''
  }
// , editMovie
const CreateMovie = ({addMovie}) => {
    const [movieFormInput, setMovieFormInput] = useState(startingState)

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({movieFormInput})
        }).then((response) => {
            if (response.ok) {
                response.json().then(movie => {
                setMovieFormInput(movieFormInput)
                addMovie(movie)
            })
            } else {
                response.json().then((errors) => {
                    console.log(errors)
                })
            }
        })
    }
    // handleSubmit for edit
    // const handleSubmit = (e) => { 
    //     e.preventDefault();
    //     fetch(`/movies/${movie.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({movieFormInput})
    //     }).then((response) => {
    //         if (response.ok) {
    //             response.json().then(movie => {
    //             setMovieFormInput(movieFormInput)
    //             editMovie(movie)
    //         })
    // }
    const handleChange = (e) => {
        setMovieFormInput({...movieFormInput, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <h3>CreateMovie</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="string" name="title" value={movieFormInput.title} onChange={handleChange} />
            <label>Genre</label>
            <input type="string" name="genre" value={movieFormInput.genre} onChange={handleChange} />
            <label>Summary</label>
            <input type="text" name="summary" value={movieFormInput.summary} onChange={handleChange} />
            <label>Director</label>
            <input type="string" name="director" value={movieFormInput.director} onChange={handleChange} />
            <label>Release Date</label>
            <input type="integer" name="release_date" value={movieFormInput.release_date} onChange={handleChange} />
            <button type="submit">Submit</button>
            <button type ="button" >Close</button>
        </form>
    </div>
  )
}

export default CreateMovie