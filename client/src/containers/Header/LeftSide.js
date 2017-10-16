import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Logo, SelectDropDown } from '../../components/common';
import { Route } from 'react-router-dom';

const LeftSide = ({dropdownList, handleChange, selectedValue}) =>(
  <div className="appbar-left-section">
    <Link to="/"><Logo /></Link>
    <Route exact path="/" component={() => <SelectDropDown dropdownList={dropdownList} handleChange={handleChange} selectedValue={selectedValue} />} />
  </div>
)

LeftSide.propTypes = {
  dropdownList: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.array.isRequired
};

export default LeftSide