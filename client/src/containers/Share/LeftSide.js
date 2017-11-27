import React from 'react';
import { ItemsCard } from '../../components/Card';

import itemPlaceholder from '../../images/item-placeholder.jpg';

const LeftSide = ({itemTitle,itemDescription,selectedTags, shareDateNow, user, imageData}) => {
  return(
    <div className="share-card-container">
      <ItemsCard 
        title       ={itemTitle ? itemTitle : 'Add Title'}
        imageUrl    ={imageData ? imageData : itemPlaceholder} 
        description ={itemDescription ? itemDescription : 'Add Description'}
        tags        ={selectedTags}
        createdOn   ={shareDateNow}
        available   ={true}
        user        ={user} />
    </div>
  )
}

export default LeftSide;