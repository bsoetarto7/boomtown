import React, { Component } from 'react';
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import {LeftSide, RightSide} from './index';
import './styles.css';

class ShareContainer extends Component {
  render() {
    const { itemTitle, itemDescription } = this.props.inputValues;
    return (
      <section className="share-container">
        <LeftSide itemTitle={itemTitle} itemDescription={itemDescription}/>
        <RightSide stepIndex={this.props.stepIndex}/>
      </section>
    );
  }
}
export default connect((state) => {
  const values = formValueSelector('newItemForm');
  return {
    inputValues: values(state, "itemTitle", "itemDescription"),
    stepIndex: state.share.stepIndex
  }
})(ShareContainer)