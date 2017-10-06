import React from 'react';
import { Card } from 'material-ui';
import { CardImage, CardTitleSubtitle, CardContentText, CardAuthor, CardButton } from '../CardContent'

const ItemsCard = ({title, itemOwner, imageUrl, description, tags, createdOn, available, user}) =>{
  return(
    <Card style={{maxWidth:'30%', margin:'40px 1.5%', display:'inline-block'}}>
      <CardImage imageUrl={imageUrl} available={available}/>
      <CardAuthor email={user.email} fullName={user.fullName} createdOn={createdOn}/>
      <CardTitleSubtitle title={title} tags={tags}/>
      <CardContentText  description={description}/>
      {available ? <CardButton/> : false}
    </Card>
  )
}

export default ItemsCard