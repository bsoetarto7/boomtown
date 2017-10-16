import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Profile } from './index';
import { getCardItems } from '../../actions';
import { connect } from 'react-redux';
import './styles.css';

class ProfileContainer extends Component {

  componentDidMount(){
    if(this.props.profileCardData.length === 0){
      this.props.getCardItems();
    }
  }
  render() {
    const { profileUserData, profileCardData } = this.props
    return (
      <section className="profile-container">
        {profileUserData ? <Profile profileCardData={profileCardData} profileUser={profileUserData} numberItemsBorrowed={profileUserData.numberItemsBorrowed}/>:false}
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {
    profileUserData: state.users.users.find(user =>{
      if(ownProps.match.params.profileID === user.id){
        return user
      }
    }),
    profileCardData: state.users.items.filter(item=>{
      if(ownProps.match.params.profileID === item.itemowner){
        return item
      }
    })
  }
}

ProfileContainer.propTypes = {
  profileUserData: PropTypes.object,
  profileCardData: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { getCardItems })(ProfileContainer);