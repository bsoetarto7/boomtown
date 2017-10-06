import React from 'react';
import {CardTitle} from 'material-ui/Card';

const CardTitleSubtitle = ({title, tags}) => {
  return(
    <CardTitle title={title} subtitle={tags.join(', ')} />
  )
}

export default CardTitleSubtitle;