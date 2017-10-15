import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { LeftSide, RightSide } from './index';
import { getSelectItems, setFilteredtItems } from '../../actions';
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

export default connect((state)=>{
  return {
    dropdownList: state.selectDropDown.dropdownList,
    filtereditems: state.selectDropDown.filtereditems
  }
})(Header);