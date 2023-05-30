import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadSocials } from './actions/socials';
import SocialCard from './SocialCard';
import { updateUser } from './actions/users';
import UserSocial from './UserSocial';

const Socials = () => {
    const groups = useSelector(state => state.socials);
    const user_id = useSelector(state => state.usersReducer.currentUser.id);
    console.log("in socials comp", user_id)
    const dispatch = useDispatch();
    console.log("in socials", groups);

    useEffect(() => {
        dispatch(updateUser(user_id))
        dispatch(loadSocials(groups));
    }, [dispatch, user_id]) 

    const GroupListCards = groups.map((group) => 
        <SocialCard key={group.id} group={group} user_id={user_id}/>);

    return (
        <div>    
            <UserSocial />
            <h1>Join Socials</h1>
            {GroupListCards}
        </div>
    );
}

export default Socials;
