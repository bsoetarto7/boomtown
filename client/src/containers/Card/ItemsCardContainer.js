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
  return {
    cardData: state.users.items
  }
}

export default connect(mapStateToProps, { getCardItems })(ItemsCardContainer);