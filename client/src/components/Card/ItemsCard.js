import React from 'react';
import { Card } from 'material-ui';
import { CardImage, CardTitleSubtitle, CardContentText } from '../CardContent'

const ItemsCard = ({title, itemOwner, imageUrl, description, tags, createdOn, available}) =>{
  return(
    <Card style={{maxWidth:'30%', margin:'40px 1.5%', display:'inline-block'}}>
      <CardImage imageUrl={imageUrl} available={available}/>
      <CardTitleSubtitle title={title} tags={tags}/>
      <CardContentText  description={description}/>
    </Card>
  )
}

export default ItemsCard