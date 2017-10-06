import React from 'react';
import { CardText } from 'material-ui/Card';
const CardContentText = ({description}) => {
  return(
    <CardText>
      {description}
    </CardText>
  )
}

export default CardContentText;