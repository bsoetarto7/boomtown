import React, { Component } from 'react';
import { Profile } from './index';

class ProfileContainer extends Component {
  state = {  }
  state={
    profileCardData:[],
    numberItemsBorrowed:[],
    profileUser:{}
  }
  componentDidMount(){
    this.fetchProfileData();
  }
  fetchProfileData = () =>{
    const urls = ['http://localhost:3001/items','http://localhost:3001/users']; 
    Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    )).then(data => {
      const [items, users] = data;
      const profileUser = users.find( user => {
        if(this.props.match.params.profileID === user.id){
          return user
        }  
      });
      const numberItemsBorrowed = items.filter((item)=>{
        if(this.props.match.params.profileID === item.borrower){
          return item
        }
      }).length;
      const profileCardData = items.filter((item) =>{
        if(this.props.match.params.profileID === item.itemOwner){
          return item
        }
      }).map((item)=>{
        return {
          available: item.available,
          borrower: item.borrower,
          createdOn: item.createdOn,
          description: item.description,
          id: item.id,
          imageUrl: item.imageUrl,
          itemOwner: item.itemOwner,
          tags: item.tags,
          title: item.title,
          user: users.find(user => user.id === item.itemOwner)
        }
      })
      this.setState({profileCardData, profileUser, numberItemsBorrowed})
    })
  }
  render() {
    return (
      <section>
        <Profile profileCardData={this.state.profileCardData} profileUser={this.state.profileUser} numberItemsBorrowed={this.state.numberItemsBorrowed}/>
      </section>
    );
  }
}

export default ProfileContainer;