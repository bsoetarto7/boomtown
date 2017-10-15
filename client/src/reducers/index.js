import { combineReducers } from 'redux';

import userReducer from './cardReducer';
import selectDropDownReducer from './selectReducer';

export default combineReducers({
  users: userReducer,
  selectDropDown: selectDropDownReducer
})