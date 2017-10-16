import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { ItemsCard } from '../../components/Card';
import './styles.css';

const ItemsCardList = ({ cardData }) =>  {

  const masonryOptions = {
      transitionDuration: 0
  }
  return (
    <Masonry
        className={'my-gallery-class'}
        elementType={'ul'}
        options={masonryOptions}
    >
      { cardData.map(data => 
          <li key={data.id} className="image-element-class">
            <ItemsCard 
              title       ={data.title}
              itemOwner   ={data.itemOwner} 
              imageUrl    ={data.imageUrl} 
              description ={data.description}
              tags        ={data.tags}
              createdOn   ={data.createdOn}
              available   ={data.available}
              user        ={data.user} />
          </li>
        ) 
      }
    </Masonry>
  )
}

ItemsCardList.propTypes = {
  cardData: PropTypes.array.isRequired
};

export default ItemsCardList;