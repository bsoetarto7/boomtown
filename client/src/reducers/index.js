import { combineReducers } from 'redux';

import userReducer from './cardReducer';
import selectDropDownReducer from './selectReducer';
import client from '../config/apolloClient';

export default combineReducers({
  apollo:client.reducer(),
  users: userReducer,
  selectDropDown: selectDropDownReducer
})