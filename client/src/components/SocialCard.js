import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSocials } from './actions/socials';


const SocialCard = ({ group, user_id }) => {
  const groups = useSelector(state => state.socials);
  const dispatch = useDispatch();
  const { name, id } = group;
  const [joined, setJoined] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleGroupJoinClick = () => {
    fetch(`user_socials/join_group?user_id=${user_id}&social_id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          // Handle success response
          console.log('User joined the group successfully.');
          setJoined(true); // Set the joined state to true
          // dispatch(loadSocials(groups));
        } else {
          // Handle error response
          console.error('Failed to join the group.');
          setErrors(['Failed to join the group-Already a member.']); // Update the error state
        }
      })
      .catch(error => {
        // Handle network errors
        console.error('An error occurred:', error);
        setErrors(['An error occurred.']); // Update the error state
      });
  };

  return (
    <div>
      <h1>{name}</h1>
      <h3>{id}</h3>
      {errors.length > 0 && (
        <div>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleGroupJoinClick} disabled={joined}>
        {joined ? 'Joined' : 'Join Group'}
      </button>
    </div>
  );
};

export default SocialCard;
