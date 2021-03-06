import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './redux/configStore';
import { loginSuccess, logout } from './redux/modules/loginReducer';
import { 
    BrowserRouter as Router, 
    Route,
    Switch
  } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import PrivateRoute from './PrivateRoute';
import { ItemsCardContainer } from  './containers/Card';
import { ProfileContainer } from  './containers/Profile';
import { NotFound } from './containers/NotFound';
import { ShareContainer } from './containers/Share';

import client from './config/apolloClient';
import firebase from './firebaseHelper';

const store = configStore();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        store.dispatch(loginSuccess(user,true));
    } else {
        store.dispatch(logout(false));
    }
});
const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={ItemsCardContainer} />
                    <PrivateRoute exact path="/profile/:profileID" component={ProfileContainer} />
                    <PrivateRoute exact path="/share" component={ShareContainer}/>
                    <Route path ="*" component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    </MuiThemeProvider>
);

ReactDOM.render(
<ApolloProvider client={client} store={store}>
  <Boomtown />
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();