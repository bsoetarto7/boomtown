import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form"
import filterCards from './modules/filterCards';
import shareReducer from './modules/shareReducer';
import client from '../config/apolloClient';

export default combineReducers({
  apollo:client.reducer(),
  filterCards: filterCards,
  share:shareReducer,
  form: formReducer
})