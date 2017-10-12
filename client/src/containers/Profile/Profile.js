import React from 'react';
import { ItemsCardList } from '../Card';
import { ProfileCard } from '../../components/Profile';

const Profile = ({profileCardData,profileUser, numberItemsBorrowed}) => {
  return(
    <div>
      <ProfileCard profileUser={profileUser} itemsShared={profileCardData.length} numberItemsBorrowed={numberItemsBorrowed}/>
      <ItemsCardList cardData={profileCardData}/>
    </div>
  )
}

export default Profile;