import React, { Component } from 'react';
import {LeftSide, RightSide} from './index';

class ShareContainer extends Component {
  render() {
    return (
      <section>
        <LeftSide />
        <RightSide />
      </section>
    );
  }
}

export default ShareContainer;