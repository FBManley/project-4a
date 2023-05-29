import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadSocials } from './actions/socials';

const SocialCard = ({group}) => {
    const groups = useSelector(state => state.socials);
    const dispatch = useDispatch();
    const {name, id} = group;
    
  return (
    <div>
      <h1>{name}</h1>
      <h3>{id}</h3>
    </div>
  )
}

export default SocialCard
