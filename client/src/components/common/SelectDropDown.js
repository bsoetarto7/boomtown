import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SelectDropDown = ({ handleChange, selectedValue, dropdownList }) =>(
  <SelectField onChange={handleChange} value={selectedValue} hintText="Filter by Tag" multiple={true}>
    {dropdownList.map(option => <MenuItem key={option.id} value={option.id} primaryText={option.name} checked={selectedValue && selectedValue.includes(option.id)}/>)}
  </SelectField>
)

export default SelectDropDown