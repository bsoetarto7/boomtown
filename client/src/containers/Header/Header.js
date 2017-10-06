import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { LeftSide, RightSide } from './index';
import './styles.css';

class Header extends Component {
  state={
    dropdownList:[
      {id:1, name:'Electronics'},
      {id:2, name:'Household Items'},
      {id:3, name:'Musical Instruments'},
      {id:4, name:'Physical Media'},
      {id:5, name:'Recreational Equipment'},
      {id:6, name:'Sporting Goods'},
      {id:7, name:'Tools'}
    ],
    selectedFilter:null
  }
  handleChange = (event, index, value) => {
    this.setState({selectedFilter:value})
  }
  render(){
    return(
      <AppBar
        style={{backgroundColor:'white', display:'flex',alignItems:'center', maxWidth:'1140px', margin:'0 auto',boxShadow:'none', padding:'0'}}
        iconElementLeft= {
          <LeftSide dropdownList={this.state.dropdownList} handleChange={this.handleChange} selectedValue={this.state.selectedFilter} />
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

export default Header