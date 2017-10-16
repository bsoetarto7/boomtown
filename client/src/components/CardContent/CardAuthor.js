import React from 'react';
import PropTypes from 'prop-types';
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

CardAuthor.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired
};

export default CardAuthor;