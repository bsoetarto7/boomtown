import React from 'react';
import { ItemsCard } from '../../components/Card';

import itemPlaceholder from '../../images/item-placeholder.jpg';

const LeftSide = () => {
  return(
    <div className="share-card-container">
      <ItemsCard 
        title       ={'hello'}
        imageUrl    ={itemPlaceholder} 
        description ={'hello'}
        tags        ={[]}
        createdOn   ={''}
        available   ={true}
        user        ={''} />
    </div>
  )
}

export default LeftSide;