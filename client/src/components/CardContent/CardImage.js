import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia,CardTitle } from 'material-ui/Card';

import placeholderIMG from '../../images/item-placeholder.jpg'

const CardImage = ({imageUrl, available}) => {
  return(
    <CardMedia overlay={!available && <CardTitle subtitle="Unavailable" />}>
      <img src={imageUrl.length !== 0 ? imageUrl : placeholderIMG} alt="Card Image"/>
    </CardMedia>
  )
}

CardImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired
};

export default CardImage;