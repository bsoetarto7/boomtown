import React, { Component } from 'react';
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import {LeftSide, RightSide} from './index';
import './styles.css';

class ShareContainer extends Component {
  render() {
    console.log(this.props.inputValues);
    return (
      <section className="share-container">
        <LeftSide />
        <RightSide />
      </section>
    );
  }
}

export default connect((state) => {
  const values = formValueSelector('newItemForm');
  return {
    inputValues: values(state, "itemTitle", "itemDescription")
  }
})(ShareContainer)