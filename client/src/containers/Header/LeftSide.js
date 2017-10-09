import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, SelectDropDown } from '../../components/common';

const LeftSide = ({dropdownList, handleChange, selectedValue}) =>(
  <div className="appbar-left-section">
    <Link to="/"><Logo /></Link>
    <SelectDropDown dropdownList={dropdownList} handleChange={handleChange} selectedValue={selectedValue} />
  </div>
)

export default LeftSide