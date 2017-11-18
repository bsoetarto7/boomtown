import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({component:Component, user, auth, ...rest}) => {
  return(
    
    <Route {...rest} location={rest.location} render={props => {
      console.log(props);
      console.log(auth);
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
}



export default connect(state => {
  return{
    user: state.login.user,
    auth: state.login.auth
  }
})(PrivateRoute);