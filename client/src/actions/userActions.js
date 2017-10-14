import { mainURL } from '../constants';

const getUsersBegin = () => ({
  type: 'GET_USERS_BEGIN'
})

const getUsersSuccess = () => ({
  type: 'GET_USERS_SUCCESS'
})

const getUsersError = (error) => ({
  type: 'GET_USERS_ERROR',
  error
})


export const getUsers = (dispatch) => {
  dispatch(getUsersBegin())
  return fetch(`${mainURL}/users`)
    .then(resp => {
      dispatch(getUsersSuccess())
      return resp.json()
    })
    .catch(err => {
      dispatch(getUsersError(err))
    })
}

