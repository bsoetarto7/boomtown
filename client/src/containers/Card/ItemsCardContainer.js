import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemsCardList } from './index';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './styles.css';

class ItemsCardContainer extends Component {
  filterCard = (allCards, filteredTags) => {
    if (filteredTags.length > 0){
      return allCards.filter(item =>{
                if(item.tags.some(r => filteredTags.findIndex(x => x.id === r.id) >= 0)){
                  return item
                }
              })
    }else{
      return allCards; 
    }
  }
  render(){
    const { data, filters } = this.props;
    const cardItems = this.filterCard(data.items, filters);
    return(
        <section className="card-container">
          {!data.loading ?<ItemsCardList cardData={cardItems}/>:false}
        </section>
    )
  }
}

const fetchCardData = gql`
  query{
    items{
      id
      title
      description
      imageurl
      tags{
        id
        tagname
      }
      itemowner{
        id
        fullname
        email
        bio
      }
      created
      borrower{
        id
        fullname
      }
    }
  }
`

ItemsCardContainer.propTypes = {
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ 
  filters: state.filterCards.filtereditems 
});

const CardItemsWithData = graphql(fetchCardData)(ItemsCardContainer);

export default connect(mapStateToProps)(CardItemsWithData);