import React from 'react';
import { ProfileButton,LogoutButton } from '../../components/common';

const RightSide = ({logOut}) =>(
  <div className="appbar-right-section">
    <ProfileButton />
    <LogoutButton logOut={logOut} />
  </div>
)

export default RightSide