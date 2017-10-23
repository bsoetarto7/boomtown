import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import { LeftSide, RightSide } from './index';
import { getSelectItems, setFilteredtItems } from '../../redux/modules/filterCards';
import { connect } from 'react-redux';
import './styles.css';

class Header extends Component {
  handleChange = (event, index, value) => {
    this.props.dispatch(setFilteredtItems(value));
  }
  render(){
    const { dropdownList, filtereditems } = this.props
    return(
      <AppBar
        style={{backgroundColor:'white', display:'flex',alignItems:'center', maxWidth:'1140px', margin:'0 auto',boxShadow:'none', padding:'0'}}
        iconElementLeft= {
          <LeftSide dropdownList={dropdownList} handleChange={this.handleChange} selectedValue={filtereditems} />
        }
        iconElementRight={
          <RightSide />
        }
        iconStyleLeft={{margin:'0'}}
        iconStyleRight={{margin:'0'}}
      />
    )
  }
}

Header.propTypes = {
  dropdownList: PropTypes.array.isRequired,
  filtereditems: PropTypes.array.isRequired
};


export default connect((state)=>{
  return {
    dropdownList: state.filterCards.dropdownList,
    filtereditems: state.filterCards.filtereditems
  }
})(Header);