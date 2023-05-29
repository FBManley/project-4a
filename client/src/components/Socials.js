import { useDispatch, useSelector } from 'react-redux';
import { loadSocials } from './actions/socials';
import SocialCard from './SocialCard';

const Socials = () => {
    const groups = useSelector(state => state.socials);
    const dispatch = useDispatch();
    console.log("in socials", groups);

    // useEffect(() => {
    //     dispatch(loadSocials)
    // }, [dispatch]) 

    const GroupListCards = groups.map((group) => 
        <SocialCard key={group.id} group={group}/>);

    return (
        <div>    
            <h1>Socials</h1>
            {GroupListCards}
        </div>
    );
}

export default Socials;
