import React, {useState} from 'react'
const startingState = {
    title: '',
    genre: '',
    summary: '',
    director: '',
    release_date: ''
  }

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
                handleClear()
            })
            } else {
                response.json().then((errors) => {
                    console.log(errors)
                })
            }
            
        })
        
    }
    const handleChange = (e) => {
        setMovieFormInput({...movieFormInput, [e.target.name]: e.target.value})
    }
    const handleClear = (e) => {
        setMovieFormInput(startingState)
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
            <button type ="button" onClick={handleClear}>Clear</button>
        </form>
    </div>
  )
}

export default CreateMovie