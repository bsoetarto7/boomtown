import React, { Component } from 'react';
import { ItemsCardList } from './index';
import { getItems } from '../../redux/modules/items/reducer';
import { connect } from 'react-redux';
import './styles.css';

class ItemsCardContainer extends Component {

  componentDidMount(){
    this.fetchCardData();
  }
  fetchCardData = () =>{
    const urls = ['http://localhost:3001/items','http://localhost:3001/users']; 
    Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    )).then(data => {
      const [items, users] = data;
      const cardData = items.map(item =>{
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
      this.props.dispatch(getItems(cardData))
    })
  }
  render(){
    const { cardData } = this.props;
    return(
        <section className="card-container">
          <ItemsCardList cardData={cardData}/>
        </section>
    )
  }
}

export default connect((state)=>{
  return {
    cardData: state.itemWithUser.itemsNormalized
  }
})(ItemsCardContainer);