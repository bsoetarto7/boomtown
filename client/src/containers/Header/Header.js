import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import { LeftSide, RightSide } from './index';
import { setFilteredtItems } from '../../redux/modules/filterCards';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './styles.css';
import firebase from '../../firebaseHelper';

class Header extends Component {
  handleChange = (event, index, value) => {
    this.props.dispatch(setFilteredtItems(value));
  }
  logOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }
  render(){
    const { filtereditems, user } = this.props
    const { tags, loading } = this.props.data;

    return(
      <AppBar
        style={{backgroundColor:'white', display:'flex',alignItems:'center', maxWidth:'1140px', margin:'0 auto',boxShadow:'none', padding:'0'}}
        iconElementLeft= {
          <LeftSide dropdownList={!loading?tags:[]} handleChange={this.handleChange} selectedValue={filtereditems} />
        }
        iconElementRight={
          <RightSide logOut={this.logOut} userID={user ? user.uid : false }/>
        }
        iconStyleLeft={{margin:'0'}}
        iconStyleRight={{margin:'0'}}
      />
    )
  }
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
  filtereditems: PropTypes.array.isRequired
};

const fetchTagsData = gql`
query{
  tags{
    id
    tagname
  }
}
`

const mapStateToProps = state => { 
  return {
    filtereditems: state.filterCards.filtereditems,
    user: state.login.user,
  }
};

const TagsData = graphql(fetchTagsData)(Header);

export default connect(mapStateToProps)(TagsData)