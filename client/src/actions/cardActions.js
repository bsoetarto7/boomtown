import { mainURL } from '../constants';
import { getUsers } from './userActions';

const getCardItemsBegin = () => ({
  type: 'GET_CARD_ITEMS_BEGIN'
})

const getCardItemsSuccess = (items,users) => ({
  type: 'GET_CARD_ITEMS_SUCCESS',
  items,
  users
})

const getCardItemsError = (error) => ({
  type: 'GET_CARD_ITEMS_ERROR',
  error
})


export const getCardItems = () => {

  return (dispatch) => {
    dispatch(getCardItemsBegin())
    return fetch(`${mainURL}/items`)
      .then(resp => resp.json())
      .then(items => {
        return getUsers(dispatch).then(users =>{
          dispatch(getCardItemsSuccess(items,users))
        })
      }).catch(err => {
        dispatch(getCardItemsError(err))
      })
  }
  
}

