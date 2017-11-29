import React from 'react';
import { 
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

const PrivateRoute = ({component:Component, user, auth, ...rest}) => {
  if(auth !== null){
    return(
      <Route {...rest} location={rest.location} render={props => {
        
        return (
            user ? (
              <Component {...props}/>
            ) : (
              <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }}/>
            )
      )} }/>
    )
  }else{
    return(
      <CircularProgress size={180} thickness={10} color={'#fff'} />
    )
  }
}



export default connect(state => {
  return{
    user: state.login.user,
    auth: state.login.auth
  }
})(PrivateRoute);