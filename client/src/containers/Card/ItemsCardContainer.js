import React, { Component } from 'react';
import { ItemsCardList } from './index';
import { getCardItems } from '../../actions';
import { connect } from 'react-redux';
import './styles.css';

class ItemsCardContainer extends Component {

  componentDidMount(){
    if(this.props.cardData.length === 0){
      this.props.getCardItems();
    }
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

const mapStateToProps = (state) =>{
  console.log(state);
  return {
    cardData: state.selectDropDown.filtereditems.length > 0 ? state.users.items.filter(item =>{
      if(item.tags.some(r => state.selectDropDown.filtereditems.indexOf(r) >= 0)){
        return item
      }
    }) : state.users.items 
  }
}

export default connect(mapStateToProps, { getCardItems })(ItemsCardContainer);