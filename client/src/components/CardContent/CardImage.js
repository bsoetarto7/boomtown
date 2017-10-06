import React from 'react';
import { CardMedia,CardTitle } from 'material-ui/Card';

const CardImage = ({imageUrl, available}) => {
  return(
    <CardMedia overlay={!available?<CardTitle subtitle="Unavailable" />:false}>
      <img src={imageUrl} alt="Card Image"/>
    </CardMedia>
  )
}

export default CardImage;