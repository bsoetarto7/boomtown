import { combineReducers } from 'redux';
import filterCards from './modules/filterCards';
import client from '../config/apolloClient';

export default combineReducers({
  apollo:client.reducer(),
  filterCards: filterCards
})