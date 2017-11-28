import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const ProfileButton = ({userID}) =>{
    return(
        <Link to={`/profile/${userID}`}><RaisedButton style={{margin:'0 10px'}} primary={true} label='My Profile' /></Link>
    )
}

export default ProfileButton