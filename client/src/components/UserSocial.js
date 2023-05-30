import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadSocials, userSocials } from './actions/socials';

// import { loadUserSocials } from './actions/userSocials';
// import socials from './reducers/socials';

const UserSocial = () => {
//   const joinedGroups = useSelector(state => state.usersReducer.currentUser.socials);
    const joinedGroups = useSelector(state => state.socials.userSocials);

    const dispatch = useDispatch();
    console.log("JOINED GROUPS in user social", joinedGroups)

  useEffect(() => {
    dispatch(loadSocials()); // Dispatch the action to load socials when the component mounts
    dispatch(userSocials(joinedGroups));
  }, [dispatch]);
  

  return (
    <div>
      <h1>My Groups</h1>
      {/* <ul>
        {joinedGroups.map(group => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default UserSocial;
