import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'material-ui';
import { CardImage, CardTitleSubtitle, CardContentText, CardAuthor, CardButton } from '../CardContent'

const ItemsCard = ({title, itemOwner, imageUrl, description, tags, createdOn, available, user}) => {
  return(
    <Card style={{display:'inline-block'}}>
      <CardImage imageUrl={imageUrl} available={available}/>
      <Link to={`/profile/${user.id}`}><CardAuthor email={user.email} fullName={user.fullName} createdOn={createdOn}/></Link>
      <CardTitleSubtitle title={title} tags={tags}/>
      <CardContentText  description={description}/>
      {available ? <CardButton/> : false}
    </Card>
  )
}

ItemsCard.propTypes = {
  title: PropTypes.string.isRequired,
  itemOwner: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  createdOn: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default ItemsCard