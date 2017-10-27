import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SelectDropDown = ({ handleChange, selectedValue, dropdownList }) =>{
  console.log(dropdownList);
  return (
    <SelectField onChange={handleChange} value={selectedValue} hintText="Filter by Tag" multiple={true}>
      {dropdownList.map(option => <MenuItem key={option.id} value={option} primaryText={option.tagname} checked={selectedValue && selectedValue.includes(option)}/>)}
    </SelectField>
  )
}

SelectDropDown.propTypes = {
  dropdownList: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.array.isRequired
};

export default SelectDropDown