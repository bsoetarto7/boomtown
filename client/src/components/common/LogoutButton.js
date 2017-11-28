import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const LogoutButton = ({logOut}) =>(
    <RaisedButton onClick={logOut} style={{margin:'0 10px'}} secondary={true} label='Logout' />
)

export default LogoutButton