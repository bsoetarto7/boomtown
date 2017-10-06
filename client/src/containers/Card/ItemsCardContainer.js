import React, { Component } from 'react';
import { ItemsCardList } from './index';

class ItemsCardContainer extends Component {
  state={
    cardData:[]
  }
  componentDidMount(){
    this.fetchCardData();
  }
  fetchCardData = () =>{
    fetch('http://localhost:3001/items').then((response) => 
      response.json()
    ).then((data) =>{
      this.setState({cardData:data})
    })
  }
  render(){
    return(
        <section>
          <ItemsCardList cardData={this.state.cardData}/>
        </section>
    )
  }
}

export default ItemsCardContainer