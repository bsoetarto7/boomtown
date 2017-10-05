import React from 'react';
import { Logo, SelectDropDown } from '../../components/common';

const LeftSide = ({dropdownList, handleChange, selectedValue}) =>(
  <div className="appbar-left-section">
    <Logo />
    <SelectDropDown dropdownList={dropdownList} handleChange={handleChange} selectedValue={selectedValue} />
  </div>
)

export default LeftSide