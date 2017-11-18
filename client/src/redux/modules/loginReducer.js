const LOGIN = 'LOGIN';
const  LOGOUT = 'LOGOUT';

export const loginSuccess = (user,auth) => ({
  type: 'LOGIN',
  user:user,
  auth:auth
})

export const logout = (auth) => ({
  type: 'LOGOUT',
  auth:auth
})

export default function(state = {user: null,auth:null}, action){
  //
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        user:action.user,
        auth:action.auth
      }
    case LOGOUT:
      return {
        ...state,
        user:null,
        auth:action.auth
      }
    default:
      return state;
  }
}