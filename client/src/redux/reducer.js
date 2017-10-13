import { combineReducers } from 'redux';
import { itemReducer } from './modules/items/reducer';

export default combineReducers({
  itemWithUser: itemReducer
});