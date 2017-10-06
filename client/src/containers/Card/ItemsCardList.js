import React, { Component } from 'react';
import { ItemsCard } from '../../components/Card'

const ItemsCardList = ({ cardData }) =>  {
  return (
    <div>
      { cardData.map(data => 
          <ItemsCard 
            key         ={data.id}
            title       ={data.title}
            itemOwner   = {data.itemOwner} 
            imageUrl    ={data.imageUrl} 
            description ={data.description}
            tags        ={data.tags}
            createdOn   ={data.createdOn}
            available   ={data.available} />
        ) 
      }
    </div>
  )
}

export default ItemsCardList;