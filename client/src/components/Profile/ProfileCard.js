import React from 'react';
import Paper from 'material-ui/Paper';
import Gravatar from 'react-gravatar';

const ProfileCard = ({profileUser,itemsShared,numberItemsBorrowed}) => {
  const style={
    maxWidth:'800px',
    margin:'80px auto 40px auto',
    padding:'40px 20px',
    display:'flex'
  }
  return(
    <Paper zDepth={1} style={style}>
      <div style={{flex:'0 0 50%',padding:'0 15px'}}>
        <h2 style={{fontSize:'32px',marginTop:'0px'}}>{profileUser.fullname}</h2>
        <p style={{color:'DarkGrey'}}>{profileUser.bio}</p>
      </div>
      <div style={{display:'flex',flex:'0 0 50%',paddin:'0 15px'}}>
        <div style={{flex:'0 0 50%',padding:'0 15px'}}>
          <p style={{fontSize:'18px'}}>{itemsShared}</p>
          <p style={{color:'DarkGrey'}}>Items shared</p>
          <p style={{fontSize:'18px'}}>{numberItemsBorrowed}</p>
          <p style={{color:'DarkGrey'}}>Items Borrowed</p>
        </div>
        <div style={{flex:'0 0 50%',padding:'0 15px'}}>
          <Gravatar email={profileUser.email} style={{borderRadius:'50%'}} size={150}/>
        </div>
      </div>
    </Paper>
  )
}

export default ProfileCard;