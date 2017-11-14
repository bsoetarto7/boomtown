import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    console.log(this.props.user);
    return (
      <Route {...this.props} render={props => (
        this.props.user ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    );
  }
}


export default connect(state => {
  return{
    user: state.login
  }
})(PrivateRoute);