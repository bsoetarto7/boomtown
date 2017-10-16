import React from 'react';
import PropTypes from 'prop-types';
import { CardText } from 'material-ui/Card';
const CardContentText = ({description}) => {
  return(
    <CardText>
      {description}
    </CardText>
  )
}

CardContentText.propTypes = {
  description: PropTypes.string.isRequired
};

export default CardContentText;