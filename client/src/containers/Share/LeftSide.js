import React from 'react';
import { ItemsCard } from '../../components/Card';

import itemPlaceholder from '../../images/item-placeholder.jpg';

const LeftSide = ({itemTitle,itemDescription,selectedTags}) => {
  return(
    <div className="share-card-container">
      <ItemsCard 
        title       ={itemTitle ? itemTitle : 'Add Title'}
        imageUrl    ={itemPlaceholder} 
        description ={itemDescription ? itemDescription : 'Add Description'}
        tags        ={selectedTags}
        createdOn   ={''}
        available   ={true}
        user        ={''} />
    </div>
  )
}

export default LeftSide;