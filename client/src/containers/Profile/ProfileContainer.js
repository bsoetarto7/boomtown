import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Profile } from './index';
import { getCardItems } from '../../actions';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './styles.css';

class ProfileContainer extends Component {
  render() {
    const { data } = this.props
    return (
      <section className="profile-container">
        {!data.loading ? <Profile profileCardData={data.user.items} profileUser={data.user} numberItemsBorrowed={data.user.borroweditems.length}/>:false}
      </section>
    );
  }
}

const fetchUserData = gql`
query fetchUserData($id: ID!){
  user(id: $id){
    id
    fullname
    email
    bio
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
    borroweditems{
      id
      title
    }
  }
}
`

ProfileContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default graphql(fetchUserData, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.profileID
    }
  }),
})(ProfileContainer);