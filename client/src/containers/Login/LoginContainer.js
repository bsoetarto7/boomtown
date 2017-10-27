import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { formValueSelector } from 'redux-form';


class LoginContainer extends Component {

    static propTypes = {
    };

    login = async (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword('edivan@redacademy.com', '1234567')
                .then( user => firebase.database()
                                        .ref(`users/${user.uid}`)
                                        .set({
                                            email:'edivan@redacademy.com',
                                            fullname:'Edivan Henrique',
                                            bio:"I like dancing :)"
                                        }))
        // try{
        //     await firebase.auth().signInWithEmailAndPassword(this.props.loginValues.loginEmail, this.props.loginValues.loginPass);
        // }catch(e){
        //     console.log(e);
        // }
    }

    render() {
        
        return (
            <Login login={this.login} />
        );
    }
}

const mapStateToProps = state => { 
    const values = formValueSelector('loginForm');
    return {
      loginValues: values(state, "loginEmail", "loginPass"),
    }
  };
export default connect(mapStateToProps)(LoginContainer)
