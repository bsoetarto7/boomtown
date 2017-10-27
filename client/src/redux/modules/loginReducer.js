const LOGIN = 'LOGIN';
const  LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => ({
  type: 'LOGIN',
  user:user
})

export const logout = () => ({
  type: 'LOGOUT'
})

export default function(state = {user: null}, action){
  //
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        user:action.user
      }
    case LOGOUT:
      return {
        ...state,
        user:null
      }
    default:
      return state;
  }
}