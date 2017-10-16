import React, { Component } from 'react';
import moment from 'moment';
import './styles.css';

class FooterContainer extends Component {
  state = {  }
  render() {
    return (
      <footer>
        <p>&#169; {moment().year()} Boomtown Corp. All Rights Reserved</p>
      </footer>
    );
  }
}

export default FooterContainer;