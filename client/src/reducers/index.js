import { combineReducers } from 'redux';

import userReducer from './cardReducer';

export default combineReducers({
  users: userReducer
})