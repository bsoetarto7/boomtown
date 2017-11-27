import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { formValueSelector } from 'redux-form';
import { 
    Redirect
  } from 'react-router-dom';


class LoginContainer extends Component {

    static propTypes = {
    };

    login = async (e) => {
        e.preventDefault();
        // firebase.auth().createUserWithEmailAndPassword('edivan@redacademy.com', '1234567')
        //         .then( user => firebase.database()
        //                                 .ref(`users/${user.uid}`)
        //                                 .set({
        //                                     email:'edivan@redacademy.com',
        //                                     fullname:'Edivan Henrique',
        //                                     bio:"I like dancing :)"
        //                                 }))
        try{
            await firebase.auth().signInWithEmailAndPassword(this.props.loginValues.loginEmail, this.props.loginValues.loginPass);
        }catch(e){
            console.log(e);
        }
    }

    render() {
        const { user, auth } = this.props
        console.log(user)
        if(user && auth){
            return (
                <Redirect to='/'/>
            )
        }
        return (
            <Login login={this.login} />
        );
    }
}

const mapStateToProps = state => { 
    const values = formValueSelector('loginForm');
    return {
      loginValues: values(state, "loginEmail", "loginPass"),
      user: state.login.user,
      auth: state.login.auth
    }
  };
export default connect(mapStateToProps)(LoginContainer)
