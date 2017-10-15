import React from 'react';
import {CardHeader} from 'material-ui';
import Gravatar from 'react-gravatar';
import moment from 'moment';

const CardAuthor = ({fullName, email, createdOn}) => {
  return(
    <CardHeader
    title={fullName}
    subtitle={moment(createdOn).fromNow()}
    avatar={<Gravatar email={email} style={{borderRadius:'50%'}}/>}
    />
  )
}

export default CardAuthor;