import React from 'react';
import { ProfileButton,LogoutButton } from '../../components/common';

const RightSide = ({ logOut, userID }) =>(
  <div className="appbar-right-section">
    <ProfileButton userID={userID} />
    <LogoutButton logOut={logOut} />
  </div>
)

export default RightSide