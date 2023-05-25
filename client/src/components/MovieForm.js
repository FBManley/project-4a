import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addMovie} from './actions/movies'
import {FormWrapper} from '../components/styles/StyledForm'
const startingState = {
    title: '',
    genre: '',
    summary: '',
    director: '',
    release_date: ''
  }

const CreateMovie = () => {
    // const [showForm, setShowForm] = useState(false)
    const [movieFormInput, setMovieFormInput] = useState(startingState)
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch();

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
                dispatch(addMovie(movie))
                // addMovie(movie)
                handleClear()
            })
            } else {
                response.json().then((errors) => (setErrors(errors.errors)))
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
    <FormWrapper>
    <div>
        <h3>AddMovie</h3>
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
        <br></br>
        <div>
            {errors}
        </div>
    </div>
    </FormWrapper>
  )
}

export default CreateMovie