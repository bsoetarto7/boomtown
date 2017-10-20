import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemsCardList } from './index';
import { getCardItems } from '../../actions';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './styles.css';

class ItemsCardContainer extends Component {
  render(){
    const { data } = this.props;
    return(
        <section className="card-container">
          {!data.loading ?<ItemsCardList cardData={data.items}/>:false}
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
      tags
      itemowner{
        id
        fullname
        email
        bio
      }
      created
      available
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

export default graphql(fetchCardData)(ItemsCardContainer);