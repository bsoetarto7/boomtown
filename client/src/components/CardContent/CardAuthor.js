import React from 'react';
import {CardHeader} from 'material-ui';
import Gravatar from 'react-gravatar';

const CardAuthor = ({fullName, email, createdOn}) => {
  return(
    <CardHeader
    title={fullName}
    subtitle={createdOn}
    avatar={<Gravatar email={email} style={{borderRadius:'50%'}}/>}
    />
  )
}

export default CardAuthor;