import React, { useEffect } from 'react'
import {useSelector} from 'react-redux';

const UsersList = () => {
    const users = useSelector((store) => store.users);
    // console.log("in users", users)
    // const usersList = users.map((user) => <li key={user.id}>{user.username}</li>)

    // useEffect(() => {

    // }, [])
  return (
    <div>
      <h1>Users List</h1>
        <ul>
            {/* {usersList} */}
        </ul>
    </div>
  )
}

export default UsersList
