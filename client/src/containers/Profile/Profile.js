import React from 'react';
import PropTypes from 'prop-types';
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

Profile.propTypes = {
  profileUser: PropTypes.object,
  profileCardData: PropTypes.array.isRequired,
  numberItemsBorrowed: PropTypes.number.isRequired
};

export default Profile;