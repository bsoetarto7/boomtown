import React from 'react';
import {CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const CardButton = () => {
  return(
    <CardActions>
      <RaisedButton label='Borrow' href='/' secondary/>
    </CardActions>
  )
}

export default CardButton;