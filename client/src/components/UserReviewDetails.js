import React, {useEffect} from 'react'
// import { useParams } from 'react-router-dom'

 const UserReviewDetails = () => {
    // const { user_id } = useParams()

    // useEffect(() => {
    //     fetch(`/users/${user_id}/reviews`)
    //     .then((response) => response.json())
    //     .then((user) => console.log(user))
    // }, [])
    // useeffect for fetch for reviews
    useEffect(() => {
        fetch(`/reviews`
            .then((response) => response.json())
            .then((reviews) => console.log(reviews))
        )
    }, [])
  return (
    <div>User Review Details 
        <div>
            <h3>Review ID: {user_id}</h3>
        </div>
    </div>
  )
}

export default UserReviewDetails